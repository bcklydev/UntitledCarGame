import './style.css'

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


//Creating the scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#game'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(10);
camera.position.setY(2);

//User Input
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let direction = "forward";
let speed = 0.1;

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

//Background
const backgroundColour = new THREE.Color(0x333333);
scene.background = backgroundColour;

//Lights
const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffffff, 4);
pointLight.position.set(5, 5, 5);
scene.add(ambientLight, pointLight);

//3D model directory
const models = [
  "./ambulance.glb",
  "./delivery.glb",
  "./deliveryFlat.glb",
  "./firetruck.glb",
  "./garbageTruck.glb",
  "./hatchbackSports.glb",
  "./police.glb",
  "./race.glb",
  "./raceFuture.glb",
  "./sedan.glb",
  "./sedanSports.glb",
  "./suv.glb",
  "./suvLuxury.glb",
  "./taxi.glb",
  "./tractor.glb",
  "./tractorPolice.glb",
  "./tractorShovel.glb",
  "./truck.glb",
  "./truckFlat.glb",
  "./van.glb"
]
let modelPath = models[Math.floor(Math.random() * models.length)];

//Load 3D objects
const loader = new GLTFLoader();
let vehicle;
let loaded = false;

loader.load( modelPath, function ( gltf ) {
	scene.add( gltf.scene );
  vehicle = gltf.scene;
  vehicle.rotation.y = 2;
  vehicle.rotation.x = 0.1;
  loaded = true;
}, undefined, function ( error ) {
	console.error( error );
} );


//Animate the scene
function animate() {
  requestAnimationFrame(animate);

  if(loaded) {
    if(direction == "left") {
      vehicle.rotation.y += 0.05;
    }
    else if(direction == "right") {
      vehicle.rotation.y -= 0.05;
    }

    vehicle.translateZ(-speed);
  }

  renderer.render(scene, camera);
}

animate();