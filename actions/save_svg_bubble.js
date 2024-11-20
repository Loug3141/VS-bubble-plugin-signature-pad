function ac(instance, properties, context) {
    
	let image = dataURLGen(instance.data.id, "image/svg+xml");
    context.uploadContent("signaturePad-"+Date.now()+".svg", image.split('base64,')[1], (err,url) => {

        if(err !== null) {
            alert("Error: "+ err);
            console.log(err);
        } else {
            instance.publishState('signature_image', url);
            instance.triggerEvent('signature_saved');
        }

    }, properties.attach_to)

}