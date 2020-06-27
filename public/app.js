function getNumInp(num){
    var input=document.getElementById("input")
    input.value+=num

}
function clrBtn(){
    var input=document.getElementById("input")
    input.value=""
}
function result(){
    var input=document.getElementById("input")
    input.value=eval(input.value)
    
}
function percentage(marks,tmarks){
    var result=document.getElementById("percent")
}