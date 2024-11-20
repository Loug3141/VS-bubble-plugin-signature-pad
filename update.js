function update(instance, properties, context) {

	//strokeColor
    instance.data.signaturePad.penColor = properties.strokeColor;
    instance.data.strokeColor = properties.strokeColor;
        
    //strokeWidth
    instance.data.signaturePad.minWidth = properties.strokeMinWidth;
    instance.data.strokeMinWidth = properties.strokeMinWidth;
    instance.data.signaturePad.maxWidth = properties.strokeMaxWidth;
    instance.data.strokeMaxWidth = properties.strokeMaxWidth;
    
    //instance.canvas.css("background-color",properties.backgroundColor);

}