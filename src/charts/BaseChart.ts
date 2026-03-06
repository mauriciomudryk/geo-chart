import * as THREE from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import type { CubeData, GeoChartOptions } from "../types.js";

export abstract class BaseChart {
  protected scene: THREE.Scene;
  protected labelRenderer: CSS2DRenderer;
  protected cubes: CubeData[];
  protected options: GeoChartOptions;
  protected position: google.maps.LatLng;

  constructor(
    scene: THREE.Scene,
    labelRenderer: CSS2DRenderer,
    cubes: CubeData[],
    options: GeoChartOptions,
    position: google.maps.LatLng,
  ) {
    this.scene = scene;
    this.labelRenderer = labelRenderer;
    this.cubes = cubes;
    this.options = options;
    this.position = position;
  }

  protected abstract onInit(): void;

  protected abstract onPlot(): void;

  protected abstract onDestroy(): void;

  protected abstract createValueAxis(): void;

  protected abstract getOffsetX(index: number, dataLength: number): number;

  protected abstract getAxisOffsetX(dataLength: number): number;
}
