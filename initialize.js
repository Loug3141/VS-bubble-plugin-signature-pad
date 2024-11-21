function init(instance, context) {
	
    instance.data.id = window.signaturePadInstances;
    window.signaturePadInstances = instance.data.id + 1;
    instance.data.myHtml = `<div id="signature-pad-${instance.data.id}" class="signature-pad"><div class="signature-pad--body"><canvas></canvas></div></div>`;
    
    instance.canvas.html(instance.data.myHtml);
    const canvas = instance.canvas.find(`canvas`)[0];
    instance.data.signaturePad = new SignaturePad(canvas, {});
    window.signaturePads.push(instance.data.signaturePad);
    console.log("Signature Pag ID: " + instance.data.id);

    window.signaturePadFunctions.resizeCanvas(instance.data.id);

}