import * as THREE from "three";

export class SceneConfigurator {
  constructor(scene: THREE.Scene) {
    this.configureLights(scene);
  }

  private configureLights(scene: THREE.Scene) {
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.6);
    scene.add(hemiLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(1000, -100, 1000);
    scene.add(dirLight);
  }
}
