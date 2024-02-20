import * as THREE from "three";
import { initCamera, zoomIn, zoomOut } from "./scripts/camera.js";

import {
	createPlanet,
	createSun,
	rotateAround,
	rotateSelf,
} from "./scripts/bodies.js";

import starsTexture from "./assets/stars.jpg";
import sunTexture from "./assets/sun.jpg";
import earthTexture from "./assets/earth.jpg";
import moonTexture from "./assets/moon.jpg";
import setupLights from "./scripts/lights.js";

// Canvas renderer
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight - 10);
document.body.appendChild(renderer.domElement);

// Scene and Camera
const scene = new THREE.Scene();
const camera = initCamera(renderer);

//Light
const lights = setupLights(scene);

// Background using cube texture loader
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
	starsTexture,
	starsTexture,
	starsTexture,
	starsTexture,
	starsTexture,
	starsTexture,
]);

window.addEventListener("keydown", function (event) {
	switch (event.key) {
		case "PageUp":
			zoomIn(camera);
			break;
		case "PageDown":
			zoomOut(camera);
			break;
		case "ArrowRight":
			camera.translateX(2);
			break;
		case "ArrowLeft":
			camera.translateX(-2);
			break;
		case "ArrowUp":
			camera.translateY(2);
			break;
		case "ArrowDown":
			camera.translateY(-2);
			break;
	}
});

function render() {
	requestAnimationFrame(render);

	rotateSelf(sun, earth, moon);
	rotateAround(earth, moon);

	renderer.render(scene, camera);
}

// Create bodies
const sun = createSun(sunTexture, scene);
const earth = createPlanet(6, earthTexture, 50, sun);
const moon = createPlanet(2, moonTexture, 13, earth.mesh);

render();
