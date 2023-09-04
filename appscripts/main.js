function jumptoabout(){
    document.getElementById("aboutme").scrollIntoView();
}

function windowprompt(){ 
    alert("Thank you for visting my portfolio! \nDo note that this site will still be going through changes! (ꈍᴗꈍ) \n\n-Michelle");
  }

  // to execute function upon opening loading the page
  window.addEventListener('load', function(){
    // get the element id of myAudio
    let myAudio = document.getElementById("myAudio");
    
    //set isplaying to true on play
    myAudio.onplaying = function() {
      isPlaying = true;
    };

    //set isplaying to false on pause 
    myAudio.onpause = function() {
      isPlaying = false;
    };
});


  //let is playing to be set to false at first so music doesnt play first unless button is pressed.
let isPlaying = false;

// declare function to toggle between play and pause
function togglePlay() {
    if (isPlaying) {
        myAudio.pause()
    } else {
        myAudio.play();
    }}

