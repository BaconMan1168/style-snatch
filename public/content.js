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


//tentative
document.addEventListener("mouseover", function(e) {
  const el = e.target;
  const rect = el.getBoundingClientRect();

  let overlay = document.getElementById("element-ruler-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "element-ruler-overlay";
    overlay.style.position = "absolute";
    overlay.style.border = "2px dashed red";
    overlay.style.backgroundColor = "rgba(255,0,0,0.1)";
    overlay.style.pointerEvents = "none";
    overlay.style.zIndex = 9999;
    document.body.appendChild(overlay);
  }

  overlay.style.top = rect.top + "px";
  overlay.style.left = rect.left + "px";
  overlay.style.width = rect.width + "px";
  overlay.style.height = rect.height + "px";
})