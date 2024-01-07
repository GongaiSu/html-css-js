import "../css/div_style.css"
import "../css/img_style.css"
import hh from "../img/hh.png"

const divEl = document.createElement("div")
divEl.textContent="你好"
divEl.classList.add("commont")
document.body.append(divEl)

const imgEl = document.createElement("img")
imgEl.classList.add("img_style")
imgEl.src = hh
document.body.append(imgEl)

const div_bg_El = document.createElement("div")
div_bg_El.classList.add("div_bg")
document.body.append(div_bg_El)