let sounds = []

class DrumItem{
    constructor(name){
        this.audio = new Audio("assets/"+name+".wav")

        const button = document.createElement("button");
        button.appendChild(document.createTextNode(name))
        button.addEventListener("click",()=>{this.audio.play()})
        const parent = document.querySelector("#DrumButtonsDiv")
        parent.appendChild(button)
        sounds.push(this)

        const button2 = document.createElement("button");
        button2.addEventListener("click",()=>{this.audio.play()})
        button2.id = name
        const parent2 = document.querySelector("#drumgrid")
        parent2.appendChild(button2)

        this.domobject=button
    }
}

//check whether a key down event is equali to the list id of a sound effect
window.addEventListener("keydown",(event)=>{
    lastchar = event.code[event.code.length-1]
    if (lastchar-1<sounds.length) {
        sounds[lastchar-1].audio.play()
        sounds[lastchar-1].domobject.focus()
    }
})


//List of audio file names
const drums=["bass-drum","crash","floor-tom","hi-hat","high-tom","medium-tom","ride","snare"]

//Iterate through available audio files
for (let i = 0; i < drums.length; i++) {
    const element = drums[i];
    new DrumItem(element)
}

//theme selector
const BodyElement = document.querySelector("body");
const SystemButton = document.getElementById("systembutton")
const LightButton = document.getElementById("lightbutton")
const DarkButton = document.getElementById("darkbutton")
SystemButton.addEventListener("click",function(){NoTheme(BodyElement);},false);
LightButton.addEventListener("click",function(){GoLight(BodyElement);},false);
DarkButton.addEventListener("click",function(){GoDark(BodyElement);},false);
        
//On Page load select theme
let CurrentTheme = localStorage.getItem("theme");
if(CurrentTheme==="Dark"){
    GoDark(BodyElement);
} else if(CurrentTheme==="Light"){
    GoLight(BodyElement);
}
function GoDark(BodyElement){
    BodyElement.dataset.theme = "Dark";
     localStorage.setItem("theme","Dark");
}
function GoLight(BodyElement){
    BodyElement.dataset.theme = "Light";
    localStorage.setItem("theme","Light");
}
function NoTheme(BodyElement){
    BodyElement.dataset.theme = "Null";
    localStorage.removeItem("theme")
}

document.querySelector("#virtualdisable").addEventListener("click",()=>{
    document.querySelectorAll(".drumshide").forEach((item)=>{
        item.style.display = "none"
    })
})
document.querySelector("#virtualenable").addEventListener("click",()=>{
    document.querySelectorAll(".drumshide").forEach((item)=>{
        item.style.display = "block"
    })
})
