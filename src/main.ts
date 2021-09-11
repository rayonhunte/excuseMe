// main.ts
import "./style.css"
import "tailwindcss/tailwind.css"
import { getIntro } from "./intro"

$(document).ready(function () {
  // start

  console.log(getIntro())
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
  let intro: any = $("#intro")
  let goat: any = $("#goat")
  let delay: any = $("#delay")
  let excuse: any = $("#excuse")
  let excuseString: string

  introList.forEach(item => {
    intro.append('<option value="' + item.id + '">' + item.name + '</option>');
  })

  goatList.forEach(item => {
    goat.append('<option value="' + item.id + '">' + item.name + '</option>');
  })

  delayList.forEach(item => {
    delay.append('<option value="' + item.id + '">' + item.name + '</option>');
  })

  excuseString = $('#intro :selected').text() + " " + $('#goat :selected').text() + " " + $('#delay :selected').text()

  console.log(excuseString)
  excuse.append(excuseString)

  function handeEvent() {
    excuseString = $('#intro :selected').text() + " " + $('#goat :selected').text() + " " + $('#delay :selected').text()
    excuse.empty()
    excuse.append(excuseString)
  }
  intro.on("change", handeEvent)
  goat.on("change", handeEvent)
  delay.on("change", handeEvent)
  // end of start

  function getRamdomExcuse() {
    let randomIntro = Math.floor(Math.random() * introList.length)
    let randomGoat = Math.floor(Math.random() * goatList.length)
    let randomDelay = Math.floor(Math.random() * delayList.length)
    let excuse = introList[randomIntro].name + " " + goatList[randomGoat].name + " " + delayList[randomDelay].name
    return excuse
  }

  $('#roll').on('click', function () {
    excuse.empty()
    excuse.append(getRamdomExcuse())
  })

})










