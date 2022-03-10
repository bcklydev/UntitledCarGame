import './style.css'

import * as THREE from 'three';

//Creating the scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#game'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

//User Input
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let direction = "forward";
let speed = 0.2;

function keyDownHandler(e) {
  if(e.keyCode == "65") {
    direction = "left";
  }
  else if(e.keyCode == "68") {
    direction = "right";
  }
}

function keyUpHandler(e) {
  if(e.keyCode == "65") {
    direction = "forward";
  }
  else if(e.keyCode == "68") {
    direction = "forward";
  }
}


//Create the object
const geometry = new THREE.BoxGeometry(5, 5, 10);
const material = new THREE.MeshBasicMaterial({color: 0x00FF00, wireframe: true});
const vehicle = new THREE.Mesh(geometry, material);
vehicle.rotation.y = 2;
vehicle.rotation.x = 0.1;
scene.add(vehicle);


//Animate the scene
function animate() {
  requestAnimationFrame(animate);

  if(direction == "left") {
    vehicle.rotation.y += 0.05;
  }
  else if(direction == "right") {
    vehicle.rotation.y -= 0.05;
  }

  vehicle.translateZ(speed);

  renderer.render(scene, camera);
}

animate();