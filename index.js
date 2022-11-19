
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const numbertext = document.getElementById("numbertext")
const list = [  
 "Lorem ipsum dolor sit amet consectetur adipisicing <br> elit. Quaerat possimus incidunt iste.",
   " voluptatibus vero saepe sunt exercitationem <br> eum est! Facere nulla hic nihil p",
   "excepturi dolore aterferendis commodi itaque <br> delectus ducimus aperiam maiores!"]
let i = 0;

numbertext.innerHTML = list[i]
next.addEventListener("click",(eo) => { 
    numbertext.innerHTML = list[i]
    if (i===list.length-1) {
      i=0
    }else{
      i++
    }
 })

 prev.addEventListener("click",(eo) => { 
    numbertext.innerHTML = list[i]
    if (i===0) {
      i=2
    }else{
      i--
    }
 })

