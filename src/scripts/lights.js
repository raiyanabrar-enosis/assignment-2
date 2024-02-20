import * as THREE from "three";

export default function setupLights(scene) {
	let ambientLight = new THREE.AmbientLight(0x888888);
	scene.add(ambientLight);
	const pointLight = new THREE.PointLight(0xffffff, 13000, 300);
	scene.add(pointLight);

	return [ambientLight, pointLight];
}
