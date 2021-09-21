
var count = 1;
var countEl = document.getElementById('count');
function plus() {
    count++;
    countEl.value = count;
}
function minus() {
    if (count > 1) {
        count--;
        countEl.value = count;
    }
}
var count_one = 1;
var countEl_one = document.getElementById('count_one');
function plus_one() {
    count_one++;
    countEl_one.value = count_one;
}
function minus_one() {
    if (count_one > 1) {
        count_one--;
        countEl_one.value = count_one;
    }
}
var count_two = 1;
var countEl_two = document.getElementById('count_two');
function plus_two() {
    count_two++;
    countEl_two.value = count_two;
}
function minus_two() {
    if (count_two > 1) {
        count_two--;
        countEl_two.value = count_two;
    }
}
var count_three = 1;
var countEl_three = document.getElementById('count_three');
function plus_three() {
    count_three++;
    countEl_three.value = count_three;
}
function minus_three() {
    if (count_three > 1) {
        count_three--;
        countEl_three.value = count_three;
    }
}

let obj1=[]



let mydish=document.getElementById('mydish');
var j = new Array("Select-Meal","Chicken Burger","Ham Burger","Cheese Burger","Fries");   
let node = '';

for (var i = 0; i < j.length; i++) {
   node += '<option value="' + j[i]+ '">' + j[i] + '</option>';

   
}
 $("#mydish").html(node);
// mydish.append(node)
 function addbtn(){
     let dish=document.getElementById('mydish').value;
     let mydishone=document.getElementById('mydishone').value;
     let mydishtwo=document.getElementById("mydishtwo").value;
     let mydishthree=document.getElementById('mydishthree').value;
     let dishone=document.getElementById('dishone');
     let dishtwo=document.getElementById('dishtwo');
     let dishthree=document.getElementById('dishthree');

     ///////////////////////////
    //  one
     if(dish=='Chicken Burger'){
        var j = new Array("Select-Meal","Ham Burger","Cheese Burger","Fries");   
        let node = '';
        
        for (var i = 0; i < j.length; i++) {
           node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
        
           
        }
        $("#mydishone").html(node);

        dishone.style.display='block';
     }

     if(dish=='Ham Burger'){
        var j = new Array( "Select-Meal","Chicken Burger ","Cheese Burger","Fries");   
        let node = '';
        
        for (var i = 0; i < j.length; i++) {
           node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
        
           
        }
        $("#mydishone").html(node);

        dishone.style.display='block';
     }
     if(dish=='Fries'){
        var j = new Array("Select-Meal","Chicken Burger ","Ham Burger ","Cheese Burger ");   
        let node = '';
        
        for (var i = 0; i < j.length; i++) {
           node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
        
           
        }
        $("#mydishone").html(node);

        dishone.style.display='block';
     }
     if(dish=='Cheese Burger'){
        var j = new Array("Select-Meal","Chicken Burger ","Ham Burger ","Fries");   
        let node = '';
        
        for (var i = 0; i < j.length; i++) {
           node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
        
           
        }
        $("#mydishone").html(node);

        dishone.style.display='block';
     }

//////////////////////////////////////////
// two chicken
if(dish=='Chicken Burger' && mydishone=='Ham Burger'){
    var j = new Array("Select-Meal","Fries" ,"Cheese Burger ");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishtwo").html(node);

    dishtwo.style.display='block';
 }
 if(dish=='Chicken Burger' && mydishone=='Cheese Burger'){
    var j = new Array("Select-Meal","Ham Burger","Fries");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishtwo").html(node);

    dishtwo.style.display='block';
 }
 if(dish=='Chicken Burger' && mydishone=='Fries'){
    var j = new Array("Select-Meal","Ham Burger","Cheese Burger");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishtwo").html(node);

    dishtwo.style.display='block';
 }

////////////////////////////////////////////////////////
// threee cheese



if(dish=='Chicken Burger' && mydishone=='Fries' && mydishtwo=='Ham Burger'){
    var j = new Array("Select-Meal","Cheese Burger");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }
 if(dish=='Chicken Burger' && mydishone=='Fries' && mydishtwo=='Cheese Burger'){
    var j = new Array("Select-Meal","Ham Burger");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishhthree.style.display='block';
 }

 if(dish=='Chicken Burger' && mydishone=='Cheese Burger' && mydishtwo=='Ham Burger'){
    var j = new Array("Select-Meal","Fries");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }
 if(dish=='Chicken Burger' && mydishone=='Cheese Burger' && mydishtwo=='Fries'){
    var j = new Array("Select-Meal","Ham Burger");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }

 if(dish=='Chicken Burger' && mydishone=='Ham Burger'&& mydishtwo=='Cheese Burger'){
    var j = new Array("Select-Meal","Fries");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }
 if(dish=='Chicken Burger' && mydishone=='Ham Burger'&& mydishtwo=='Fries'){
    var j = new Array("Select-Meal","Cheese Burger");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }

     ///////////////////////////////////
    //  two Cheese
     if(dish=='Cheese Burger' && mydishone=='Ham Burger'){
        var j = new Array("Select-Meal","Chicken Burger ","Fries");   
        let node = '';
        
        for (var i = 0; i < j.length; i++) {
           node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
        
           
        }
        $("#mydishtwo").html(node);

        dishtwo.style.display='block';
     }

     if(dish=='Cheese Burger' && mydishone=='Chicken Burger'){
        var j = new Array("Select-Meal","Ham Burger","Fries");   
        let node = '';
        
        for (var i = 0; i < j.length; i++) {

           node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
        
           
        }
        $("#mydishtwo").html(node);

        dishtwo.style.display='block';
     }
     if(dish=='Cheese Burger' && mydishone=='Fries'){
        var j = new Array("Select-Meal","Ham Burger","Chicken Burger ");   
        let node = '';
        
        for (var i = 0; i < j.length; i++) {
           node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
        
           
        }
        $("#mydishtwo").html(node);

        dishtwo.style.display='block';
     }
///////////////////////////
// three cheese
if(dish=='Cheese Burger' && mydishone=='Ham Burger'&& mydishtwo=='Chicken Burger'){
    var j = new Array("Select-Meal","Fries");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }
 if(dish=='Cheese Burger' && mydishone=='Ham Burger'&& mydishtwo=='Fries'){
    var j = new Array("Select-Meal","Chicken Burger");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }

 if(dish=='Cheese Burger' && mydishone=='Chicken Burger' && mydishtwo=='Ham Burger'){
    var j = new Array("Select-Meal","Fries");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {

       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }
 if(dish=='Cheese Burger' && mydishone=='Chicken Burger' && mydishtwo=='Fries'){
    var j = new Array("Select-Meal","Ham Burger");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {

       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }
 if(dish=='Cheese Burger' && mydishone=='Fries'&& mydishtwo=='Chicken Burger'){
    var j = new Array("Select-Meal","Ham Burger");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }

 if(dish=='Cheese Burger' && mydishone=='Fries'&& mydishtwo=='Ham Burger'){
    var j = new Array("Select-Meal","Chicken Burger");   
    let node = '';
    
    for (var i = 0; i < j.length; i++) {
       node += '<option value="' + j[i]+ '">' + j[i] + '</option>';
    
       
    }
    $("#mydishthree").html(node);

    dishthree.style.display='block';
 }









 }

function myselect(){
    

}



