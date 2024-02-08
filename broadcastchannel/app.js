const broadcast = new BroadcastChannel("preferences")


//çıkıişşşşşşşşşşşşşşş

function exitfunc(){
  nowexit()
  broadcast.postMessage("tokat")
}

function nowexit(){
  document.querySelector(".yap").innerHTML="Çıkış Yapıldı"
}

/////////////////////////////////

function readfunc() {  
  clearfunc()
  broadcast.postMessage("adana")
}

function clearfunc() { 
  document.querySelector(".count").remove()
}

/////////////////////////////////////////////////
function darkmode() { 
  setdarkmode()
  broadcast.postMessage("theme:switch")
 }


function setdarkmode() { 
  document.body.classList.toggle('dark')
  if(document.body.classList=="dark"){
    document.querySelector(".kara").innerHTML="light mode"
    document.querySelector(".kara").style.backgroundColor = "white";
    document.querySelector(".kara").style.color = "black";
  }else{
    document.querySelector(".kara").innerHTML="dark mode"
    document.querySelector(".kara").style.backgroundColor = "black";
    document.querySelector(".kara").style.color = "white";
  }
 }


/////////////////////////////
broadcast.addEventListener("message", event =>{
  switch(event.data){
    case 'tokat':
      exitfunc()
      break
    case 'adana':
      clearfunc()
      break
    case 'theme:switch':
      setdarkmode()
      break
    default:
      console.log(event.data)
  }
})