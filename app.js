const video1 = document.getElementById('pv1');
const video2 = document.getElementById('pv2');
const video3 = document.getElementById('pv3');
const video4 = document.getElementById('pv4');
const hoverSign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3, video4];
videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', function(){
        video.pause();
        hoverSign.classList.remove("active")
    })
})