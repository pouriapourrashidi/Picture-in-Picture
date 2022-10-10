const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMedia(){
    navigator.mediaDevices.getDisplayMedia().then(data => {videoElement.srcObject=data; 
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }})

}


button.addEventListener('click', async () => {
    button.disabled=true;
    await videoElement.requestPictureInPicture();
    button.disabled=false;
});

selectMedia();