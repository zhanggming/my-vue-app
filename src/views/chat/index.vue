<!-- ChatView.vue -->
<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(msg, i) in messages" :key="i">
        <strong>{{ msg.role }}:</strong>
        <!-- 使用 v-html 渲染解析后的 Markdown -->
        <div
          v-if="msg.role === 'assistant'"
          class="markdown-body"
          v-html="renderMarkdown(msg.content)"
        ></div>
        <!-- 用户消息直接纯文本展示即可 -->
        <span v-else>{{ msg.content }}</span>
        <span v-if="isStreaming && i === messages.length - 1">|</span>
      </div>
    </div>
    <input v-model="input" @keyup.enter="send" :disabled="isStreaming" />
    <button v-if="!isStreaming" @click="send">发送</button>
    <button v-else @click="stop">停止</button>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import { streamChat } from './streamChat.js';
import { renderMarkdown } from './markdown.js'; // 引入渲染工具

const messages = ref([]);
const input = ref('');
const isStreaming = ref(false);
let controller = null;

const send = async () => {
  const text = input.value.trim();
  if (!text || isStreaming.value) return;

  input.value = '';
  messages.value.push({ role: 'user', content: text });
  messages.value.push({ role: 'assistant', content: '' });

  isStreaming.value = true;
  controller = new AbortController();
  const currentMessages = messages.value.slice(0, -1);

  await streamChat({
    messages: currentMessages,
    signal: controller.signal,
    onToken: (token) => {
      // 修改最后一条 assistant 消息
      messages.value[messages.value.length - 1].content += token;
    },
    onDone: () => {
      isStreaming.value = false;
      controller = null;
    },
    onError: (err) => {
      messages.value[messages.value.length - 1].content += `\n[错误] ${err.message}`;
      isStreaming.value = false;
      controller = null;
    }
  });
};

const stop = () => {
  if (controller) controller.abort();
  isStreaming.value = false;
  controller = null;
};

onUnmounted(() => {
  if (controller) controller.abort();
});
</script>
<style scoped>
.cursor { animation: blink 1s infinite; }
@keyframes blink { 50% { opacity: 0; } }
/* 建议给 .markdown-body 添加一些基础样式，比如代码块背景色等 */
.markdown-body{
  background-color: #fff;
}
</style>
