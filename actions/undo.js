function ac(instance, properties, context) {

    $(`#sign-pad-undo-${instance.data.id}`).click();
    
    //reset strokeColor
    instance.data.signaturePad.penColor = instance.data.strokeColor;
        
    //reset strokeWidth
    instance.data.signaturePad.minWidth = instance.data.strokeMinWidth;
    instance.data.signaturePad.maxWidth = instance.data.strokeMaxWidth;

}