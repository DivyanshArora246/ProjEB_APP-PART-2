Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_qulity: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    });
}

console.ml5('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_6q9wDDuI/model.json', modelLoaded);
