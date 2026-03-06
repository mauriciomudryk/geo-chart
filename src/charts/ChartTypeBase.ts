import * as THREE from "three";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { ChartType, type CubeData, type GeoChartOptions } from "../types.js";
import { BaseChart } from "./BaseChart.js";

export class ChartTypeBase extends BaseChart {
  protected readonly SPACING = 30;
  protected labelsToZoom: CSS2DObject[] = [];
  protected scaleFactor = 1;

  constructor(
    scene: THREE.Scene,
    labelRenderer: CSS2DRenderer,
    cubes: CubeData[],
    options: GeoChartOptions,
    position: google.maps.LatLng,
  ) {
    super(scene, labelRenderer, cubes, options, position);
    this.initialize();
  }

  protected initialize() {
    this.normalizeData();
    this.onInit();
    this.onPlot();
    this.createValueAxis();
    this.createTitles();
  }
  private normalizeData(): void {
    const dados = this.options.data || [];
    if (dados.length === 0) {
      this.scaleFactor = 1;
      return;
    }
    const values = dados.map((d) => Math.abs(d.value));
    const maxAbsValue = Math.max(...values);
    const NORMALIZED_HEIGHT = 100;

    if (maxAbsValue > 0) {
      this.scaleFactor = NORMALIZED_HEIGHT / maxAbsValue;
    } else {
      this.scaleFactor = 1;
    }
  }

  protected onInit(): void {
    //throw new Error("Method not implemented.");
  }
  protected onDestroy(): void {
    //throw new Error("Method not implemented.");
  }

  protected onPlot(): void {
    console.log("[ChartTypeBase] Plotando gráfico de barras");

    // Este método será implementado nas classes filhas (Bar3DChart, Line3DChart, etc.)
  }

  protected createValueAxis(): void {
    const dados = this.options.data || [];
    if (dados.length < 1) return;
    const values = dados.map((d) => d.value);
    const maxValue = Math.max(...values, 0);
    const minValue = Math.min(...values, 0);
    const axisXOffset = this.getAxisOffsetX(dados.length);
    const scaledMinValue = minValue * this.scaleFactor;
    const scaledMaxValue = maxValue * this.scaleFactor;
    const axisStart = scaledMinValue < 0 ? scaledMinValue * 1.1 : 0;
    const axisEnd = scaledMaxValue > 0 ? scaledMaxValue * 1.1 : 0;
    const axisHeight = axisEnd - axisStart;
    const wallWidth = 40;
    const wallGeometry = new THREE.PlaneGeometry(axisHeight, wallWidth);
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x999999,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.rotation.y = Math.PI / 2;
    wall.position.set(axisXOffset, 0, axisStart + axisHeight / 2);
    this.scene.add(wall);
    const numLabels = 5;
    const range = maxValue - minValue;
    for (let i = 0; i <= numLabels; i++) {
      const value = minValue + (range / numLabels) * i;
      const scaledValue = value * this.scaleFactor;
      const labelDiv = document.createElement("div");
      labelDiv.className = "chart-axis-label";
      labelDiv.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
      const axisLabel = new CSS2DObject(labelDiv);
      axisLabel.position.set(axisXOffset - 20, 0, scaledValue);
      this.scene.add(axisLabel);
    }
  }

  protected getOffsetX(index: number, dataLength: number): number {
    return (this.SPACING * dataLength) / 2 - index * this.SPACING;
  }

  protected getAxisOffsetX(dataLength: number): number {
    return (
      -((this.SPACING * (dataLength - 1)) / 2 + this.SPACING / 2) + this.SPACING
    );
  }

  private createTitles(): void {
    const titleText =
      this.options.type === ChartType.Line3D
        ? "Gráfico de Linhas 3Ds"
        : "Gráfico de Barras 3Ds";
    const subTitleText =
      this.options.type === ChartType.Line3D
        ? "Subtítulo do Gráfico de Linhas 3D"
        : "Subtítulo do Gráfico de Barras 3D";
    const container = document.createElement("div");
    container.className = "chart-title-container";
    const title = document.createElement("div");
    title.className = "chart-title";
    title.textContent = titleText || "";
    const subtitle = document.createElement("div");
    subtitle.className = "chart-subtitle";
    subtitle.textContent = subTitleText || "";
    container.appendChild(title);
    container.appendChild(subtitle);
    const label = new CSS2DObject(container);
    label.position.set(0, 0, this.getMaxHeight() + 20);
    label.userData["title"] = true;
    this.labelsToZoom.push(label);
    this.scene.add(label);
  }

  private getMaxHeight(): number {
    const dados = this.options.data || [];
    const values = dados.map((d) => d.value);
    return Math.max(...values) * this.scaleFactor;
  }

  public updateLabelScale(map: google.maps.Map): void {
    const zoom = map.getZoom() ?? 10;
    const baseZoom = 12;
    const scale = zoom / baseZoom;
    this.labelsToZoom.forEach((label) => {
      const element = label.element as HTMLElement;
      element.style.transform = `translate(-50%, -100%) scale(${scale})`;
    });
  }
}
