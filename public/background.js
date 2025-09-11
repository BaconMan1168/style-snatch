chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "grab-font",
    title: "Grab Font Info",
    contexts: ["all"]
  });
});

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

  const el = selection.getRangeAt(0).startContainer.parentElement;
  if (!el) return;

  const styles = window.getComputedStyle(el);

  const fontInfo = {
    font: styles.fontFamily,
    size: styles.fontSize,
    weight: styles.fontWeight,
    color: styles.color,
    text: selection.toString()
  };

  // Store directly in chrome.storage.local
  chrome.storage.local.get({ fonts: [] }, (res) => {
    const updated = [...res.fonts, fontInfo];
    chrome.storage.local.set({ fonts: updated });
  });

  navigator.clipboard.writeText(`
Font: ${fontInfo.font}
Size: ${fontInfo.size}
Weight: ${fontInfo.weight}
Color: ${fontInfo.color}
Text: ${fontInfo.text}
  `);
}
