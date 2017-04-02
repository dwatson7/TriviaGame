$(window).load(function() {
 // executes when complete page is fully loaded, including all frames, objects and images

});
var count = 30;


// 1000 will run every run it every 1 second
var counter = setInterval(timer, 1000);

function timer(){

  count= count -1;
  if (count <= 0) {

    clearInterval(counter);

  }
}
});
