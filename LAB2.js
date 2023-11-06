
let blight1 = document.getElementById("stopButton")
let blight2 = document.getElementById("slowButton")
let blight3 = document.getElementById("goButton")

let li1 = document.getElementById("stopLight")
let li2 = document.getElementById("slowLight")
let li3 = document.getElementById("goLight")


blight1.addEventListener("click", () => {
    
 
    li1.style.cssText = "    background-color: red;" ;
    li2.style.cssText ="  background-color: black;"
    li3.style.cssText = "  background-color: black;"
  
    
})



blight2.addEventListener("click", () => {
    
    li1.style.cssText = "    background-color: black;" ;
     li2.style.cssText = "    background-color: yellow;" ;
     li3.style.cssText = "  background-color: black;"
    
     
 })


 
blight3.addEventListener("click", () => {
    
    li1.style.cssText = "    background-color: black;" ;
    li2.style.cssText = "    background-color: black;" ;
    li3.style.cssText = "  background-color: green;"
     
 })