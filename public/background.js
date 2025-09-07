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

// This function will run in the context of the page
function grabFontInfo() {
  const el = document.activeElement || document.body; // fallback
  const styles = window.getComputedStyle(el);
  const fontInfo = `
Font: ${styles.fontFamily}
Size: ${styles.fontSize}
Weight: ${styles.fontWeight}
Color: ${styles.color}
  `;
  navigator.clipboard.writeText(fontInfo).then(() => {
    alert(`Copied font info:\n${fontInfo}`);
  });
}