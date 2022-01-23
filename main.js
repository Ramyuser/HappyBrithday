var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {

    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        blockimg_image_object = Img;

        blockimg_image_object.scaleToWidth(700);
        blockimg_image_object.scaleToHeight(510);
        blockimg_image_object.set({
            top: 0,
            left: 0
        });
        canvas.add(blockimg_image_object);
    });
}


function playSound() {
    x.play();
}