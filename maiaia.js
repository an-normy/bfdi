function setup() {
    canvas = createCanvas(400,400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier('MobileNet', modelloaded)
}
function modelloaded() {
    console.log("Model Loaded!")
}
function draw(){
    image(video,0,0,400,400)
    classifier.classify(video, getResult)
}
function getResult(error, results) {
    if (error) {
        console.log("oh noes! This is the error: " + error)
    } else {
        console.log(results[0].label)
        document.getElementById("div1").innerHTML = results[0].label
        document.getElementById("div2").innerHTML = results[0].confidence.toFixed(3)
        var speakData = "o objeto dedectado foi :" + results[0].label
        var synth = window.speechSynthesis;
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);

    }
}
