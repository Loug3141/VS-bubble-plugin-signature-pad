function ac(instance, properties, context) {
    
    instance.data.signaturePad.clear();
    
    //reset strokeColor
    instance.data.signaturePad.penColor = instance.data.strokeColor;
        
    //reset strokeWidth
    instance.data.signaturePad.minWidth = instance.data.strokeMinWidth;
    instance.data.signaturePad.maxWidth = instance.data.strokeMaxWidth;
    
    //reset state
    instance.publishState('signature_image', '');

}