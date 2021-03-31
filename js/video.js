var video = document.getElementById('player1');


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.getElementById("volume").innerHTML = video.volume * 100 + '%';
 });

 document.querySelector("#pause").addEventListener("click", function() {
	 video.pause();
		console.log("Video is paused");
  });

document.querySelector("#slower").addEventListener("click", function() {
	 video.playbackRate = video.playbackRate * 0.95;
 	 console.log("Video speed is now:" + video.playbackRate);
   });

document.querySelector("#faster").addEventListener("click", function() {
	 video.playbackRate = video.playbackRate * 1.05;
	 console.log("Video speed is now:" + video.playbackRate);
 });


document.querySelector("#skip").addEventListener("click", function() {
	 console.log("Original location: " + video.currentTime);
	 if (video.currentTime + 15 > video.duration) {
		 console.log("Going back to the beginning");
		 video.currentTime = 0;
	 }
	 else {
		 video.currentTime = video.currentTime + 15;
	 }
	 console.log("New location:" + video.currentTime);
 });


	document.querySelector("#mute").addEventListener("click", function() {
		if (!video.muted) {
			video.muted = true;
			console.log("Video is muted");
			document.getElementById("mute").innerHTML = 'Unmute';
		}
		else {
			video.muted = false;
			console.log("Video is unmuted");
		}

	 });

var slider = document.getElementById("slider");
var output = document.getElementById("volume");


 slider.oninput = function() {
   output.innerHTML = slider.value + "%";
 }

 document.querySelector("#vintage").addEventListener("click", function() {
 	 document.querySelector("video").classList.add('oldSchool');
 	 console.log("Style changed to old school");
  });
document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove('oldSchool');
	console.log("Style changed to original");
 });
