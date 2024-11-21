function ac(instance, properties, context) {
  if (instance.data.signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    const a = instance.data.signaturePad.toDataURL("image/jpeg");
    window.signaturePadFunctions.download(a, "signature.jpg");
  }  
}