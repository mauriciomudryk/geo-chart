import * as THREE from "three";

export const ChartType = {
  Bar3D: "Bar3D" as const,
  Line3D: "Line3D" as const,
};

export type ChartType = (typeof ChartType)[keyof typeof ChartType];

export interface GeoChartOptions {
  type: ChartType;
  width?: number;
  height?: number;
  color?: string;
  data?: any[];
  fill?: boolean;
}

export interface GeoChartConstructor<TData, TOptions> {
  map: google.maps.Map;
  data?: TData[];
  options?: TOptions;
}

export interface CubeData {
  mesh: THREE.Mesh;
  latLng: google.maps.LatLng;
}
