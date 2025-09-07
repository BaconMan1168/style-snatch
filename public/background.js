// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "grab-font",
    title: "Grab Font Info",
    contexts: ["all"]
  });
});

// When context menu is clicked
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "grab-font") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: grabFontInfo
    });
  }
});

function grabFontInfo() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const el = range.startContainer.parentElement; // element containing the start of selection
  if (!el) return;

  const styles = window.getComputedStyle(el);

  const fontInfo = {
    font: styles.fontFamily,
    size: styles.fontSize,
    weight: styles.fontWeight,
    color: styles.color,
    text: selection.toString() // optionally store selected text
  };

  chrome.runtime.sendMessage({ type: "FONT_GRABBED", payload: fontInfo });

  // Optional: copy to clipboard
  navigator.clipboard.writeText(`
Font: ${fontInfo.font}
Size: ${fontInfo.size}
Weight: ${fontInfo.weight}
Color: ${fontInfo.color}
Text: ${fontInfo.text}
  `);
}