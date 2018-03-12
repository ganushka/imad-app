console.log('Loaded!');

var button=document.getElementById('btn');
var counter =0;
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
