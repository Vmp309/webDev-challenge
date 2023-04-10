import { today } from "./api.js";
import { apod_url, imagery_url, exo_url, NASA_API_KEY } from "./tokens.js"

var imagery_button = document.getElementById("imagery")
var apod_button = document.getElementById("apod")
const exo_button = document.getElementById("exoplanet")
const api_buttons = document.getElementsByClassName("btn btn-outline-light border border-info")

const modal_header = document.getElementsByClassName("modal-header")
let modal_title = document.getElementById("exampleModalLabel")
let img_obj = document.getElementsByTagName("img")
let img_description = document.getElementById("description")

function modalTitle(img_title) {
  modal_title.innerHTML = img_title
}

function modalImage(img_link ="", description="") {
  img_obj.src = img_link
  img_description.innerHTML = description
}

function imagery_request() {
  const imagery = new Request(
    fetch(`${imagery_url}date=${today}&api_key=${NASA_API_KEY}`)
    .then(result =>{
      return result.json()
    })
    .then(data => {
      console.log(data)
      modal_title.innerHTML = ""
      modalTitle(data['msg'])
      modalImage()
      return data
    })
    .catch(error => console.log(error))
  )
}

function apod_request() {
  const apod_request = new Request(
 
    fetch(`${apod_url}api_key=${NASA_API_KEY}&date=${today}`).then(response => {
  
        return response.json()
      })
      .then(data=> {
        modal_title.innerHTML = ""
        modalTitle(data['title'])
        modalImage(data['url'], data['explanation'])
      })
      .catch(error => console.log(error))
    )
}

imagery_button.addEventListener("click", imagery_request)


apod_button.addEventListener("click", apod_request)



exo_button.addEventListener("click", new Request(

  fetch(exo_url).then(response => {
      
      return response.json()
    })
    .then(data => {
      console.log(data)
      modal_title.innerHTML = ""
      modalTitle(data['collections']['items'][0]['data'][0]['title'])
      modalImage(data.collections.items[0]['links'][0]['href'], data['collections']['items'][0]['data'][0]['description'])
      return data
    })
    .catch(error => error)
  )
)

