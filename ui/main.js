console.log('Loaded!');

var button=document.getElementById('btn');

button.onclick=function(){
    
var request=new XMLHttpRequest();
 request.onreadystatechange=function()
 {
     if(request.readyState==XMLHttpRequest.DONE)
     {
         if(request.status==200){
             var counter=request.responseText;
             document.getElementById('1').innerHTML=counter.toString();
         }
     }
 
     
 }
 
}
 
 
var names=document.getElementById('names');
var n=names.value;
var submit=document.getElementById("submit");
submit.onclick=function()
{
    var l=['name1', 'name2'];
    var list='';
    for(var i=0;i<l.length;i++)
    {
        list='<li>'+l[i]+"</li>";
    }
    document.getElementById('namelist').innerHTML=list;
}