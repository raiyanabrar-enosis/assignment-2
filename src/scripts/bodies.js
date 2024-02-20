import * as THREE from "three";
const textureloader = new THREE.TextureLoader();

export function createSun(texture, scene) {
	const sungeometry = new THREE.SphereGeometry(13, 32, 32);
	const sunmaterial = new THREE.MeshBasicMaterial({
		map: textureloader.load(texture),
	});
	const sun = new THREE.Mesh(sungeometry, sunmaterial);
	scene.add(sun);
	return sun;
}

export function createPlanet(scale, texture, pos, parent) {
	const geo = new THREE.SphereGeometry(scale, 32, 32);
	const mat = new THREE.MeshStandardMaterial({
		map: textureloader.load(texture),
	});
	const mesh = new THREE.Mesh(geo, mat);
	const obj = new THREE.Object3D();
	obj.add(mesh);

	parent.add(obj);
	mesh.position.x = pos;
	return { mesh, obj };
}

export function rotateSelf(sun, earth, moon) {
	sun.rotateZ(0.001);
	earth.mesh.rotateZ(0.01);
	moon.mesh.rotateZ(0.02);
}

export function rotateAround(earth, moon) {
	earth.obj.rotateZ(0.005);
	moon.obj.rotateZ(0.02);
}
