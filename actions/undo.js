function ac(instance, properties, context) {
    const a = instance.data.signaturePad.toData();
    a && (a.pop(), instance.data.signaturePad.fromData(a));
    
    //reset strokeColor
    instance.data.signaturePad.penColor = instance.data.strokeColor;
        
    //reset strokeWidth
    instance.data.signaturePad.minWidth = instance.data.strokeMinWidth;
    instance.data.signaturePad.maxWidth = instance.data.strokeMaxWidth;
}