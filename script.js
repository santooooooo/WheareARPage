var models = [
  {
    url: "./assets/pin/pin.glb",
    scale: "0.3 0.3 0.3",
    rotation: "0 180 0",
    info: "Magnemite, Lv. 5, HP 10/10",
  },
];

window.addEventListener("load", () => {
  const model = document.getElementById("pin");

  function success(pos) {
    var crd = pos.coords;
    const latitude = crd.latitude;
    const longitude = crd.longitude;
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    model.setAttribute("scale", models[0].scale);
    model.setAttribute("rotation", models[0].rotation);
    model.setAttribute("gltf-model", models[0].url);
    model.setAttribute("animation-mixer", "");
  }

  function error(err) {
    console.error("Error in retrieving position", err);
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // first get current user location
  return navigator.geolocation.getCurrentPosition(success, error, options);
});
