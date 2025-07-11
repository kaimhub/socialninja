// Add fade-in animation class to new messages
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === 1 && node.classList.contains('hl-line')) {
        node.classList.add('animate-in');
      }
    }
  }
});

const chatContainer = document.querySelector('body');
if (chatContainer) {
  observer.observe(chatContainer, { childList: true, subtree: true });
}
