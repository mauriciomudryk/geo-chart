import type { CubeData } from "./types";

export function addDragEvents(
  map: google.maps.Map,
  cubes: CubeData[],
  getPosition: () => google.maps.LatLng,
  setPosition: (pos: google.maps.LatLng) => void,
  requestRedraw: () => void,
) {
  const mapDiv = map.getDiv();
  let isDragging = false;
  let dragStart: { mouseX: number; mouseY: number } | null = null;
  mapDiv.addEventListener("mousedown", (e) => {
    const rect = map.getDiv().getBoundingClientRect();
    const clickLat =
      getPosition().lat() +
      (e.clientY - rect.height / 2) * (1 / Math.pow(2, map.getZoom()!));
    const clickLng =
      getPosition().lng() +
      (e.clientX - rect.width / 2) * (1 / Math.pow(2, map.getZoom()!));
    const clickPos = new google.maps.LatLng(clickLat, clickLng);
    const threshold = 0.0005;
    let closestCube: CubeData | null = null;
    let minDistance = Infinity;
    for (const cube of cubes) {
      const dLat = cube.latLng.lat() - clickPos.lat();
      const dLng = cube.latLng.lng() - clickPos.lng();
      const dist = Math.sqrt(dLat * dLat + dLng * dLng);
      if (dist < minDistance) {
        minDistance = dist;
        closestCube = cube;
      }
    }
    if (!closestCube || minDistance > threshold) {
      return;
    }
    isDragging = true;
    dragStart = { mouseX: e.clientX, mouseY: e.clientY };
    map.setOptions({ draggable: false });
  });
  mapDiv.addEventListener("mousemove", (e) => {
    if (!isDragging || !dragStart) return;
    const dx = e.clientX - dragStart.mouseX;
    const dy = e.clientY - dragStart.mouseY;
    const zoom = map.getZoom()!;
    const scale = 1 / Math.pow(2, zoom);
    const currentPosition = getPosition();
    const newLat = currentPosition.lat() - dy * scale;
    const newLng = currentPosition.lng() + dx * scale;
    setPosition(new google.maps.LatLng(newLat, newLng));
    cubes.forEach((c) => {
      const lat = c.latLng.lat() - dy * scale;
      const lng = c.latLng.lng() + dx * scale;
      c.latLng = new google.maps.LatLng(lat, lng);
    });
    dragStart = { mouseX: e.clientX, mouseY: e.clientY };
    requestRedraw();
  });
  const stopDrag = () => {
    isDragging = false;
    dragStart = null;
    map.setOptions({ draggable: true });
  };
  mapDiv.addEventListener("mouseup", stopDrag);
  mapDiv.addEventListener("mouseleave", stopDrag);
}

export function addClickEvent(map: google.maps.Map, cubes: CubeData[]) {
  map.addListener("click", (ev: google.maps.MapMouseEvent) => {
    if (!ev.latLng) return;
    const clickLat = ev.latLng.lat();
    const clickLng = ev.latLng.lng();
    let closest: CubeData | null = null;
    let minDistance = Infinity;
    for (const cube of cubes) {
      const dLat = cube.latLng.lat() - clickLat;
      const dLng = cube.latLng.lng() - clickLng;
      const distance = Math.sqrt(dLat * dLat + dLng * dLng);
      if (distance < minDistance) {
        minDistance = distance;
        closest = cube;
      }
    }
    const clickThreshold = 0.0005;
    if (closest && minDistance < clickThreshold) {
      console.log("Cubo clicado:", closest.mesh);
    }
  });
}
