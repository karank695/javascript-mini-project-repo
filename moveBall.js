const media=()=>{
    let f=window.matchMedia("(max-width:600px)");
    if(f.matches){
        document.querySelector("#container").style.width=200+"px";
        document.querySelector("#container").style.height=200+"px";
        document.querySelector("#ball").style.width=40+"px";
        document.querySelector("#ball").style.height=40+"px";
        document.querySelector("h1").style.fontSize=16+"px";
        document.querySelector("h1").style.marginTop=-150+"px";

    }else{
        document.querySelector("#container").style.width="";
        document.querySelector("#container").style.height="";
        document.querySelector("#ball").style.width="";
        document.querySelector("#ball").style.height="";
        document.querySelector("h1").style.fontSize="";
        document.querySelector("h1").style.marginTop="";
    }
}
onload=media;
onresize=media;

window.onkeydown=move;
function move(e){
var k=e.key;
var keyPress=k.toUpperCase();
const tar =document.querySelector("#ball");
const style=getComputedStyle(tar);
let left=style.left;
let right=style.right;
let top=style.top;
let bottom=style.bottom;
// console.log(left+" "+right+" "+top+" "+bottom); checking all absolute position value
if(keyPress=="D"){
    let rt=parseInt(right);
    let lt=parseInt(left);
if(rt==0){
    alert(`you have reached at last! please try another key, S for downWard/ D for rightWard/ W for upWard/ A for leftWard`);
}else{
    let interval=setInterval(function(){
        if(rt<=0){
            clearInterval(interval);
            tar.style.backgroundColor="green";
            return;
        }
        rt--;
        lt++;
        tar.style.right=rt+"px";
        tar.style.left=lt+"px";
        
    },1);
}
}

else if(keyPress=="A"){
    let lt=parseInt(left);
    let rt=parseInt(right);

if(lt==0){
    alert(`you have reached at last! please try another key, S for downWard/ D for rightWard/ W for upWard/ A for leftWard`);
}else{
    let interval=setInterval(function(){
        if(lt<=0){
            clearInterval(interval);
            tar.style.backgroundColor="blue";
            return;
        }
        lt--;
        rt++;
        tar.style.left=lt+"px";
        tar.style.right=rt+"px";
        
    },1);
}
}

else if(keyPress=="W"){
    let tp=parseInt(top);
    let bt=parseInt(bottom);

    if(tp==0){
        alert(`you have reached at last! please try another key, S for downWard/ D for rightWard/ W for upWard/ A for leftWard`);
    }else{
        let interval=setInterval(function(){
            if(tp<=0){
                clearInterval(interval);
                style.backgoundColor="blue";
                return;
            }
            tp--;
            bt++;
            tar.style.top=tp+"px";
            tar.style.bottom=bt+"px";
            
        },1);
    }
}

else if(keyPress=="S"){
    let bt=parseInt(bottom);
    let tp=parseInt(top);

    if(bt==0){
        alert(`you have reached at last! please try another key, S for downWard/ D for rightWard/ W for upWard/ A for leftWard`);
    }else{
        let interval=setInterval(function(){
            if(bt<=0){
                style.backgoundColor="red";
                clearInterval(interval);
                return;
            }
            bt--;
            tp++;
            tar.style.bottom=bt+"px";
            tar.style.top=tp+"px";
        },1);
    }
}

}

