noseX=0;
noseY=0;
function preload() { clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png'); }
function modelLoaded() {
console.log('PoseNet Is Initialized');
}
function godPoses() {
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x-40;
noseY=results[0].pose.nose.y;
}
}
function draw(){
Image
}