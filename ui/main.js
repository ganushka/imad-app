console.log('Loaded!');

var img=document.getElementById('madi');
var marginleft=0;
function moveright()
{
    marginleft=marginleft+10;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=funtion()
{
    var interval=setInterval(moveright, 50);
}