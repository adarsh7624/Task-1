const inputBox= document.querySelector("#input-box");
const listContainer= document.querySelector("#list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
       
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        inputBox.value="";
    
    }
    const check=document.querySelector(".check");
   
    
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="li"){
       e.target.classlist.toggle("check")


        
    }
     if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        
    }
},false)
