var test = document.getElementById("test");

var positionX = 0;
var positionY = 0;
var directionX = 1;
var directionY = 1;

function animate() {
  positionX += directionX;
  positionY += directionY;

  if (positionX > window.innerWidth - test.offsetWidth || positionX < 0) {
    directionX *= -1;
  }

  if (positionY > window.innerHeight - test.offsetHeight || positionY < 0) {
    directionY *= -1;
  }

  test.style.left = positionX + "px";
  test.style.top = positionY + "px";

  requestAnimationFrame(animate);
}

animate();
