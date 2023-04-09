import { eonet_request, apod_request, exo_request } from "api.js";

let eonet_button = document.getElementById("eonet")
let apod_button = document.getElementById("apod")
let exo_button = document.getElementById("exoplanet")
let api_buttons = document.getElementsByClassName("btn btn-outline-light border border-info")

eonet_button.addEventListener("click", eonet_request)

apod_button.addEventListener("click", apod_request)

exo_button.addEventListener("click", exo_request)

