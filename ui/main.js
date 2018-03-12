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
 request.open('GET', 'http://http://anushkagupta279.imad.hasura-app.io/1',true );
 request.send(null);
}
 
 
