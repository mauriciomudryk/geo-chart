/// <reference types="@types/google.maps" />

interface GeoChartConstructor<TData, TOptions> {
  map: google.maps.Map;
  data?: TData[];
  options?: TOptions;
}

export class GeoChart<
  TData = any,
  TOptions = Record<string, any>
> {
  map: google.maps.Map;
  data: TData[];
  options: TOptions;

  constructor({
    map,
    data = [],
    options = {} as TOptions
  }: GeoChartConstructor<TData, TOptions>) {

    if (!map) {
      throw new Error("GeoChart: A instância do Google Map é obrigatória.");
    }

    this.map = map;
    this.data = data;
    this.options = options;

    this.init();
  }

  private init() {
    console.log("Instância do mapa:", this.map);
    console.log("Centro:", this.map.getCenter()?.toJSON());
    console.log("Dados:", this.data);
  }
}