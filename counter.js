document.getElementById("btn").addEventListener("click",counting);
function counting(){
    var input=document.getElementById("text");
    var start=input.value;
    if(start>=1 && start<=9){
    var count=-1;
    let interval=setInterval(function(){
     
        count++;
        if(count>=start){
            clearInterval(interval);
        }
        console.log(count);
        let b2=document.querySelector(".box2");
        b2.innerHTML=count;
        b2.style.transition="all 0.5s";
        b2.style.marginBottom=0+"%";
        setTimeout(change,250);
        function change(){
            document.querySelector(".box1").innerHTML=count;
            setTimeout(function(){
                b2.style.opacity="0";
            },20);
            setTimeout(function(){
                b2.style.marginBottom=-200+"%";
            },250);
            
            
        }
        b2.style.opacity="1";

    },1000);
    
    }else{
        // document.getElementsByTagName("input").value="enter valid number";
        window.alert("please enter valid number");
    }
}

