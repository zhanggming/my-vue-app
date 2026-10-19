// streamChat.js

/**
 * 处理大模型 SSE 流式响应的通用函数
 * @param {Object} options
 * @param {Array} options.messages 消息历史 [{ role: 'user', content: '...' }]
 * @param {AbortSignal} options.signal 用于中断请求的 AbortController.signal
 * @param {Function} options.onToken 接收到新 token 时的回调 (token) => void
 * @param {Function} options.onDone 流结束时的回调 () => void
 * @param {Function} options.onError 发生错误时的回调 (error) => void
 */
export async function streamChat({
  messages,
  signal,
  onToken,
  onDone,
  onError,
}) {
  try {
    const res = await fetch('/aChat/api/v1/agent/agent/chat', { // 替换为你实际的接口地址
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, stream: true }),
      signal,
    });

    if (!res.ok || !res.body) {
      throw new Error(`请求失败: ${res.status} ${res.statusText}`);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // 关键：stream: true 让 decoder 缓存不完整的多字节字符
      buffer += decoder.decode(value, { stream: true });

      // SSE 以 \n\n 分隔事件
      const blocks = buffer.split('\n\n');
      buffer = blocks.pop() || ''; // 最后一段可能不完整，留到下次循环

      for (const block of blocks) {
        const line = block.trim();
        if (!line.startsWith('data:')) continue;

        const data = line.slice(5).trim();

        // 后端约定的结束标志
        if (data === '[DONE]') {
          if (onDone) onDone();
          return;
        }

        try {
          const json = JSON.parse(data);
          if (json.token) {
            if (onToken) onToken(json.token);
          }
          if (json.error) {
            throw new Error(json.error); // 捕获后端返回的业务错误
          }
        } catch (e) {
          // 如果解析 JSON 失败，说明是半条数据（理论上按 \n\n 切分后不会发生）
          console.warn('SSE 数据解析失败，忽略该条:', data);
        }
      }
    }

    if (onDone) onDone();
  } catch (err) {
    // 如果是用户主动中断，静默处理
    if (err.name === 'AbortError') return;

    if (onError) onError(err);
  }
}
