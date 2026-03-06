import * as THREE from "three";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import type { CubeData, GeoChartOptions } from "../types.js";
import { ChartTypeBase } from "./ChartTypeBase.js";

const BAR_WIDTH = 25;
const BAR_HEIGHT = 25;

export class Bar3DChart extends ChartTypeBase {
  constructor(
    scene: THREE.Scene,
    labelRenderer: CSS2DRenderer,
    cubes: CubeData[],
    options: GeoChartOptions,
    position: google.maps.LatLng,
  ) {
    super(scene, labelRenderer, cubes, options, position);
  }

  protected onPlot(): void {
    super.onPlot();
    const dados = this.options.data || [];
    dados.forEach((d, index) => {
      const color = Math.floor(Math.random() * 0xffffff);
      const material = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.5,
        metalness: 0.5,
        emissive: new THREE.Color(color).multiplyScalar(0.6),
        emissiveIntensity: 0.5,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(
          BAR_HEIGHT,
          BAR_WIDTH,
          Math.abs(d.value) * this.scaleFactor,
        ),
        material,
      );
      const offsetX = this.getOffsetX(index, dados.length);
      const cubeHeight = d.value * this.scaleFactor;
      cube.position.set(offsetX, BAR_WIDTH / 2, cubeHeight / 2);
      cube.userData.offsetX = offsetX;
      cube.userData.height = cubeHeight;
      const labelDiv = document.createElement("div");
      labelDiv.className = "chart-label";
      labelDiv.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(d.value);
      const label = new CSS2DObject(labelDiv);
      const labelOffset = (Math.abs(cubeHeight) / 2 + 5) * Math.sign(d.value);
      label.position.set(0, 0, labelOffset);
      cube.add(label);
      this.scene.add(cube);
      this.cubes.push({
        mesh: cube,
        latLng: new google.maps.LatLng(
          this.position.lat(),
          this.position.lng(),
        ),
      });
    });
  }

  protected getAxisOffsetX(dataLength: number): number {
    return (
      -((this.SPACING * (dataLength - 1)) / 2 + this.SPACING / 2) +
      this.SPACING -
      BAR_WIDTH / 2
    );
  }

  protected getAxisWidth(): number {
    return BAR_WIDTH;
  }
}
