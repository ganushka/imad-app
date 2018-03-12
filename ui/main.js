console.log('Loaded!');

var button=document.getElementById('btn');
var request=new XMLHttpRequest();
button.onclick=function(){
    

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
 
 request.open('GET', 'http://http://anushkagupta279.imad.hasura-app.io/counter',true );
 request.send(null);
