

function multi(){
    
   let num1 = document.getElementById("col2").value;
//    console.log(num1);
   let num2 = document.getElementById("col3").value;

   let result= document.getElementById("col4");

   let myResult=num1*num2;

   result.value=myResult;

}
function reset() {
    document.getElementById("col3").value="";
 }
function multi1(){
    
   let num1 = document.getElementById("c-1").value;
//    console.log(num1);
   let num2 = document.getElementById("c-2").value;

   let result= document.getElementById("c-3");

   let myResult=num1*num2;
     
   result.value=myResult;

}
function reset1() {
    document.getElementById("c-2").value="";
 }

function multi2(){
    
   let num1 = document.getElementById("c-4").value;
//    console.log(num1);
   let num2 = document.getElementById("c-5").value;

   let result= document.getElementById("c-6");

   let myResult=num1*num2;

   result.value=myResult;

}
function reset2() {
    document.getElementById("c-5").value="";
 }

function multi3(){
    
   let num1 = document.getElementById("c-7").value;
//    console.log(num1);
   let num2 = document.getElementById("c-8").value;

   let result= document.getElementById("c-9");

   let myResult=num1*num2;

   result.value=myResult;

}
function reset3() {
    document.getElementById("c-8").value="";
  
 }

function multify(){
    
    let num1 = document.getElementById("col-2").value;
 //    console.log(num1);
    let num2 = document.getElementById("col-3").value;
 
    let result= document.getElementById("col-4");
 
    let myResult=num1*num2;
    
    result.value=myResult;

}


 function reset4() {
    document.getElementById("col-3").value='';

 }

 function addRow(row)
 {
     var x = row.parentNode.parentNode.rowIndex;
    //  console.log(x);
 
     var y = document.getElementById('table').insertRow(x+1);
    //  console.log(y);
 
     y.innerHTML = row.parentNode.parentNode.innerHTML;
    //  console.log(y.innerHTML);
     
  } 
 
 
function total(){

   let a=parseInt (document.getElementById('col4').value);
   let b=parseInt (document.getElementById('c-3').value);
   let c=parseInt (document.getElementById('c-6').value); 
   let d=parseInt (document.getElementById('c-9').value);
   let e=parseInt (document.getElementById('col-4').value);
   let result=document.getElementById('result').value=a+b+c+d+e;
   // console.log(result);
}

// function addRow(){

// var z1 = document.createElement("td");
// z1.setAttribute("id","mytd1");
// document.getElementById("table1").appendChild(z1);

// var a = document.createElement("input");
// a.setAttribute("type","text");
// a.setAttribute("id","c11");
// a.setAttribute("size","30")
// document.getElementById("mytd1").appendChild(a);
// //------------------------------------------------------
// var z1 = document.createElement("td");
// z1.setAttribute("id","mytd2");
// document.getElementById("table1").appendChild(z1);


// var a = document.createElement("input");
// a.setAttribute("type","number");
// a.setAttribute("id","c12");
// document.getElementById("mytd2").appendChild(a);
// //---------------------------------------------------
// var z1 = document.createElement("td");
// z1.setAttribute("id","mytd3");
// document.getElementById("table1").appendChild(z1);


// var a = document.createElement("input");
// a.setAttribute("type","number");
// a.setAttribute("id","c13");
// document.getElementById("mytd3").appendChild(a);
// //------------------------------------------------
// var z1 = document.createElement("td");
// z1.setAttribute("id","mytd4");
// document.getElementById("table1").appendChild(z1);


// var a = document.createElement("input");
// a.setAttribute("type","text");
// a.setAttribute("id","c14");
// document.getElementById("mytd4").appendChild(a);

// //-------------------------------------------------

// var z1 = document.createElement("td");
// z1.setAttribute("id","mytd5");
// document.getElementById("table1").appendChild(z1);

// var a = document.createElement("input");
// a.setAttribute("type","button");
// a.setAttribute("value","+");
// // a.setAttribute("onclick","addrow()");
// document.getElementById("mytd5").appendChild(a);

// var a = document.createElement("input");
// a.setAttribute("type","button");
// a.setAttribute("value","X");
// // a.setAttribute("onclick","reset()");
// document.getElementById("mytd5").appendChild(a);
// }

