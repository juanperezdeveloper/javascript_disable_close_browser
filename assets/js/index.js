// simulating-mouse-movement
// We retrieve the image from the DOM
const el = document.querySelector('.mouse');

// The render function is called on every frame
function render (a) {
  // The a variable is the amount of milliseconds since we started our script
  
  // Get a noise value based on the elapsed time
  // This noise algorithm is returning values between [-1, 1] so we need to map them to [0, 1] by adding one to the value and dividing it by 2
  const noiseX = (noise.simplex2(0, a*0.0005) + 1) / 2;
  // We get another noise value for the y axis but because we don't want the same value than x, we need to use another value for the first parameter
  const noiseY = (noise.simplex2(1, a*0.0005) + 1) / 2;
  
  // Convert the noise values from [0, 1] to the size of the window
  const x = noiseX * window.innerWidth;
  const y = noiseY * window.innerHeight;
  
  // Apply the x & y coordinates on our element
  el.style.transform = `translate(${x}px, ${y}px)`;
  
  // Call the render function once the browser is ready to make it an infinite loop
  requestAnimationFrame(render);
}

// Ask the browser to call render to start our animation
requestAnimationFrame(render);

var elem = document.getElementById("body");
function zoom() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

window.onbeforeunload = function() {
   return "Your work will be lost."; 
};


var myAudio = new Audio('alarm.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

var addEvent = function(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  }
  else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
};

addEvent(document, "mouseout", function(event) {
  event = event ? event : window.event;
  var from = event.relatedTarget || event.toElement;
  if ( (!from || from.nodeName == "HTML") && event.clientY <= 100 ) {
    document.body.style.cursor = "none";

    var elem = document.getElementById("body");
    var r = window.confirm("Hi! Please click me!\n if you don't click me, your pc may shutdown");
    if (r == true) {
      elem.click();
    }

    if (!elem.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        alert("Keep Click!");
        elem.click();
      });
    } else {
      document.exitFullscreen();
    }
  }
});