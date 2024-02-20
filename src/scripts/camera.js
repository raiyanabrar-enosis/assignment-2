import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const fov = 50;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

export function initCamera(renderer) {
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.target = new THREE.Vector3();

	// Orbit Controls
	const orbit = new OrbitControls(camera, renderer.domElement);
	camera.position.set(0, -100, -100);
	orbit.update();

	return camera;
}

export function zoomIn(camera) {
	const lookDirection = new THREE.Vector3();
	lookDirection.copy(camera.position).sub(camera.target).normalize();
	camera.position.addScaledVector(lookDirection, -5);
}
export function zoomOut(camera) {
	const lookDirection = new THREE.Vector3();
	lookDirection.copy(camera.position).sub(camera.target).normalize();
	camera.position.addScaledVector(lookDirection, 5);
}
