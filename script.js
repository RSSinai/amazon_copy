function changeBackgroundImage() {
  // Get the background image of div1
  var div1 = document.getElementsByClassName("grid-item");
  var backgroundImage = window.getComputedStyle(div1).getPropertyValue("background-image");

  // Set the background image of div2
  var div2 = document.getElementsByClassName("element grid-item");
  div2.style.backgroundImage = backgroundImage;
}
