document.getElementById("mybtn").addEventListener("click",function(){
  var mybox=document.getElementById("mydiv");
  if(mybox.style.display=="none")
  {
    mybox.style.display="block";
  }
  else{
    mybox.style.display="none";
  }
});