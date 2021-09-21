// // if(mcdish=='Chicken Burger'){
//     //     localStorage.setItem('dish',mcdish);
//     //     OP.setAttribute('disabled' , true);
//     // }
//     // if ($('#mydish').val() == "Chicken Burger") {
//     //     $("#mydish option[value='Chicken Burger']").attr('disabled', true);
//     //     localStorage.setItem('dish', mcdish);
//     //     dishh.style.display = 'block';



//     // }
//     // if ($('#mydish').val() == "Ham Burger") {
//     //     $("#mydish option[value='Ham Burger']").attr('disabled', true);
//     //     localStorage.setItem('dishone', mcdish);
//     //     dishoneh.style.display = 'block';

//     // }
//     // if ($('#mydish').val() == "Cheese Burger") {
//     //     $("#mydish option[value='Cheese Burger']").attr('disabled', true);
//     //     localStorage.setItem('dishtwo', mcdish);
//     //     dishtwoh.style.display = 'block';

//     // }
//     // if ($('#mydish').val() == "Fries") {
//     //     $("#mydish option[value='Fries']").attr('disabled', true);
//     //     localStorage.setItem('dishthree', mcdish);
//     //     dishthreeh.style.display = 'block';

//     // }
//     let value='Chicken Burger';
//     let data = JSON.parse(localStorage.getItem('task'));
    
    
//     const mc = document.getElementById('mydish');
//     let myname = data.filter(item => item !==value) .map(function (mydata) {
//         return mydata.name;
//     })
    
//     myname.forEach(function (players) {
    
//         mc.innerHTML += `
//                         <option value="${players}">${players}</option>
    
//                        `;
//     });
    
    
//     function myselect() {
    
//         var mcdish = document.getElementById('mydish').value;
//         let para= document.getElementById('para');
//         if(mcdish=='none'){
//             para.style.display='block';
//         }
//         if(mcdish!=='none'||mcdish == 'Chicken Burger'||mcdish == 'Ham Burger'||mcdish == 'Cheese Burger'||mcdish == 'Fries'){
//             para.style.display='none';
//         }
//     }
//     function mybtn() {
//         var mcdish = document.getElementById('mydish').value;
//         var mcdish1 = document.getElementById('mydish');
//         var OP = document.getElementsByTagName('OPTION')[value = 'Chicken Burger'];
//         let dishh = document.getElementById('dishtr');
//         let dishoneh = document.getElementById('dishonetr');
//         let dishtwoh = document.getElementById('dishtwotr');
//         let dishthreeh = document.getElementById('dishthreetr');
//          if (mcdish == 'Chicken Burger') {
    
//             mcdish1.options[mcdish1.selectedIndex].setAttribute("disabled", "disabled");
//             localStorage.setItem('dish', mcdish);
//             dishh.style.display = 'block';
//         }
//         if (mcdish == 'Ham Burger') {
    
//             mcdish1.options[mcdish1.selectedIndex].setAttribute("disabled", "disabled");
//             localStorage.setItem('dishone', mcdish);
//             dishoneh.style.display = 'block';
//         }
    
//         if (mcdish == 'Cheese Burger') {
    
//             mcdish1.options[mcdish1.selectedIndex].setAttribute("disabled", "disabled");
//             localStorage.setItem('dishtwo', mcdish);
//             dishtwoh.style.display = 'block';
    
//         }
    
//         if (mcdish == 'Fries') {
    
//             mcdish1.options[mcdish1.selectedIndex].setAttribute("disabled", "disabled");
//             localStorage.setItem('dishthree', mcdish);
//             dishthreeh.style.display = 'block';
//         }
    
    
//         document.getElementById('dish').innerHTML=localStorage.getItem('dish');
//         document.getElementById('dishone').innerHTML=localStorage.getItem('dishone');
//         document.getElementById('dishtwo').innerHTML=localStorage.getItem('dishtwo');
//         document.getElementById('dishthree').innerHTML=localStorage.getItem('dishthree');
//        }
//     function delbtn(){
    
//         var mcdishdel= document.getElementById('mydish');
//         var OP = document.getElementsByTagName('OPTION')[value = 'Chicken Burger'];
//         let dishh = document.getElementById('dishtr');
//         let dish=document.getElementById('dish').innerText;
    
//         let count=document.getElementById('count').value;
//         if (dish == 'Chicken Burger') {
    
//             $("#mydish option[value='Chicken Burger']").attr('disabled', false);
//             // mcdishdel.options[value,'Chicken Burger'].removeAttribute("disabled", "disabled");
//             localStorage.setItem('dish', '');
//             count='';
//             localStorage.setItem('count', '');
//             dishh.style.display = 'none';
//         }
//      }
//     function delbtnone(){
//         let dishone=document.getElementById('dishone').innerText;
//         let dishoneh = document.getElementById('dishonetr');
    
    
    
//         if (dishone == 'Ham Burger') {
//             $("#mydish option[value='Ham Burger']").attr('disabled', false);
//             // mcdishdel.options[dd].removeAttribute("disabled", "disabled");
//             localStorage.setItem('dishone', '');
//             dishoneh.style.display = 'none';}}
//     function delbtntwo(){
//         let dishtwo=document.getElementById('dishtwo').innerText;
//         let dishtwoh = document.getElementById('dishtwotr');
//         var mcdishdel= document.getElementById('mydish');
    
    
//         if (dishtwo == 'Cheese Burger') {
//             $("#mydish option[value='Cheese Burger']").attr('disabled', false);
    
//             // mcdishdel.options[mcdishdel.selectedIndex].removeAttribute("disabled", "disabled");
//             localStorage.setItem('dishtwo', '');
//             dishtwoh.style.display = 'none';
//         }
//     }
//     function delbtnthree(){
//         let dishthree=document.getElementById('dishthree').innerText;
//         let dishthreeh = document.getElementById('dishthreetr');
    
    
//         if (dishthree == 'Fries') {
    
//             $("#mydish option[value='Fries']").attr('disabled', false);
    
//             // mcdishdel.options[mcdishdel.selectedIndex].removeAttribute("disabled", "disabled");
//             localStorage.setItem('dishthree', '');
//             dishthreeh.style.display = 'none';
//          }
    
//     }
    
//      document.getElementById('dish').innerHTML=localStorage.getItem('dish');
//      document.getElementById('dishone').innerHTML=localStorage.getItem('dishone');
//      document.getElementById('dishtwo').innerHTML=localStorage.getItem('dishtwo');
//      document.getElementById('dishthree').innerHTML=localStorage.getItem('dishthree');
    
    
     
    
//     function mcsub(){
//         var mcdish = document.getElementById('mydish').value;
//         let para= document.getElementById('para');
//         let count=document.getElementById('count').value;
//         let countone=document.getElementById('count_one').value;
//         let counttwo=document.getElementById('count_two').value;
//         let countthree=document.getElementById('count_three').value;
        
//         if(mcdish=='none'){
//             para.style.display='block';
//         }
//         if(mcdish!=='none'||mcdish == 'Chicken Burger'||mcdish == 'Ham Burger'||mcdish == 'Cheese Burger'||mcdish == 'Fries'){
//             para.style.display='none';
//             localStorage.setItem('count', count)
//             localStorage.setItem('countone', countone)
//             localStorage.setItem('counttwo', counttwo)
//             localStorage.setItem('countthree', countthree)
            
//         }
    
//         let dish=localStorage.getItem('dish');
//         if(dish == ''){
//             localStorage.setItem('count', '')
    
//         }else{
//             localStorage.setItem('count', count)
//         }
//         let dishone=localStorage.getItem('dishone');
//         if(dishone==''){
//             localStorage.setItem('countone', '')
//         }else{
//             localStorage.setItem('countone', countone)
//         }
//         let dishtwo=localStorage.getItem('dishtwo');
//         if(dishtwo==''){
//             localStorage.setItem('counttwo', '')
//         }else{
//             localStorage.setItem('counttwo', counttwo)
//         }
//         let dishthree=localStorage.getItem('dishthree');
//         if(dishthree==''){
//             localStorage.setItem('countthree', '')
//         }else{
//             localStorage.setItem('countthree', countthree)
//         }
         
    
        
    
    
    
      
//     }



















    