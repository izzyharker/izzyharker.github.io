import * as THREE from "three";
import "../style.css";

const parent_div = document.querySelector(".home")
let height = parent_div.clientHeight;
let width = parent_div.clientWidth;

console.log(width, height)

const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({canvas, alpha: true})
renderer.setSize( width, height );
renderer.setPixelRatio(devicePixelRatio)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

scene.background = null

const geometry = new THREE.TorusGeometry( 5, 2, 8, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 10;
camera.position.x = 5;
camera.position.y = 5;
camera.lookAt(new THREE.Vector3(0, 0, 0))


function animate() {
	requestAnimationFrame( animate );
    torus.rotation.x += 0.01
    torus.rotation.y += 0.01
	renderer.render( scene, camera );
}

animate();