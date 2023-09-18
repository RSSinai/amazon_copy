function changeBackgroundImage() {
    // Get the background image of div1
    var div1 = document.getElementsByClassName("grid-item");
    var div1ComputedStyle = window.getComputedStyle(div1);
    var div1BackgroundImage = div1ComputedStyle.getPropertyValue("background-image");
  
    // Set the background image of div2 to the background image of div1
    var div2 = document.getElementsByClassName("element grid-item");
    div2.style.backgroundImage = div1BackgroundImage;
  }