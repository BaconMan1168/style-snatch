document.addEventListener("click", async (e) => {
  if (!e.shiftKey) return;

  try {
    const eyeDropper = new EyeDropper();
    const result = await eyeDropper.open();

    // Store color directly in chrome.storage.local
    chrome.storage.local.get({ colors: [] }, (res) => {
      const updated = [...res.colors, result.sRGBHex];
      chrome.storage.local.set({ colors: updated });
    });

    console.log("Color picked:", result.sRGBHex);
  } catch (err) {
    console.error("Eyedropper failed:", err);
  }
});


