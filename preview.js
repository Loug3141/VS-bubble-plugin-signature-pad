function preview(instance, properties) {

	instance.canvas.html(`<img src="https://s3.amazonaws.com/appforest_uf/f1680208839439x601364827189688600/icon.png" />`)
    instance.canvas.find("img").css("display","block");
    instance.canvas.find("img").css("margin","-2px auto");
    instance.canvas.find("img").css("max-width","100%");
    //instance.canvas.css("background-color",properties.backgroundColor);
    instance.canvas.css("overflow-y","hidden");

}