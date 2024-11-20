function ac(instance, properties, context) {

    let image = dataURLGen(instance.data.id);
    context.uploadContent("signaturePad-"+Date.now()+".png", image.split('base64,')[1], (err,url) => {

        if(err !== null) {
            alert("Error: "+ err);
            console.log(err);
        } else {
            instance.publishState('signature_image', url);
            instance.triggerEvent('signature_saved');
        }

    }, properties.attach_to)

}