const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element
async function selectMediaStream () {
   try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
         videoElement.play();
      };
   } catch (error) {
      console.log(error);
   }
}

button.addEventListener("click", async () => {
   // disabled button
   button.disable = true;
   // start picture in picture
   await videoElement.requestPictureInPicture();
   //reset button
   button.disable = false;
});

// onLoad 
selectMediaStream();