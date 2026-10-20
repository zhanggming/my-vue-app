<!-- ChatView.vue -->
<template>
  <div class="chat-container">
    <div class="messages">
      <!-- MarkdownRender渲染 -->
      <article v-for="(message, i) in messages" :key="i" class="chat-message" :class="`chat-message--${message.role}`">
        <!-- <MarkdownRender v-if="message.role === 'assistant'" custom-id="chat" mode="chat" :content="message.content"
          :final="message.isDone" :smooth-streaming="message.isDone ? false : 'auto'" fade :typewriter="!message.isDone"
          v-bind="message.isDone ? {} : { maxLiveNodes: 0 }" /> -->
        <!-- 思考过程 -->
        <MarkdownRender v-if="message.reasoning" :content="message.reasoning" mode="chat" />
        <!-- 最终回答 -->
        <MarkdownRender v-if="message.role === 'assistant' && !message.reasoning" :content="message.content"
          :final="message.isDone" mode="chat" />
        <p v-else class="user-text">
          {{ message.content }}
        </p>
      </article>
      <!-- 使用 v-html 渲染解析后的 Markdown -->
      <!-- 用户消息直接纯文本展示即可 -->
      <!-- <div v-for="(msg, i) in messages" :key="i">
        <strong>{{ msg.role }}:</strong>
        <div v-if="msg.role === 'assistant'" class="markdown-body" v-html="renderMarkdown(msg.content)"></div>
        <span v-else>{{ msg.content }}</span>
        <span v-if="isStreaming && i === messages.length - 1">|</span>
      </div> -->
    </div>
    <div class="tool-box">
      <el-input v-model="input" @keyup.enter="send" :rows="2" type="textarea" placeholder="给人工智能发消息"
        :disabled="isStreaming" :autosize="{ minRows: 7, maxRows: 10 }" />
      <div class="button-list">
        <el-button v-if="!isStreaming" @click="send" type="success">发送</el-button>
        <el-button v-else @click="stop" type="success">停止</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import MarkdownRender from 'markstream-vue'
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
  messages.value.push({ role: 'user', content: text, });
  messages.value.push({ role: 'assistant', content: '', });

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
      // 标记该条消息的流已结束
      messages.value[messages.value.length - 1].isDone = true;
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
<style lang="less" scoped>
.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* 建议给 .markdown-body 添加一些基础样式，比如代码块背景色等 */
.markdown-body {
  background-color: #fff;
}

.chat-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fff;

  .messages {
    width: 100%;
    height: calc(100% - 160px);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0 10px;
  }

  .tool-box {
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 10px;

    .button-list {
      position: absolute;
      right: 10px;
      bottom: 0;
    }
  }
}
</style>
