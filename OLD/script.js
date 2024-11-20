window.signaturePads.wrapperID1 = document.getElementById("signature-pad-ID1");
const clearButton = window.signaturePads.wrapperID1.querySelector(
  "[data-action=clear]"
);
const changeBackgroundColorButton =
  window.signaturePads.wrapperID1.querySelector(
    "[data-action=change-background-color]"
  );
const changeColorButton = window.signaturePads.wrapperID1.querySelector(
  "[data-action=change-color]"
);
const changeWidthButton = window.signaturePads.wrapperID1.querySelector(
  "[data-action=change-width]"
);
const undoButton =
  window.signaturePads.wrapperID1.querySelector("[data-action=undo]");
const savePNGButton = window.signaturePads.wrapperID1.querySelector(
  "[data-action=save-png]"
);
const saveJPGButton = window.signaturePads.wrapperID1.querySelector(
  "[data-action=save-jpg]"
);
const saveSVGButton = window.signaturePads.wrapperID1.querySelector(
  "[data-action=save-svg]"
);
const saveSVGtoBubble = window.signaturePads.wrapperID1.querySelector(
  "#sign-pad-save-to-bubble-ID1"
);
const saveSVGWithBackgroundButton =
  window.signaturePads.wrapperID1.querySelector(
    "[data-action=save-svg-with-background]"
  );
const canvas = window.signaturePads.wrapperID1.querySelector("canvas");
window.signaturePads.signaturePadID1 = new SignaturePad(canvas, {
  // It's Necessary to use an opaque color when saving image as JPEG;
  // this option can be omitted if only saving as PNG or SVG
  //backgroundColor: "rgb(255, 255, 255)",
});

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  const ratio = Math.max(window.devicePixelRatio || 1, 1);

  // This part causes the canvas to be cleared
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);

  // This library does not listen for canvas changes, so after the canvas is automatically
  // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
  // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
  // that the state of this library is consistent with visual state of the canvas, you
  // have to clear it manually.
  //window.signaturePads.signaturePadID1.clear();

  // If you want to keep the drawing on resize instead of clearing it you can reset the data.
  window.signaturePads.signaturePadID1.fromData(
    window.signaturePads.signaturePadID1.toData()
  );
}

// On mobile devices it might make more sense to listen to orientation change,
// rather than window resize events.
window.onresize = resizeCanvas;
resizeCanvas();

clearButton.addEventListener("click", () => {
  window.signaturePads.signaturePadID1.clear();
});

undoButton.addEventListener("click", () => {
  const data = window.signaturePads.signaturePadID1.toData();

  if (data) {
    data.pop(); // remove the last dot or line
    window.signaturePads.signaturePadID1.fromData(data);
  }
});

savePNGButton.addEventListener("click", () => {
  if (window.signaturePads.signaturePadID1.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    const dataURL = window.signaturePads.signaturePadID1.toDataURL();
    download(dataURL, "signature.png");
  }
});

saveJPGButton.addEventListener("click", () => {
  if (window.signaturePads.signaturePadID1.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    const dataURL =
      window.signaturePads.signaturePadID1.toDataURL("image/jpeg");
    download(dataURL, "signature.jpg");
  }
});

saveSVGButton.addEventListener("click", () => {
  if (window.signaturePads.signaturePadID1.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    const dataURL =
      window.signaturePads.signaturePadID1.toDataURL("image/svg+xml");
    download(dataURL, "signature.svg");
  }
});

saveSVGWithBackgroundButton.addEventListener("click", () => {
  if (window.signaturePads.signaturePadID1.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    const dataURL = window.signaturePads.signaturePadID1.toDataURL(
      "image/svg+xml",
      {
        includeBackgroundColor: true,
      }
    );
    download(dataURL, "signature.svg");
  }
});
