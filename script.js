let hexaCode = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let changeColor = [];

    for(let i=0; i<6 ; i++)
    {
        changeColor.push(hexaCode[Math.floor(Math.random()* hexaCode.length)])
    }
let finalColor = `#${changeColor.join("")}`;
// document.body.append(finalColor)
document.body.style.backgroundColor=finalColor;
document.getElementById("hexaName").innerHTML =("Background color:"+finalColor);
function refreshPage()
{
    window.location.reload();
}
 


