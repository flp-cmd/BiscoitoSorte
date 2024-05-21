const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const main1 = document.querySelector(".main1")
const main2 = document.querySelector(".main2")
const cookieImg = document.querySelector("#cookieImg")
const replayBtn = document.querySelector("#replayBtn")

cookieImg.addEventListener("click", toggleScreen)
replayBtn.addEventListener("click", toggleScreen)


function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  main1.classList.toggle("hide")
  main2.classList.toggle("hide")
}
