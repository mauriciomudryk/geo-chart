import * as THREE from "three";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import type { CubeData, GeoChartOptions } from "../types.js";
import { ChartTypeBase } from "./ChartTypeBase.js";

export class Line3DChart extends ChartTypeBase {
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
    if (dados.length < 1) return;
    const points: THREE.Vector3[] = [];
    dados.forEach((d, index) => {
      const offsetX = this.getOffsetX(index, dados.length);
      const height = d.value * this.scaleFactor;
      const point = new THREE.Vector3(offsetX, 0, height);
      points.push(point);
      const pointObject = new THREE.Object3D();
      pointObject.position.copy(point);
      const labelDiv = document.createElement("div");
      labelDiv.className = "chart-label";
      labelDiv.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(d.value);
      const label = new CSS2DObject(labelDiv);
      label.position.set(0, 0, 5);
      pointObject.add(label);
      this.scene.add(pointObject);
      this.cubes.push({
        mesh: new THREE.Mesh(),
        latLng: new google.maps.LatLng(
          this.position.lat(),
          this.position.lng(),
        ),
      });
    });
    if (points.length < 2) return;
    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeometry = new THREE.TubeGeometry(curve, 64, 2, 8, false);
    const tubeMaterial = new THREE.MeshStandardMaterial({
      color: this.options.color || 0xffffff,
      roughness: 0.5,
      metalness: 0.5,
      emissive: new THREE.Color(this.options.color || 0xffffff).multiplyScalar(
        0.6,
      ),
      emissiveIntensity: 0.5,
    });
    const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    this.scene.add(tube);
    if (this.options.fill) {
      const curvePoints = curve.getPoints(64);
      const vertices: number[] = [];
      const indices: number[] = [];
      curvePoints.forEach((p) => {
        vertices.push(p.x, p.y, p.z);
        vertices.push(p.x, p.y, 0);
      });
      for (let i = 0; i < curvePoints.length - 1; i++) {
        const top1 = i * 2;
        const bottom1 = i * 2 + 1;
        const top2 = (i + 1) * 2;
        const bottom2 = (i + 1) * 2 + 1;
        indices.push(top1, bottom1, top2);
        indices.push(bottom1, bottom2, top2);
      }
      const fillGeometry = new THREE.BufferGeometry();
      fillGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3),
      );
      fillGeometry.setIndex(indices);
      fillGeometry.computeVertexNormals();
      const fillMaterial = new THREE.MeshStandardMaterial({
        color: this.options.color || 0xffffff,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
        roughness: 0.6,
        metalness: 0.1,
      });
      const fillMesh = new THREE.Mesh(fillGeometry, fillMaterial);
      this.scene.add(fillMesh);
    }
  }
}
