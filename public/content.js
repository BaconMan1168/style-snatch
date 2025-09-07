async function pickColor() {
  try {
    const eyeDropper = new EyeDropper();
    const result = await eyeDropper.open();
    navigator.clipboard.writeText(result.sRGBHex);
    alert(`Color copied: ${result.sRGBHex}`);
  } catch (err) {
    console.error("Color pick failed", err);
  }
}


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