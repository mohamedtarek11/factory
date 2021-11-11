var hh=[1,2,3,4,4,5];
for(var i=0; i<6; i++){
x=hh[i];

}
console.log(x);
var obj={
    nam:"mohamed",
    age:21,
    pos:"mansoura",
}
console.log(obj["pos"])
// var x="5";
// var y =5;
// if(x===y){
//     document.write("true");
// }
// else{
//     document.write("false");
// }

// =============================================================================================================
// =============================================================================================================
// =============================================================================================================

// var bb = prompt("enter yuor name");
// if(bb=="mohamed"){
//     alert("welcome back")
// }
// else{
//     alert("please enter the name");
// }
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
var demo=document.getElementById("demo");
var names=document.getElementById("name");
demo.onmousemove=function(){
    var sum=1;
    sum = sum +sum;
    names.innerHTML=sum;
}
var string="mohamed tarek ali";
var ss=string.split( );
console.log(ss);