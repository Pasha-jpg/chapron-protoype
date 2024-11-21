
/*rightclick disbale*/
function disableRightClick(event) {
    if (event.button == 2) {
      event.preventDefault(); // Prevent the default right-click behavior
      alert("Right click disabled!");
      return false;
    }
  }

/*mobile-nav-*/
function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }




/*grid-gallery*/

