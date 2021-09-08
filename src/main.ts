// main.ts
import "./style.css"
import "tailwindcss/tailwind.css"

$(document).ready(function () {

})

const introList = [
  { id: 0, name: "Sorry I can't come" },
  { id: 1, name: "Please forgive my absence" },
  { id: 2, name: "Get this" },
  { id: 3, name: "I can't go because" },
  { id: 4, name: "I know you're going to hate me but" },
  { id: 5, name: "I was minding my own business and boom!" },
  { id: 6, name: "I feel terrible but" },
  { id: 7, name: "I regretfully cannot attend" },
  { id: 8, name: "This is going to sound like an excuse but" },
]
const goatList = [
  { id: 0, name: "my nephew" },
  { id: 1, name: "the ghost of Hitler" },
  { id: 2, name: "the Pope" },
  { id: 3, name: "my ex" },
  { id: 4, name: "a high school marching band" },
  { id: 5, name: "Dan Rather" },
  { id: 6, name: "a sad clown" },
  { id: 7, name: "the kid from Air Bud" },
  { id: 8, name: "a professional cricket team" },
  { id: 9, name: "my Tinder date" },
]

const delayList = [
  { id: 0, name: "just shit the bed." },
  { id: 1, name: "died in front of me." },
  { id: 2, name: "won't stop telling me knock knock jokes." },
  { id: 3, name: "is having a nervous breakdown." },
  { id: 4, name: "gave me syphilis." },
  { id: 5, name: "poured lemonade in my gas tank." },
  { id: 6, name: "stabbed me." },
  { id: 7, name: "found my box of human teeth." },
  { id: 8, name: "stole my bicycle." },
  { id: 9, name: "posted my nudes on Instagram." },
]


// get selects
let intro: any = document.querySelector("#intro")
let goat: any = document.querySelector("#goat")
let delay: any = document.querySelector("#delay")
let excuseString: any = document.querySelector("#excuse")


introList.forEach(item => {
  intro.innerHTML += '<option value="' + item.id + '">' + item.name + '</option>';
})

goatList.forEach(item => {
  goat.innerHTML += '<option value="' + item.id + '">' + item.name + '</option>';
})

delayList.forEach(item => {
  delay.innerHTML += '<option value="' + item.id + '">' + item.name + '</option>';
})

let excuse = introList[intro?.value].name
  + " " + goatList[goat?.value].name + " " + delayList[delay?.value].name

//console.log(excuse)
excuseString.innerHTML = excuse

function handeEvent(event: any) {
  console.log(event.target.value)
  excuse = introList[intro?.value].name
    + " " + goatList[goat?.value].name + " " + delayList[delay?.value].name
  excuseString.innerHTML = excuse
}

intro.addEventListener("change", handeEvent)
goat.addEventListener("change", handeEvent)
delay.addEventListener("change", handeEvent)