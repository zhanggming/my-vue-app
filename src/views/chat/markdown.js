// markdown.js
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';

// 初始化 markdown-it，关闭原生 HTML 渲染防 XSS
const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true // 允许回车换行
});

// 包装渲染函数，并用 DOMPurify 净化
export function renderMarkdown(content) {
  if (!content) return '';
  const rawHtml = md.render(content);
  return DOMPurify.sanitize(rawHtml);
}
