/// <reference types="@types/google.maps" />

import pkg from "../package.json";
import "./style.css";

import * as THREE from "three";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { Bar3DChart } from "./charts/Bar3DChart.js";
import { Line3DChart } from "./charts/Line3DChart.js";
import { SceneConfigurator } from "./charts/SceneConfigurator.js";
import { addClickEvent, addDragEvents } from "./interactions";
import {
  ChartType,
  type CubeData,
  type GeoChartConstructor,
  type GeoChartOptions,
} from "./types.js";
export {
  ChartType,
  type CubeData,
  type GeoChartConstructor,
  type GeoChartOptions,
};

export class GeoChart<
  TData = any,
  TOptions extends GeoChartOptions = GeoChartOptions,
>
  extends google.maps.WebGLOverlayView
{
  map: google.maps.Map;
  data: TData[];
  options: GeoChartOptions;
  private position!: google.maps.LatLng;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private labelRenderer!: CSS2DRenderer;
  private cubes: CubeData[] = [];

  constructor({
    map,
    data = [],
    options = {} as TOptions,
  }: GeoChartConstructor<TData, TOptions>) {
    super();
    this.printWelcomeMessage();
    this.map = map;
    this.data = data;
    this.options = options;
    this.position = this.map.getCenter()!;
    this.setMap(map);
  }

  onAdd() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    new SceneConfigurator(this.scene);
    addDragEvents(
      this.map,
      this.cubes,
      () => this.position,
      (pos) => (this.position = pos),
      () => this.requestRedraw(),
    );
    this.renderChart();
    addClickEvent(this.map, this.cubes);
  }

  onContextRestored({ gl }: google.maps.WebGLStateOptions) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: gl.canvas,
      context: gl,
      antialias: true,
      ...gl.getContextAttributes(),
    });
    this.renderer.autoClear = false;
  }

  private clearScene() {
    this.cubes.length = 0;
    this.scene.children = this.scene.children.filter(
      (obj) =>
        !(
          obj instanceof THREE.Mesh ||
          obj instanceof CSS2DObject ||
          obj instanceof THREE.Object3D
        ),
    );
  }

  private renderChart() {
    if (this.options.type === ChartType.Bar3D) {
      if (!this.labelRenderer) this.createLabelRenderer();
      new Bar3DChart(
        this.scene,
        this.labelRenderer,
        this.cubes,
        this.options,
        this.position,
      );
    } else if (this.options.type === ChartType.Line3D) {
      if (!this.labelRenderer) this.createLabelRenderer();
      this.clearScene();
      new Line3DChart(
        this.scene,
        this.labelRenderer,
        this.cubes,
        this.options,
        this.position,
      );
    }
  }

  onDraw({ gl, transformer }: google.maps.WebGLDrawOptions) {
    if (!this.renderer) return;
    const latLng = this.position.toJSON();
    const matrix = transformer.fromLatLngAltitude({
      lat: latLng.lat,
      lng: latLng.lng,
      altitude: 0,
    });
    this.camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix);
    this.cubes.forEach((cubeData) => {
      cubeData.mesh.position.set(
        cubeData.mesh.userData.offsetX,
        0,
        cubeData.mesh.userData.height / 2,
      );
    });
    this.renderer.render(this.scene, this.camera);
    const zoom = this.map.getZoom()!;
    this.scene.traverse((obj) => {
      if (obj instanceof CSS2DObject) {
        const scaleFactor = Math.max(0.5, zoom / 20);
        obj.scale.set(scaleFactor, scaleFactor, 1);
        obj.visible = zoom >= 18;
        if (obj.userData["title"]) {
          const baseZoom = 12;
          const scale = zoom / baseZoom;
          const element = obj.element as HTMLElement;
          element.style.transform = `translate(-50%, -100%) scale(${scale})`;
        }
      }
    });
    if (this.labelRenderer) {
      this.labelRenderer.setSize(
        this.map.getDiv().offsetWidth,
        this.map.getDiv().offsetHeight,
      );
      this.labelRenderer.render(this.scene, this.camera);
    }
    this.renderer.resetState();
  }

  private createLabelRenderer() {
    const labelContainer = document.createElement("div");
    labelContainer.style.position = "absolute";
    labelContainer.style.top = "0";
    labelContainer.style.width = "100%";
    labelContainer.style.height = "100%";
    labelContainer.style.pointerEvents = "none";
    this.map.getDiv().appendChild(labelContainer);
    this.labelRenderer = new CSS2DRenderer({ element: labelContainer });
    this.labelRenderer.setSize(
      this.map.getDiv().offsetWidth,
      this.map.getDiv().offsetHeight,
    );
  }
  private printWelcomeMessage() {
    console.log(
      `%c GeoChart v${pkg.version} - Gráficos 3D para Google Maps`,
      "color: #4033b3; font-size: 16px; font-weight: bold;",
    );
    console.log(
      "%c Desenvolvido por Maurício Mudryk",
      "color: #2196F3; font-size: 14px;",
    );
    console.log(
      "%c Repositório: https://github.com/mauriciomudryk/geo-chart",
      "color: #607D8B; font-size: 14px;",
    );
    console.log(`
______▄██✿███▄
_______▄██▀██████▄
______██▀__███▒████
_____██____███░░ٮ░▀
______██____██░░░░░
_______██____██░░♥  (❀✿❀)
________█_____█▒    (✿ ☼ ✿)
_________█___▓▓░▓   (❀▐ ❀)
____█❀ _█_ ▓▓▓▒░▒▓__█_▐__▄
_____▀█▀_ ▓▓_▓▓▒░▒▓ ▀█▐_█
_________▓▓_▓▓▓▓▓▓____▐▀
_________▓▓_▓▓▓▓▓______▐
_______▓▓__▓▓▓▓_▓▓____▐░
______▓▓__▓▓▓▓▓___▓___▒▒
_____▓▓_▓███❋██▓__▓▓▓
___▒▒___▓██▒███▒▓
___░___▓██▒███▒██▓
______▓██▒███▒███▒▓
_____▓██▒███▒███▒██▓
_____▓█▒███▒███▒███▒▓
▓___▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓________▒░░░▒░░░▒
▓________▒░░░▒░░░▒
▓________▒░░▒_▒░░░▒
▓________▒░░▒__▒░░░▒
▓________▒░░▒__▒░░░▒
▓________▒░░▒__▒░░░▒
▓________▒░░▒▒░░░▒
▓▄▄▄▄▄▄▒░░▒░░▒
▓██████▒░░▒▒
▓_█❤█___███
▓███____███
▓█_______███
▓________██❥█
▓________██▀██▄
`);
    console.log(`
░██████╗░███████╗░█████╗░░█████╗░██╗░░██╗░█████╗░██████╗░████████╗
██╔════╝░██╔════╝██╔══██╗██╔══██╗██║░░██║██╔══██╗██╔══██╗╚══██╔══╝
██║░░██╗░█████╗░░██║░░██║██║░░╚═╝███████║███████║██████╔╝░░░██║░░░
██║░░╚██╗██╔══╝░░██║░░██║██║░░██╗██╔══██║██╔══██║██╔══██╗░░░██║░░░
╚██████╔╝███████╗╚█████╔╝╚█████╔╝██║░░██║██║░░██║██║░░██║░░░██║░░░
░╚═════╝░╚══════╝░╚════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░`);
  }
}
async function injectCSS() {
  if (document.getElementById("geo-chart-style")) return;

  const response = await fetch(new URL("./style.css", import.meta.url));
  const css = await response.text();

  const style = document.createElement("style");
  style.id = "geo-chart-style";
  style.textContent = css;

  document.head.appendChild(style);
}

injectCSS();
