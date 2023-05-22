var cursuor = document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove",function (dets) {
cursuor.style.left = dets.x + "px"
cursuor.style.top = dets.y + "px"     
})

document.querySelector("#overlay1").addEventListener("mousemove",function(dets) {

    document.querySelector("#elam1 img").style.scale = 1 
    document.querySelector("#elam1 img").style.opacity = 1 
    cursuor.style.opacity = 0
    document.querySelector("#elam1 img").style.left = (dets.x - 500) + "px" 
    document.querySelector("#elam1 img").style.top = (dets.y - 350 )+ "px"

})
document.querySelector("#overlay1").addEventListener("mouseleave",function(dets) {

    document.querySelector("#elam1 img").style.scale = 0 
    document.querySelector("#elam1 img").style.opacity = 0
    cursuor.style.opacity = 0
    

})
 
document.querySelector("#overlay2").addEventListener("mousemove",function(dets) {

    document.querySelector("#elam2 img").style.scale = 1 
    document.querySelector("#elam2 img").style.opacity = 1 
    cursuor.style.opacity = 0
    document.querySelector("#elam2 img").style.left = (dets.x - 900) + "px" 
    document.querySelector("#elam2 img").style.top = (dets.y - 350 )+ "px"

})

document.querySelector("#overlay2").addEventListener("mouseleave",function(dets) {

    document.querySelector("#elam2 img").style.scale = 0 
    document.querySelector("#elam2 img").style.opacity = 0
    cursuor.style.opacity = 0
    

})
 
document.querySelector("#overlay3").addEventListener("mousemove",function(dets) {

    document.querySelector("#elam3 img").style.scale = 1 
    document.querySelector("#elam3 img").style.opacity = 1 
    cursuor.style.opacity = 0
    document.querySelector("#elam3 img").style.left = (dets.x - 1300) + "px" 
    document.querySelector("#elam3 img").style.top = (dets.y - 350 )+ "px"

})
document.querySelector("#overlay3").addEventListener("mouseleave",function(dets) {

    document.querySelector("#elam3 img").style.scale = 0 
    document.querySelector("#elam3 img").style.opacity = 0
    cursuor.style.opacity = 0
    

})