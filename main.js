Webcam.set({

width:350,height:350,image_format:'png',png_quality:90

});

cam=document.getElementById("camera");
Webcam.attach(camera);

function takephoto()
{

Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="myimg" src="'+data_uri+'"/> ';
}
);
}
console.log("ml5 version: ",ml5.version)
mymodel=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cwTB9kvdh/model.json',modelLoaded);

function modelLoaded()
{

console.log("My Model has Loaded")

}

function recog()
{

i1=document.getElementById("myimg");
mymodel.classify(i1, gotResult);

}

function gotResult(error,results)
{

if(error)
{

console.log(error)

}
else{

console.log(results)
document.getElementById("name").innerHTML=results[0].label;
document.getElementById("percent").innerHTML=results[0].confidence.toFixed(3);

}


}