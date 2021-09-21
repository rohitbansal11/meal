const rr = JSON.parse(localStorage.getItem('task'));
console.log(rr);
console.log(rr[4].availableMeals[0]);

const mc = document.getElementById('mc_lunch_select');

mc.innerHTML = `<option value="none">Select Meal</option>
                    <option value="Chicken Burger">${rr[0].name}</option>
                    <option value="Ham Burger">${rr[1].name}</option>
                    <option value="Cheese Burger">${rr[2].name}</option>
                    <option value="Fries">${rr[3].name}</option>
                    
                   `;

////////////////////////////////////////////
const rr1 = JSON.parse(localStorage.getItem('task'));
console.log(rr1);
console.log(rr1[4].name);

const mc1 = document.getElementById('chick_select');

mc1.innerHTML = `<option value="none">Select Meal</option>

<option value="Ham Burger">${rr[1].name}</option>
<option value="Cheese Burger">${rr[2].name}</option>
<option value="Fries">${rr[3].name}</option>`;

/////////////////////////////////////////////////

const rr11 = JSON.parse(localStorage.getItem('task'));
console.log(rr11);
console.log(rr1[4].name);

const mc11 = document.getElementById('chick_ham_select');

mc11.innerHTML = `<option value="none">Select Meal</option>

<option value="Cheese Burger">${rr[2].name}</option>
<option value="Fries">${rr[3].name}</option>`;
////////////////////////////

const rr111 = JSON.parse(localStorage.getItem('task'));
console.log(rr111);
console.log(rr111[4].availableMeals[0]);

const mc111 = document.getElementById('chick_ham_select');

mc111.innerHTML = `<option value="none">Select Meal</option>

<option value="Cheese Burger">${rr111[2].name}</option>
<option value="Fries">${rr111[3].name}</option>

`;


function mymc() {
    let mymc_lunch = document.getElementById('mc_lunch_select').value;
    let mymc_h = document.getElementById('mc_lunch_h');
    let addbtnformenu = document.getElementById('addbtnmclunch');

    // chicken

    let chickselect = document.getElementById('chick_select').value;
    let chick_ham_select = document.getElementById('chick_ham_select').value;

    let chick_cheese_select = document.getElementById('chick_cheese_select').value;
    let chick_fries_select = document.getElementById('chick_fries_select').value;

    let chick_ham_fries_select = document.getElementById('chick_ham_fries_select').value;


    let chick_ham_cheese_select = document.getElementById('chick_ham_cheese_select').value;
    let chick_cheese_ham_select = document.getElementById('chick_cheese_ham_select').value;
    let chick_cheese_fries_select = document.getElementById('chick_cheese_fries_select').value;
    let chick_fries_ham_select = document.getElementById('chick_fries_ham_select').value;
    let chick_fries_cheese_select = document.getElementById('chick_fries_cheese_select').value;

    // ham burgger

    let hamselect = document.getElementById('ham_select').value;
    let ham_chick_select = document.getElementById('ham_chick_select').value;

    let ham_cheese_select = document.getElementById('ham_cheese_select').value;
    let ham_fries_select = document.getElementById('ham_fries_select').value;

    let ham_chick_fries_select = document.getElementById('ham_chick_fries_select').value;
    let ham_chick_cheese_select = document.getElementById('ham_chick_cheese_select').value;
    let ham_fries_cheese_select = document.getElementById('ham_fries_cheese_select').value;
    let ham_cheese_chick_select = document.getElementById('ham_cheese_chick_select').value;
    let ham_cheese_fries_select = document.getElementById('ham_cheese_fries_select').value;
    let ham_fries_chick_select = document.getElementById('ham_fries_chick_select').value;



    //  fries

    
    let friesselect = document.getElementById('fries_select').value;
    let fries_chick_select = document.getElementById('fries_chick_select').value;

    let fries_ham_select = document.getElementById('fries_ham_select').value;
    let fries_cheese_select = document.getElementById('fries_cheese_select').value;
    let fries_cheese_ham_select = document.getElementById('fries_cheese_ham_select').value;
    let fries_cheese_chick_select = document.getElementById('fries_cheese_chick_select').value;


    let fries_ham_cheese_select = document.getElementById('fries_ham_cheese_select').value;
    let fries_ham_chick_select = document.getElementById('fries_ham_chick_select').value;
    let fries_chick_cheese_select = document.getElementById('fries_chick_cheese_select').value;
    let fries_chick_ham_select = document.getElementById('fries_chick_ham_select').value;





    // cheese Burger
    // cheese
    
    let cheeseselect = document.getElementById('cheese_select').value;
    let cheese_chick_select = document.getElementById('cheese_chick_select').value;

    let cheese_ham_select = document.getElementById('cheese_ham_select').value;
    let cheese_fries_select = document.getElementById('cheese_fries_select').value;

    let cheese_ham_chick_select = document.getElementById('cheese_ham_chick_select').value;
    let cheese_chick_fries_select = document.getElementById('cheese_chick_fries_select').value;


    let cheese_fries_ham_select = document.getElementById('cheese_fries_ham_select').value;
    let cheese_chick_ham_select = document.getElementById('cheese_chick_ham_select').value;
    let cheese_ham_fries_select = document.getElementById('cheese_ham_fries_select').value;
    let cheese_fries_chick_select = document.getElementById('cheese_fries_chick_select').value;








    if (mymc_lunch == 'none') {
        console.log('jdfgdfgj');
        mymc_h.style.display = 'inline';
    } if (mymc_lunch !== 'none'||mcdish == 'Chicken Burger'||mcdish == 'Ham Burger'||mcdish == 'Cheese Burger'||mcdish == 'Fries') {
        mymc_h.style.display = 'none';
        addbtnformenu.style.display = 'inline';

    }

    console.log(mymc_lunch);

    
    chickselect.selectedIndex = 0;
    chick_ham_select.selectedIndex = 0;
    chick_cheese_select.selectedIndex = 0;
    chick_fries_select.selectedIndex = 0;
    chick_ham_fries_select.selectedIndex = 0;
    chick_ham_cheese_select.selectedIndex = 0;
    chick_cheese_ham_select.selectedIndex = 0;
    chick_cheese_fries_select.selectedIndex = 0;
    chick_fries_ham_select.selectedIndex = 0;
    chick_fries_cheese_select.selectedIndex = 0;


  
    hamselect.selectedIndex = 0;
    ham_chick_select.selectedIndex = 0;
    ham_cheese_select.selectedIndex = 0;
    ham_fries_select.selectedIndex = 0;
    ham_chick_fries_select.selectedIndex = 0;
    ham_fries_cheese_select.selectedIndex = 0;
    ham_cheese_chick_select.selectedIndex = 0;
    ham_cheese_fries_select.selectedIndex = 0;
    ham_fries_chick_select.selectedIndex = 0;
    ham_fries_chick_select.selectedIndex = 0;

    
    cheeseselect.selectedIndex = 0;
    cheese_chick_select.selectedIndex = 0;
    cheese_ham_select.selectedIndex = 0;
    cheese_fries_select.selectedIndex = 0;
    cheese_fries_chick_select.selectedIndex = 0;
    cheese_fries_ham_select.selectedIndex = 0;
    cheese_chick_ham_select.selectedIndex = 0;
    cheese_chick_fries_select.selectedIndex = 0;
    cheese_ham_chick_select.selectedIndex = 0;
    cheese_ham_select.selectedIndex = 0;





    friesselect.selectedIndex = 0;
    fries_chick_select.selectedIndex = 0;
    fries_ham_select.selectedIndex = 0;
    fries_cheese_select.selectedIndex = 0;
    fries_cheese_ham_select.selectedIndex = 0;
    fries_ham_cheese_select.selectedIndex = 0;
    fries_ham_chick_select.selectedIndex = 0;
    fries_chick_cheese_select.selectedIndex = 0;
    fries_chick_ham_select.selectedIndex = 0;
    fries_cheese_chick_select.selectedIndex = 0;



}
function mychicken() {
    let mychicken = document.getElementById('chick_select').value;
    let mychicken_h = document.getElementById('chick');
    let addbtnmclunch=document.getElementById('addbtnmclunch');


    // chicken
   
   
    let chick_ham_select = document.getElementById('chick_ham_select').value;

    let chick_cheese_select = document.getElementById('chick_cheese_select').value;
    let chick_fries_select = document.getElementById('chick_fries_select').value;

    let chick_ham_fries_select = document.getElementById('chick_ham_fries_select').value;


    let chick_ham_cheese_select = document.getElementById('chick_ham_cheese_select').value;
    let chick_cheese_ham_select = document.getElementById('chick_cheese_ham_select').value;
    let chick_cheese_fries_select = document.getElementById('chick_cheese_fries_select').value;
    let chick_fries_ham_select = document.getElementById('chick_fries_ham_select').value;
    let chick_fries_cheese_select = document.getElementById('chick_fries_cheese_select').value;



    

    if (mychicken == 'none') {

        mychicken_h.style.display = 'inline';
    } if (mychicken !== 'none') {
        mychicken_h.style.display = 'none';

    }
    addbtnmclunch.style.display='block';

    
   
    chick_ham_select.selectedIndex = 0;
    chick_cheese_select.selectedIndex = 0;
    chick_fries_select.selectedIndex = 0;
    chick_ham_fries_select.selectedIndex = 0;
    chick_ham_cheese_select.selectedIndex = 0;
    chick_cheese_ham_select.selectedIndex = 0;
    chick_cheese_fries_select.selectedIndex = 0;
    chick_fries_ham_select.selectedIndex = 0;
    chick_fries_cheese_select.selectedIndex = 0;

    console.log(mychicken);
}
function mychickham() {
    let mychick_ham = document.getElementById('chick_ham_select').value;
    let mychick_ham_h = document.getElementById('chick_ham');


    let chick_ham_fries_select = document.getElementById('chick_ham_fries_select').value;
    let chick_ham_cheese_select = document.getElementById('chick_ham_cheese_select').value;

    if (mychick_ham == 'none') {

        mychick_ham_h.style.display = 'inline';
    } if (mychick_ham !== 'none') {
        mychick_ham_h.style.display = 'none';

    }

    console.log(mychick_ham);
    chick_ham_fries_select.selectedIndex = 0;
    chick_ham_cheese_select.selectedIndex = 0;

}
function mychickcheese() {
    let mychickcheese = document.getElementById('chick_cheese__select').value;
    let mychickcheese_h = document.getElementById('chick_cheese');

    let chick_cheese_ham_select = document.getElementById('chick_cheese_ham_select').value;
    let chick_cheese_fries_select = document.getElementById('chick_cheese_fries_select').value;

    if (mychickcheese == 'none') {

        mychickcheese_h.style.display = 'inline';
    } if (mychickcheese !== 'none') {
        mychickcheese_h.style.display = 'none';

    }
    

    console.log(mychickcheeseham);
    chick_cheese_ham_select.selectedIndex = 0;
    chick_cheese_fries_select.selectedIndex = 0;

}
function mychickcheesefries() {
    let mychickcheesefries = document.getElementById('chick_cheese_fries_select').value;
    let mychickcheesefries_h = document.getElementById('chick_cheese_fries');

    let chick_cheese_fries_select = document.getElementById('chick_cheese_fries_select').value;
    

    if (mychickcheesefries == 'none') {

        mychickcheesefries_h.style.display = 'inline';
    } if (mychickcheesefries !== 'none') {
        mychickcheesefries_h.style.display = 'none';

    }

    console.log(mychickcheesefries);

    chick_cheese_fries_select.selectedIndex = 0;

}
function mychickcheeseham() {
    let mychickcheeseham = document.getElementById('chick_cheese_ham_select').value;
    let mychickcheeseham_h = document.getElementById('chick_cheese_ham');

    let chick_cheese_ham_select = document.getElementById('chick_cheese_ham_select').value;
    

    

    if (mychickcheeseham == 'none') {

        mychickcheeseham_h.style.display = 'inline';
    } if (mychickcheeseham !== 'none') {
        mychickcheeseham_h.style.display = 'none';

    }
    

    console.log(mychickcheeseham);
    chick_cheese_ham_select.selectedIndex = 0;
   

}
function mychickfriesham() {
    let mychickfriesham = document.getElementById('chick_fries_ham_select').value;
    let mychickfriesham_h = document.getElementById('chick_fries_ham');

    if (mychickfriesham == 'none') {

        mychickfriesham_h.style.display = 'inline';
    } if (mychickfriesham !== 'none') {
        mychickfriesham_h.style.display = 'none';

    }

    console.log(mychickfriesham);
}
function mychickfriescheese() {
    let mychickfriescheese = document.getElementById('chick_fries_cheese_select').value;
    let mychickfriescheese_h = document.getElementById('chick_fries_cheese');

    if (mychickfriescheese == 'none') {

        mychickfriescheese_h.style.display = 'inline';
    } if (mychickfriescheese !== 'none') {
        mychickfriescheese_h.style.display = 'none';

    }

    console.log(mychickfriescheese);

}

function myham() {
    let myham = document.getElementById('ham_select').value;
    let myham_h = document.getElementById('ham');
    let addbtnmclunch=document.getElementById('addbtnmclunch');



    // ham burgger
    let mclunchham = document.getElementById('mc_lunch_ham');
    let mc_lunch_ham_chick = document.getElementById('mc_lunch_ham_chick');
    let mc_lunch_ham_cheese = document.getElementById('mc_lunch_ham_cheese');
    let mc_lunch_ham_fries = document.getElementById('mc_lunch_ham_fries');
    let mc_lunch_ham_chick_fries = document.getElementById('mc_lunch_ham_chick_fries');
    let mc_lunch_ham_chick_cheese = document.getElementById('mc_lunch_ham_chick_cheese');
    let mc_lunch_ham_cheese_chick = document.getElementById('mc_lunch_ham_cheese_chick');
    let mc_lunch_ham_cheese_fries = document.getElementById('mc_lunch_ham_cheese_fries');
    let mc_lunch_ham_fries_chick = document.getElementById('mc_lunch_ham_fries_chick');
    let mc_lunch_ham_fries_cheese = document.getElementById('mc_lunch_ham_fries_cheese');
    let hamselect = document.getElementById('ham_select').value;
    let ham_chick_select = document.getElementById('ham_chick_select').value;

    let ham_cheese_select = document.getElementById('ham_cheese_select').value;
    let ham_fries_select = document.getElementById('ham_fries_select').value;

    let ham_chick_fries_select = document.getElementById('ham_chick_fries_select').value;
    let ham_chick_cheese_select = document.getElementById('ham_chick_cheese_select').value;
    let ham_fries_cheese_select = document.getElementById('ham_fries_cheese_select').value;
    let ham_cheese_chick_select = document.getElementById('ham_cheese_chick_select').value;
    let ham_cheese_fries_select = document.getElementById('ham_cheese_fries_select').value;
    let ham_fries_chick_select = document.getElementById('ham_fries_chick_select').value;
    if (myham == 'none') {

        myham_h.style.display = 'inline';
    } if (myham !== 'none') {
        myham_h.style.display = 'none';

    }

    


    
    mc_lunch_ham_chick.style.display = 'none';
    mc_lunch_ham_cheese.style.display = 'none';
    mc_lunch_ham_fries.style.display = 'none';
    mc_lunch_chick_ham_fries.style.display = 'none';
    mc_lunch_ham_chick_cheese.style.display = 'none';
    mc_lunch_ham_cheese_chick.style.display = 'none';
    mc_lunch_ham_cheese_fries.style.display = 'none';

    mc_lunch_ham_fries_chick.style.display = 'none';
    mc_lunch_ham_fries_cheese.style.display = 'none';
    ham_chick_select.selectedIndex = 0;
    ham_cheese_select.selectedIndex = 0;
    ham_fries_select.selectedIndex = 0;
    ham_chick_fries_select.selectedIndex = 0;
    ham_fries_cheese_select.selectedIndex = 0;
    ham_cheese_chick_select.selectedIndex = 0;
    ham_cheese_fries_select.selectedIndex = 0;
    ham_fries_chick_select.selectedIndex = 0;
    ham_fries_chick_select.selectedIndex = 0;

    addbtnmclunch.style.display='inline';

    console.log(myham);


}
function myhamchick() {
    let myhamchick = document.getElementById('ham_chick_select').value;
    let myhamchick_h = document.getElementById('ham_chick');

    if (myhamchick == 'none') {

        myhamchick_h.style.display = 'inline';
    } if (myhamchick !== 'none') {
        myhamchick_h.style.display = 'none';

    }

    console.log(myhamchick);


}
function myhamcheese() {
    let myhamcheese = document.getElementById('ham_cheese_select').value;
    let myhamcheese_h = document.getElementById('ham_cheese');

    if (myhamcheese == 'none') {

        myhamcheese_h.style.display = 'inline';
    } if (myhamcheese !== 'none') {
        myhamcheese_h.style.display = 'none';

    }

    console.log(myhamcheese);


}
function myhamfries() {
    let myhamfries = document.getElementById('ham_fries_select').value;
    let myhamfries_h = document.getElementById('ham_fries');

    if (myhamfries == 'none') {

        myhamfries_h.style.display = 'inline';
    } if (myhamfries !== 'none') {
        myhamfries_h.style.display = 'none';

    }

    console.log(myhamfries);


}
function myhamchickcheese() {
    let myhamchickcheese = document.getElementById('ham_chick_cheese_select').value;
    let myhamchickcheese_h = document.getElementById('ham_chick_cheese');

    if (myhamchickcheese == 'none') {

        myhamchickcheese_h.style.display = 'inline';
    } if (myhamchickcheese !== 'none') {
        myhamchickcheese_h.style.display = 'none';

    }

    console.log(myhamchickcheese);


}
function myhamcheesechick() {
    let myhamcheesechick = document.getElementById('ham_cheese_chick_select').value;
    let myhamcheesechick_h = document.getElementById('ham_cheese_chick');

    if (myhamcheesechick == 'none') {

        myhamcheesechick_h.style.display = 'inline';
    } if (myhamcheesechick !== 'none') {
        myhamcheesechick_h.style.display = 'none';

    }

    console.log(myhamcheesechick);


}
function myhamcheesefries() {
    let myhamcheesefries = document.getElementById('ham_cheese_fries_select').value;
    let myhamcheesefries_h = document.getElementById('ham_cheese_fries');

    if (myhamcheesefries == 'none') {

        myhamcheesefries_h.style.display = 'inline';
    } if (myhamcheesefries !== 'none') {
        myhamcheesefries_h.style.display = 'none';

    }

    console.log(myhamcheesefries);


}
function myhamfrieschick() {
    let myhamfrieschick = document.getElementById('ham_fries_chick_select').value;
    let myhamfrieschick_h = document.getElementById('ham_fries_chick');

    if (myhamfrieschick == 'none') {

        myhamfrieschick_h.style.display = 'inline';
    } if (myhamfrieschick !== 'none') {
        myhamfrieschick_h.style.display = 'none';

    }

    console.log(myhamfrieschick);


}
function myhamfriescheese() {
    let myhamfriescheese = document.getElementById('ham_fries_cheese_select').value;
    let myhamfriescheese_h = document.getElementById('ham_fries_cheese');

    if (myhamfriescheese == 'none') {

        myhamfriescheese_h.style.display = 'inline';
    } if (myhamfriescheese !== 'none') {
        myhamfriescheese_h.style.display = 'none';

    }

    console.log(myhamfriescheese);


}
function mycheese() {
    let mycheese = document.getElementById('cheese_select').value;
    let mycheese_h = document.getElementById('cheese');
    let addbtnmclunch=document.getElementById('addbtnmclunch');
// cheese Burger
    // cheese
    let mclunchcheese = document.getElementById('mc_lunch_cheese');
    let mc_lunch_cheese_chick = document.getElementById('mc_lunch_cheese_chick');
    let mc_lunch_cheese_ham = document.getElementById('mc_lunch_cheese_ham');
    let mc_lunch_cheese_fries = document.getElementById('mc_lunch_cheese_fries');
    let mc_lunch_cheese_chick_fries = document.getElementById('mc_lunch_cheese_chick_fries');
    let mc_lunch_cheese_chick_ham = document.getElementById('mc_lunch_cheese_chick_ham');
    let mc_lunch_cheese_ham_chick = document.getElementById('mc_lunch_cheese_ham_chick');
    let mc_lunch_cheese_ham_fries = document.getElementById('mc_lunch_cheese_ham_fries');
    let mc_lunch_cheese_fries_chick = document.getElementById('mc_lunch_cheese_fries_chick');
    let mc_lunch_cheese_fries_ham = document.getElementById('mc_lunch_cheese_fries_ham');
    let cheeseselect = document.getElementById('cheese_select').value;
    let cheese_chick_select = document.getElementById('cheese_chick_select').value;

    let cheese_ham_select = document.getElementById('cheese_ham_select').value;
    let cheese_fries_select = document.getElementById('cheese_fries_select').value;

    let cheese_ham_chick_select = document.getElementById('cheese_ham_chick_select').value;
    let cheese_chick_fries_select = document.getElementById('cheese_chick_fries_select').value;


    let cheese_fries_ham_select = document.getElementById('cheese_fries_ham_select').value;
    let cheese_chick_ham_select = document.getElementById('cheese_chick_ham_select').value;
    let cheese_ham_fries_select = document.getElementById('cheese_ham_fries_select').value;
    let cheese_fries_chick_select = document.getElementById('cheese_fries_chick_select').value;



    if (mycheese == 'none') {

        mycheese_h.style.display = 'inline';
    } if (mycheese !== 'none') {
        mycheese_h.style.display = 'none';

    }

    

    
    mc_lunch_cheese_chick.style.display = 'none';
    mc_lunch_cheese_ham.style.display = 'none';
    mc_lunch_cheese_fries.style.display = 'none';
    mc_lunch_chick_ham_fries.style.display = 'none';
    mc_lunch_cheese_chick_ham.style.display = 'none';
    mc_lunch_cheese_ham_chick.style.display = 'none';
    mc_lunch_cheese_ham_fries.style.display = 'none';

    mc_lunch_cheese_fries_chick.style.display = 'none';
    mc_lunch_cheese_fries_ham.style.display = 'none';
 
    cheese_chick_select.selectedIndex = 0;
    cheese_ham_select.selectedIndex = 0;
    cheese_fries_select.selectedIndex = 0;
    cheese_fries_chick_select.selectedIndex = 0;
    cheese_fries_ham_select.selectedIndex = 0;
    cheese_chick_ham_select.selectedIndex = 0;
    cheese_chick_fries_select.selectedIndex = 0;
    cheese_ham_chick_select.selectedIndex = 0;
    cheese_ham_select.selectedIndex = 0;
    addbtnmclunch.style.display='inline';



    console.log(mycheese);

}
function mycheesechick() {
    let mycheesechick = document.getElementById('cheese_chick_select').value;
    let mycheesechick_h = document.getElementById('cheese_chick');

    if (mycheesechick == 'none') {

        mycheesechick_h.style.display = 'inline';
    } if (mycheesechick !== 'none') {
        mycheesechick_h.style.display = 'none';

    }

    console.log(mycheesechick);

}
function mycheeseham() {
    let mycheeseham = document.getElementById('cheese_ham_select').value;
    let mycheeseham_h = document.getElementById('cheese_ham');

    if (mycheeseham == 'none') {

        mycheeseham_h.style.display = 'inline';
    } if (mycheeseham !== 'none') {
        mycheeseham_h.style.display = 'none';

    }

    console.log(mycheeseham);

}
function mycheesefries() {
    let mycheesefries = document.getElementById('cheese_fries_select').value;
    let mycheesefries_h = document.getElementById('cheese_fries');

    if (mycheesefries == 'none') {

        mycheesefries_h.style.display = 'inline';
    } if (mycheesefries !== 'none') {
        mycheesefries_h.style.display = 'none';

    }

    console.log(mycheesefries);

}
function mycheesefriesham() {
    let mycheesefriesham = document.getElementById('cheese_fries_ham_select').value;
    let mycheesefriesham_h = document.getElementById('cheese_fries_ham');

    if (mycheesefriesham == 'none') {

        mycheesefriesham_h.style.display = 'inline';
    } if (mycheesefriesham !== 'none') {
        mycheesefriesham_h.style.display = 'none';

    }

    console.log(mycheesefriesham);

}
function myfries() {
    let myfries = document.getElementById('fries_select').value;
    let myfries_h = document.getElementById('fries');
    let addbtnmclunch=-document.getElementById('addbtnmclunch');
 //  fries

 let mclunchfries = document.getElementById('mc_lunch_fries');
 let mc_lunch_fries_chick = document.getElementById('mc_lunch_fries_chick');
 let mc_lunch_fries_ham = document.getElementById('mc_lunch_fries_ham');
 let mc_lunch_fries_cheese = document.getElementById('mc_lunch_fries_cheese');
 let mc_lunch_fries_chick_cheese = document.getElementById('mc_lunch_fries_chick_cheese');
 let mc_lunch_fries_chick_ham = document.getElementById('mc_lunch_fries_chick_ham');


 let mc_lunch_fries_cheese_chick = document.getElementById('mc_lunch_fries_cheese_chick');
 let mc_lunch_fries_cheese_ham = document.getElementById('mc_lunch_fries_cheese_ham');

 let mc_lunch_fries_ham_cheese = document.getElementById('mc_lunch_fries_ham_cheese');
 let mc_lunch_fries_ham_chick = document.getElementById('mc_lunch_fries_ham_chick');
 let friesselect = document.getElementById('fries_select').value;
 let fries_chick_select = document.getElementById('fries_chick_select').value;

 let fries_ham_select = document.getElementById('fries_ham_select').value;
 let fries_cheese_select = document.getElementById('fries_cheese_select').value;
 let fries_cheese_ham_select = document.getElementById('fries_cheese_ham_select').value;
 let fries_cheese_chick_select = document.getElementById('fries_cheese_chick_select').value;


 let fries_ham_cheese_select = document.getElementById('fries_ham_cheese_select').value;
 let fries_ham_chick_select = document.getElementById('fries_ham_chick_select').value;
 let fries_chick_cheese_select = document.getElementById('fries_chick_cheese_select').value;
 let fries_chick_ham_select = document.getElementById('fries_chick_ham_select').value;



    if (myfries == 'none') {

        myfries_h.style.display = 'inline';
    } if (myfries !== 'none') {
        myfries_h.style.display = 'none';

    }


   
    mc_lunch_fries_chick.style.display = 'none';
    mc_lunch_fries_ham.style.display = 'none';
    mc_lunch_fries_cheese.style.display = 'none';
    mc_lunch_chick_ham_fries.style.display = 'none';
    mc_lunch_fries_chick_ham.style.display = 'none';
    mc_lunch_fries_cheese_ham.style.display = 'none';
    mc_lunch_fries_ham_chick.style.display = 'none';

    mc_lunch_fries_cheese_chick.style.display = 'none';
    mc_lunch_fries_ham_cheese.style.display = 'none';
    
    fries_chick_select.selectedIndex = 0;
    fries_ham_select.selectedIndex = 0;



    fries_cheese_select.selectedIndex = 0;
    fries_cheese_ham_select.selectedIndex = 0;
    fries_ham_cheese_select.selectedIndex = 0;
    fries_ham_chick_select.selectedIndex = 0;
    fries_chick_cheese_select.selectedIndex = 0;
    fries_chick_ham_select.selectedIndex = 0;
    fries_cheese_chick_select.selectedIndex = 0;
    addbtnmclunch.style.display='inline'

    console.log(myfries);

}
function myfrieschick() {
    let myfrieschick = document.getElementById('fries_chick_select').value;
    let myfrieschick_h = document.getElementById('fries_chick');

    if (myfrieschick == 'none') {

        myfrieschick_h.style.display = 'inline';
    } if (myfrieschick !== 'none') {
        myfrieschick_h.style.display = 'none';

    }

    console.log(myfrieschick);

}
function myfriesham() {
    let myfriesham = document.getElementById('fries_ham_select').value;
    let myfriesham_h = document.getElementById('fries_ham');

    if (myfriesham == 'none') {

        myfriesham_h.style.display = 'inline';
    } if (myfriesham !== 'none') {
        myfriesham_h.style.display = 'none';

    }

    console.log(myfriesham);

}
function myfriescheese() {
    let myfriescheese = document.getElementById('fries_cheese_select').value;
    let myfriescheese_h = document.getElementById('fries_cheese');

    if (myfriescheese == 'none') {

        myfriescheese_h.style.display = 'inline';
    } if (myfriescheese !== 'none') {
        myfriescheese_h.style.display = 'none';

    }

    console.log(myfriescheese);

}
function myfrieschickham() {
    let myfrieschickham = document.getElementById('fries_chick_ham_select').value;
    let myfrieschickham_h = document.getElementById('fries_chick_ham');

    if (myfrieschickham == 'none') {

        myfrieschickham_h.style.display = 'inline';
    } if (myfrieschickham !== 'none') {
        myfrieschickham_h.style.display = 'none';

    }

    console.log(myfrieschickham);

}
function myfrieschickcheese() {
    let myfrieschickcheese = document.getElementById('fries_chick_cheese_select').value;
    let myfrieschickcheese_h = document.getElementById('fries_chick_cheese');

    if (myfrieschickcheese == 'none') {

        myfrieschickcheese_h.style.display = 'inline';
    } if (myfrieschickcheese !== 'none') {
        myfrieschickcheese_h.style.display = 'none';

    }

    console.log(myfrieschickcheese);

}
function myfrieshamchick() {
    let myfrieshamchick = document.getElementById('fries_ham_chick_select').value;
    let myfrieshamchick_h = document.getElementById('fries_ham_chick');

    if (myfrieshamchick == 'none') {

        myfrieshamchick_h.style.display = 'inline';
    } if (myfrieshamchick !== 'none') {
        myfrieshamchick_h.style.display = 'none';

    }

    console.log(myfrieshamchick);

}
function myfrieshamcheese() {
    let myfrieshamcheese = document.getElementById('fries_ham_cheese_select').value;
    let myfrieshamcheese_h = document.getElementById('fries_ham_cheese');

    if (myfrieshamcheese == 'none') {

        myfrieshamcheese_h.style.display = 'inline';
    } if (myfrieshamcheese !== 'none') {
        myfrieshamcheese_h.style.display = 'none';

    }

    console.log(myfrieshamcheese);

}
function myfriescheesechick() {
    let myfriescheesechick = document.getElementById('fries_cheese_chick_select').value;
    let myfriescheesechick_h = document.getElementById('fries_cheese_chick');

    if (myfriescheesechick == 'none') {

        myfriescheesechick_h.style.display = 'inline';
    } if (myfriescheesechick !== 'none') {
        myfriescheesechick_h.style.display = 'none';

    }

    console.log(myfriescheesechick);

}
function myfriescheeseham() {
    let myfriescheeseham = document.getElementById('fries_cheese_ham_select').value;
    let myfriescheeseham_h = document.getElementById('fries_cheese_ham');

    if (myfriescheeseham == 'none') {

        myfriescheeseham_h.style.display = 'inline';
    } if (myfriescheeseham !== 'none') {
        myfriescheeseham_h.style.display = 'none';

    }

    console.log(myfriescheeseham);

}









////////////////////////////////////////////////////////////////////////////////////////////////////
function mcLunch_back() {
    window.history.back();

}

function addbtnmclunch() {

    let mclunchselect = document.getElementById('mc_lunch_select').value;
    let addbtnmclunch = document.getElementById('addbtnmclunch');
    // chicken
    let mclunchchick = document.getElementById('mc_lunch_chick');
    let chickselect = document.getElementById('chick_select').value;

    let mc_lunch_chick_ham = document.getElementById('mc_lunch_chick_ham');
    let chick_ham_select = document.getElementById('chick_ham_select').value;

    let mc_lunch_chick_cheese = document.getElementById('mc_lunch_chick_cheese');
    let chick_cheese_select = document.getElementById('chick_cheese_select').value;

    let mc_lunch_chick_fries = document.getElementById('mc_lunch_chick_fries');
    let chick_fries_select = document.getElementById('chick_fries_select').value;

    let chick_ham_fries_select = document.getElementById('chick_ham_fries_select').value;
    let mc_lunch_chick_ham_fries = document.getElementById('mc_lunch_chick_ham_fries');

    let mc_lunch_chick_ham_cheese = document.getElementById('mc_lunch_chick_ham_cheese');
    let chick_ham_cheese_select = document.getElementById('chick_ham_cheese_select').value;

    let mc_lunch_chick_cheese_ham = document.getElementById('mc_lunch_chick_cheese_ham');
    let chick_cheese_ham_select = document.getElementById('chick_cheese_ham_select').value;

    let mc_lunch_chick_cheese_fries = document.getElementById('mc_lunch_chick_cheese_fries');
    let chick_cheese_fries_select = document.getElementById('chick_cheese_fries_select').value;

    let mc_lunch_chick_fries_ham = document.getElementById('mc_lunch_chick_fries_ham');
    let chick_fries_ham_select = document.getElementById('chick_fries_ham_select').value;


    let mc_lunch_chick_fries_cheese = document.getElementById('mc_lunch_chick_fries_cheese');
    let chick_fries_cheese_select = document.getElementById('chick_fries_cheese_select').value;
    // ham burger


    let mclunchham = document.getElementById('mc_lunch_ham');
    let mc_lunch_ham_chick = document.getElementById('mc_lunch_ham_chick');
    let mc_lunch_ham_cheese = document.getElementById('mc_lunch_ham_cheese');
    let mc_lunch_ham_fries = document.getElementById('mc_lunch_ham_fries');
    let mc_lunch_ham_chick_fries = document.getElementById('mc_lunch_ham_chick_fries');
    let mc_lunch_ham_chick_cheese = document.getElementById('mc_lunch_ham_chick_cheese');
    let mc_lunch_ham_cheese_chick = document.getElementById('mc_lunch_ham_cheese_chick');
    let mc_lunch_ham_cheese_fries = document.getElementById('mc_lunch_ham_cheese_fries');
    let mc_lunch_ham_fries_chick = document.getElementById('mc_lunch_ham_fries_chick');
    let mc_lunch_ham_fries_cheese = document.getElementById('mc_lunch_ham_fries_cheese');
    let hamselect = document.getElementById('ham_select').value;
    let ham_chick_select = document.getElementById('ham_chick_select').value;

    let ham_cheese_select = document.getElementById('ham_cheese_select').value;
    let ham_fries_select = document.getElementById('ham_fries_select').value;

    let ham_chick_fries_select = document.getElementById('ham_chick_fries_select').value;
    let ham_chick_cheese_select = document.getElementById('ham_chick_cheese_select').value;


    let ham_fries_cheese_select = document.getElementById('ham_fries_cheese_select').value;
    let ham_cheese_chick_select = document.getElementById('ham_cheese_chick_select').value;
    let ham_cheese_fries_select = document.getElementById('ham_cheese_fries_select').value;
    let ham_fries_chick_select = document.getElementById('ham_fries_chick_select').value;

    // cheese
    let mclunchcheese = document.getElementById('mc_lunch_cheese');
    let mc_lunch_cheese_chick = document.getElementById('mc_lunch_cheese_chick');
    let mc_lunch_cheese_ham = document.getElementById('mc_lunch_cheese_ham');
    let mc_lunch_cheese_fries = document.getElementById('mc_lunch_cheese_fries');
    let mc_lunch_cheese_chick_fries = document.getElementById('mc_lunch_cheese_chick_fries');
    let mc_lunch_cheese_chick_ham = document.getElementById('mc_lunch_cheese_chick_ham');
    let mc_lunch_cheese_ham_chick = document.getElementById('mc_lunch_cheese_ham_chick');
    let mc_lunch_cheese_ham_fries = document.getElementById('mc_lunch_cheese_ham_fries');
    let mc_lunch_cheese_fries_chick = document.getElementById('mc_lunch_cheese_fries_chick');
    let mc_lunch_cheese_fries_ham = document.getElementById('mc_lunch_cheese_fries_ham');
    let cheeseselect = document.getElementById('cheese_select').value;
    let cheese_chick_select = document.getElementById('cheese_chick_select').value;

    let cheese_ham_select = document.getElementById('cheese_ham_select').value;
    let cheese_fries_select = document.getElementById('cheese_fries_select').value;

    let cheese_ham_chick_select = document.getElementById('cheese_ham_chick_select').value;
    let cheese_chick_fries_select = document.getElementById('cheese_chick_fries_select').value;


    let cheese_fries_ham_select = document.getElementById('cheese_fries_ham_select').value;
    let cheese_chick_ham_select = document.getElementById('cheese_chick_ham_select').value;
    let cheese_ham_fries_select = document.getElementById('cheese_ham_fries_select').value;
    let cheese_fries_chick_select = document.getElementById('cheese_fries_chick_select').value;




    //  fries

    let mclunchfries = document.getElementById('mc_lunch_fries');
    let mc_lunch_fries_chick = document.getElementById('mc_lunch_fries_chick');
    let mc_lunch_fries_ham = document.getElementById('mc_lunch_fries_ham');
    let mc_lunch_fries_cheese = document.getElementById('mc_lunch_fries_cheese');
    let mc_lunch_fries_chick_cheese = document.getElementById('mc_lunch_fries_chick_cheese');
    let mc_lunch_fries_chick_ham = document.getElementById('mc_lunch_fries_chick_ham');


    let mc_lunch_fries_cheese_chick = document.getElementById('mc_lunch_fries_cheese_chick');
    let mc_lunch_fries_cheese_ham = document.getElementById('mc_lunch_fries_cheese_ham');

    let mc_lunch_fries_ham_cheese = document.getElementById('mc_lunch_fries_ham_cheese');
    let mc_lunch_fries_ham_chick = document.getElementById('mc_lunch_fries_ham_chick');
    let friesselect = document.getElementById('fries_select').value;
    let fries_chick_select = document.getElementById('fries_chick_select').value;

    let fries_ham_select = document.getElementById('fries_ham_select').value;
    let fries_cheese_select = document.getElementById('fries_cheese_select').value;
    let fries_cheese_ham_select = document.getElementById('fries_cheese_ham_select').value;
    let fries_cheese_chick_select = document.getElementById('fries_cheese_chick_select').value;


    let fries_ham_cheese_select = document.getElementById('fries_ham_cheese_select').value;
    let fries_ham_chick_select = document.getElementById('fries_ham_chick_select').value;
    let fries_chick_cheese_select = document.getElementById('fries_chick_cheese_select').value;
    let fries_chick_ham_select = document.getElementById('fries_chick_ham_select').value;
    let maincount = document.getElementById('countdown').value;











    // chicken


    if (mclunchselect == 'Chicken Burger') {
        mclunchchick.style.display = 'inline';

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Ham Burger') {
        mc_lunch_chick_ham.style.display = 'inline'

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Ham Burger' && chick_ham_select == 'Fries') {
        mc_lunch_chick_ham_fries.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Ham Burger' && chick_ham_select == 'Cheese Burger') {
        mc_lunch_chick_ham_cheese.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Cheese Burger') {
        mc_lunch_chick_cheese.style.display = 'inline'

    }

    if (mclunchselect == 'Chicken Burger' && chickselect == 'Cheese Burger' && chick_cheese_select == 'Ham Burger') {
        mc_lunch_chick_cheese_ham.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }

    if (mclunchselect == 'Chicken Burger' && chickselect == 'Cheese Burger' && chick_cheese_select == 'Fries') {
        mc_lunch_chick_cheese_fries.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Fries') {
        mc_lunch_chick_fries.style.display = 'inline'

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Fries' && chick_fries_select == 'Ham Burger') {
        mc_lunch_chick_fries_ham.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Fries' && chick_fries_select == 'Cheese Burger') {
        mc_lunch_chick_fries_cheese.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }













    // Ham Burger

    if (mclunchselect == 'Ham Burger') {
        mclunchham.style.display = 'inline';

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Chicken Burger') {
        mc_lunch_ham_chick.style.display = 'inline'

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Chicken Burger' && ham_chick_select == 'Fries') {
        mc_lunch_ham_chick_fries.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Chicken Burger' && ham_chick_select == 'Cheese Burger') {
        mc_lunch_ham_chick_cheese.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Cheese Burger') {
        mc_lunch_ham_cheese.style.display = 'inline'

    }

    if (mclunchselect == 'Ham Burger' && hamselect == 'Cheese Burger' && ham_cheese_select == 'Chicken Burger') {
        mc_lunch_ham_cheese_chick.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }

    if (mclunchselect == 'Ham Burger' && hamselect == 'Cheese Burger' && ham_cheese_select == 'Fries') {
        mc_lunch_ham_cheese_fries.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Fries') {
        mc_lunch_ham_fries.style.display = 'inline'

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Fries' && ham_fries_select == 'Chicken Burger') {
        mc_lunch_ham_fries_chick.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Fries' && ham_fries_select == 'Cheese Burger') {
        mc_lunch_ham_fries_cheese.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    // Cheese Burger

    if (mclunchselect == 'Cheese Burger') {
        mclunchcheese.style.display = 'inline';

    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Chicken Burger') {
        mc_lunch_cheese_chick.style.display = 'inline'

    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Chicken Burger' && cheese_chick_select == 'Fries') {
        mc_lunch_cheese_chick_fries.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Chicken Burger' && cheese_chick_select == 'Ham Burger') {
        mc_lunch_cheese_chick_ham.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Ham Burgerr') {
        mc_lunch_cheese_ham.style.display = 'inline'

    }

    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Ham Burger' && cheese_ham_select == 'Chicken Burger') {
        mc_lunch_cheese_ham_chick.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }

    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Ham Burger' && cheese_ham_select == 'Fries') {
        mc_lunch_cheese_ham_fries.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Fries') {
        mc_lunch_cheese_fries.style.display = 'inline'

    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Fries' && cheese_fries_select == 'Chicken Burger') {
        mc_lunch_cheese_fries_chick.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Fries' && cheese_fries_select == 'Ham Burger') {
        mc_lunch_cheese_fries_ham.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    // Fries

    if (mclunchselect == 'Fries') {
        mclunchfries.style.display = 'inline';

    }
    if (mclunchselect == 'Fries' && friesselect == 'Chicken Burger') {
        mc_lunch_fries_chick.style.display = 'inline'

    }
    if (mclunchselect == 'Fries' && friesselect == 'Chicken Burger' && fries_chick_select == 'Cheese Burger') {
        mc_lunch_fries_chick_cheese.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Fries' && friesselect == 'Chicken Burger' && fries_chick_select == 'Ham Burger') {
        mc_lunch_fries_chick_ham.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Fries' && friesselect == 'Ham Burgerr') {
        mc_lunch_fries_ham.style.display = 'inline'

    }

    if (mclunchselect == 'Fries' && friesselect == 'Ham Burger' && fries_ham_select == 'Chicken Burger') {
        mc_lunch_fries_ham_chick.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }

    if (mclunchselect == 'Fries' && friesselect == 'Ham Burger' && fries_ham_select == 'Cheese Burger') {
        mc_lunch_fries_ham_cheese.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Fries' && friesselect == 'Cheese Burger') {
        mc_lunch_fries_cheese.style.display = 'inline'

    }
    if (mclunchselect == 'Fries' && friesselect == 'Cheese Burger' && fries_cheese_select == 'Chicken Burger') {
        mc_lunch_fries_cheese_chick.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Fries' && friesselect == 'Cheese Burger' && fries_cheese_select == 'Ham Burger') {
        mc_lunch_fries_cheese_ham.style.display = 'inline';
        addbtnmclunch.style.display = 'none'

    }










}
function mclunchvali() {
    let mclunchselect = document.getElementById('mc_lunch_select').value;
    let mclunchh = document.getElementById('mc_lunch_h');







    // chicken

    let maincount = document.getElementById('countdown').value;

    let chickselect = document.getElementById('chick_select').value;
    let count_one = document.getElementById('count_one').value;


    let chick_ham_select = document.getElementById('chick_ham_select').value;
    let count_two = document.getElementById('count_two').value;


    let chick_cheese_select = document.getElementById('chick_cheese_select').value;
    let count_three = document.getElementById('count_three').value;


    let chick_fries_select = document.getElementById('chick_fries_select').value;
    let count_four = document.getElementById('count_four').value;


    let chick_ham_fries_select = document.getElementById('chick_ham_fries_select').value;
    let count_five = document.getElementById('count_five').value;

    let chick_ham_cheese_select = document.getElementById('chick_ham_cheese_select').value;
    let count_six = document.getElementById('count_six').value;


    let chick_cheese_ham_select = document.getElementById('chick_cheese_ham_select').value;
    let count_seven = document.getElementById('count_seven').value;


    let chick_cheese_fries_select = document.getElementById('chick_cheese_fries_select').value;
    let count_eight = document.getElementById('count_eight').value;


    let chick_fries_ham_select = document.getElementById('chick_fries_ham_select').value;
    let count_nine = document.getElementById('count_nine').value;



    let chick_fries_cheese_select = document.getElementById('chick_fries_cheese_select').value;
    let count_ten = document.getElementById('count_ten').value;


    // ham burger



    let hamselect = document.getElementById('ham_select').value;
    let count_ham = document.getElementById("count_ham").value;

    let ham_chick_select = document.getElementById('ham_chick_select').value;
    let count_ham_one = document.getElementById('count_ham_one').value;

    let ham_cheese_select = document.getElementById('ham_cheese_select').value;
    let count_ham_two = document.getElementById("count_ham_two").value;

    let ham_fries_select = document.getElementById('ham_fries_select').value;
    let count_ham_three = document.getElementById('count_ham_three').value;


    let ham_chick_fries_select = document.getElementById('ham_chick_fries_select').value;
    let count_ham_four = document.getElementById('count_ham_four').value;


    let ham_chick_cheese_select = document.getElementById('ham_chick_cheese_select').value;
    let count_ham_five = document.getElementById('count_ham_five').value;


    let ham_fries_cheese_select = document.getElementById('ham_fries_cheese_select').value;
    let count_ham_nine = document.getElementById("count_ham_nine").value;

    let ham_cheese_chick_select = document.getElementById('ham_cheese_chick_select').value;
    let count_ham_six = document.getElementById('count_ham_six').value;

    let ham_cheese_fries_select = document.getElementById('ham_cheese_fries_select').value;
    let count_ham_seven = document.getElementById('count_ham_seven').value;

    let ham_fries_chick_select = document.getElementById('ham_fries_chick_select').value;
    let count_ham_eight = document.getElementById('count_ham_eight').value;

    // cheese

    let cheeseselect = document.getElementById('cheese_select').value;
    let count_cheese = document.getElementById('count_cheese').value;

    let cheese_chick_select = document.getElementById('cheese_chick_select').value;
    let count_cheese_one = document.getElementById("count_cheese_one").value;

    let cheese_ham_select = document.getElementById('cheese_ham_select').value;
    let count_cheese_two = document.getElementById('count_cheese_two').value;

    let cheese_fries_select = document.getElementById('cheese_fries_select').value;
    let count_cheese_three = document.getElementById('count_cheese_three').value;

    let cheese_ham_chick_select = document.getElementById('cheese_ham_chick_select').value;
    let count_cheese_six = document.getElementById('count_cheese_six').value;

    let cheese_chick_fries_select = document.getElementById('cheese_chick_fries_select').value;
    let count_cheese_five = document.getElementById('count_cheese_five').value;



    let cheese_fries_ham_select = document.getElementById('cheese_fries_ham_select').value;
    let count_cheese_nine = document.getElementById('count_cheese_nine').value;

    let cheese_chick_ham_select = document.getElementById('cheese_chick_ham_select').value;
    let count_cheese_four = document.getElementById('count_cheese_four').value;

    let cheese_ham_fries_select = document.getElementById('cheese_ham_fries_select').value;
    let count_cheese_seven = document.getElementById('count_cheese_seven').value;

    let cheese_fries_chick_select = document.getElementById('cheese_fries_chick_select').value;
    let count_cheese_eight = document.getElementById('count_cheese_eight').value;












    if (mclunchselect == 'none') {
        mclunchh.style.display = 'inline';
    }
    if (mclunchselect !== 'none') {
        mclunchh.style.display = 'none';
        window.location.href='finalpage.html';


    }



    // chicken


    if (mclunchselect == 'Chicken Burger') {
        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', '');
        localStorage.setItem('count1', '')

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')




    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Ham Burger') {
        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', chickselect);
        localStorage.setItem('count1', count_one)

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')





    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Ham Burger' && chick_ham_select == 'Fries') {

        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', chickselect);
        localStorage.setItem('count1', count_one)

        localStorage.setItem('Mealtypetwo', chick_ham_select);
        localStorage.setItem('count2', count_two);

        localStorage.setItem('Mealtypethree', chick_ham_fries_select);
        localStorage.setItem('count3', count_five)





    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Ham Burger' && chick_ham_select == 'Cheese Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', chickselect);
        localStorage.setItem('count1', count_one)

        localStorage.setItem('Mealtypetwo', chick_ham_select);
        localStorage.setItem('count2', count_two);

        localStorage.setItem('Mealtypethree', chick_ham_cheese_select);
        localStorage.setItem('count3', count_six)




    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Cheese Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', chickselect);
        localStorage.setItem('count1', count_one)

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')



    }

    if (mclunchselect == 'Chicken Burger' && chickselect == 'Cheese Burger' && chick_cheese_select == 'Ham Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', chickselect);
        localStorage.setItem('count1', count_one)

        localStorage.setItem('Mealtypetwo', chick_cheese_select);
        localStorage.setItem('count2', count_three);

        localStorage.setItem('Mealtypethree', chick_cheese_ham_select);
        localStorage.setItem('count3', count_seven)


    }

    if (mclunchselect == 'Chicken Burger' && chickselect == 'Cheese Burger' && chick_cheese_select == 'Fries') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', chickselect);
        localStorage.setItem('count1', count_one)

        localStorage.setItem('Mealtypetwo', chick_cheese_select);
        localStorage.setItem('count2', count_three);

        localStorage.setItem('Mealtypethree', chick_cheese_fries_select);
        localStorage.setItem('count3', count_eight)



    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Fries') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', chickselect);
        localStorage.setItem('count1', count_one)

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')



    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Fries' && chick_fries_select == 'Ham Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', chickselect);
        localStorage.setItem('count1', count_one)

        localStorage.setItem('Mealtypetwo', chick_fries_select);
        localStorage.setItem('count2', count_four);

        localStorage.setItem('Mealtypethree', chick_fries_ham_select);
        localStorage.setItem('count3', count_nine)



    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Fries' && chick_fries_select == 'Cheese Burger') {

        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', chickselect);
        localStorage.setItem('count1', count_one)

        localStorage.setItem('Mealtypetwo', chick_fries_select);
        localStorage.setItem('count2', chick_fries_select);

        localStorage.setItem('Mealtypethree', chick_fries_cheese_select);
        localStorage.setItem('count3', count_ten)



    }






    // Ham Burger

    if (mclunchselect == 'Ham Burger') {

        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', '');
        localStorage.setItem('count1', '')

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Chicken Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', hamselect);
        localStorage.setItem('count1', count_ham)

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Chicken Burger' && ham_chick_select == 'Fries') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', hamselect);
        localStorage.setItem('count1', count_ham)

        localStorage.setItem('Mealtypetwo', ham_chick_select);
        localStorage.setItem('count2', count_ham_one);

        localStorage.setItem('Mealtypethree', ham_chick_fries_select);
        localStorage.setItem('count3', count_ham_four)



    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Chicken Burger' && ham_chick_select == 'Cheese Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', hamselect);
        localStorage.setItem('count1', count_ham)

        localStorage.setItem('Mealtypetwo', ham_chick_select);
        localStorage.setItem('count2', count_ham_one);

        localStorage.setItem('Mealtypethree', ham_chick_cheese_select);
        localStorage.setItem('count3', count_ham_five)



    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Cheese Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', hamselect);
        localStorage.setItem('count1', count_ham)

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')

    }

    if (mclunchselect == 'Ham Burger' && hamselect == 'Cheese Burger' && ham_cheese_select == 'Chicken Burger') {
        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', hamselect);
        localStorage.setItem('count1', count_ham)

        localStorage.setItem('Mealtypetwo', ham_cheese_select);
        localStorage.setItem('count2', count_ham_two);

        localStorage.setItem('Mealtypethree', ham_cheese_chick_select);
        localStorage.setItem('count3', count_ham_six)

    }

    if (mclunchselect == 'Ham Burger' && hamselect == 'Cheese Burger' && ham_cheese_select == 'Fries') {
        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', hamselect);
        localStorage.setItem('count1', count_ham)

        localStorage.setItem('Mealtypetwo', ham_cheese_select);
        localStorage.setItem('count2', count_ham_two);

        localStorage.setItem('Mealtypethree', ham_cheese_fries_select);
        localStorage.setItem('count3', count_ham_seven)

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Fries') {

        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', hamselect);
        localStorage.setItem('count1', count_ham)

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Fries' && ham_fries_select == 'Chicken Burger') {

        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', hamselect);
        localStorage.setItem('count1', count_ham)

        localStorage.setItem('Mealtypetwo', ham_fries_select);
        localStorage.setItem('count2', count_ham_three);

        localStorage.setItem('Mealtypethree', ham_fries_chick_select);
        localStorage.setItem('count3', count_ham_eight)
    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Fries' && ham_fries_select == 'Cheese Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', hamselect);
        localStorage.setItem('count1', count_ham)

        localStorage.setItem('Mealtypetwo', ham_fries_select);
        localStorage.setItem('count2', count_ham_three);

        localStorage.setItem('Mealtypethree', ham_fries_cheese_select);
        localStorage.setItem('count3', count_ham_nine)




    }






    // Cheese Burger

    if (mclunchselect == 'Cheese Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', '');
        localStorage.setItem('count1', '')

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')

    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Chicken Burger') {

        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', cheeseselect);
        localStorage.setItem('count1', count_cheese)

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')
    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Chicken Burger' && cheese_chick_select == 'Fries') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', cheeseselect);
        localStorage.setItem('count1', count_cheese)

        localStorage.setItem('Mealtypetwo', cheese_chick_select);
        localStorage.setItem('count2', count_cheese_one);

        localStorage.setItem('Mealtypethree', cheese_chick_fries_select);
        localStorage.setItem('count3', count_cheese_five)



    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Chicken Burger' && cheese_chick_select == 'Ham Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', cheeseselect);
        localStorage.setItem('count1', count_cheese)

        localStorage.setItem('Mealtypetwo', cheese_chick_select);
        localStorage.setItem('count2', count_cheese_one);

        localStorage.setItem('Mealtypethree', cheese_chick_ham_select);
        localStorage.setItem('count3', count_cheese_four)



    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Ham Burgerr') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', cheeseselect);
        localStorage.setItem('count1', count_cheese)

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')
    }

    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Ham Burger' && cheese_ham_select == 'Chicken Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', cheeseselect);
        localStorage.setItem('count1', count_cheese)

        localStorage.setItem('Mealtypetwo', cheese_ham_select);
        localStorage.setItem('count2', count_cheese_two);

        localStorage.setItem('Mealtypethree', cheese_ham_chick_select);
        localStorage.setItem('count3', count_cheese_six)
    }

    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Ham Burger' && cheese_ham_select == 'Fries') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', cheeseselect);
        localStorage.setItem('count1', count_cheese)

        localStorage.setItem('Mealtypetwo', cheese_ham_select);
        localStorage.setItem('count2', count_cheese_two);

        localStorage.setItem('Mealtypethree', cheese_ham_fries_select);
        localStorage.setItem('count3', count_cheese_seven)

    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Fries') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', cheeseselect);
        localStorage.setItem('count1', count_cheese)

        localStorage.setItem('Mealtypetwo', '');
        localStorage.setItem('count2', '');

        localStorage.setItem('Mealtypethree', '');
        localStorage.setItem('count3', '')

    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Fries' && cheese_fries_select == 'Chicken Burger') {

        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', cheeseselect);
        localStorage.setItem('count1', count_cheese)

        localStorage.setItem('Mealtypetwo', cheese_fries_select);
        localStorage.setItem('count2', count_cheese_three);

        localStorage.setItem('Mealtypethree', cheese_fries_chick_select);
        localStorage.setItem('count3', count_cheese_eight)

    }
    if (mclunchselect == 'Cheese Burger' && cheeseselect == 'Fries' && cheese_fries_select == 'Ham Burger') {


        localStorage.setItem('Mealtype', mclunchselect);
        localStorage.setItem('count', maincount);

        localStorage.setItem('Mealtypeone', cheeseselect);
        localStorage.setItem('count1', count_cheese)

        localStorage.setItem('Mealtypetwo', cheese_fries_select);
        localStorage.setItem('count2', count_cheese_three);

        localStorage.setItem('Mealtypethree', cheese_fries_ham_select);
        localStorage.setItem('count3', count_cheese_nine)

    }

    //  fries

    let mclunchfries = document.getElementById('mc_lunch_fries');
    let mc_lunch_fries_chick = document.getElementById('mc_lunch_fries_chick');
    let mc_lunch_fries_ham = document.getElementById('mc_lunch_fries_ham');
    let mc_lunch_fries_cheese = document.getElementById('mc_lunch_fries_cheese');
    let mc_lunch_fries_chick_cheese = document.getElementById('mc_lunch_fries_chick_cheese');
    let mc_lunch_fries_chick_ham = document.getElementById('mc_lunch_fries_chick_ham');


    let mc_lunch_fries_cheese_chick = document.getElementById('mc_lunch_fries_cheese_chick');
    let mc_lunch_fries_cheese_ham = document.getElementById('mc_lunch_fries_cheese_ham');

    let mc_lunch_fries_ham_cheese = document.getElementById('mc_lunch_fries_ham_cheese');
    let mc_lunch_fries_ham_chick = document.getElementById('mc_lunch_fries_ham_chick');
    let friesselect = document.getElementById('fries_select').value;
    let count_fries=document.getElementById('count_fries').value;

    let fries_chick_select = document.getElementById('fries_chick_select').value;
    let count_fries_one=document.getElementById('count_fries_one').value;

    let fries_ham_select = document.getElementById('fries_ham_select').value;
    let count_fries_two=document.getElementById('count_fries_two').value;

    let fries_cheese_select = document.getElementById('fries_cheese_select').value;
    let count_fries_three=document.getElementById('count_fries_three').value;

    let fries_cheese_ham_select = document.getElementById('fries_cheese_ham_select').value;
    let count_fries_nine=document.getElementById('count_fries_nine').value;

    let fries_cheese_chick_select = document.getElementById('fries_cheese_chick_select').value;
    let count_fries_eight=document.getElementById('count_fries_eight').value;


    let fries_ham_cheese_select = document.getElementById('fries_ham_cheese_select').value;
    let count_fries_seven=-document.getElementById('count_fries_seven').value;

    let fries_ham_chick_select = document.getElementById('fries_ham_chick_select').value;
    let count_fries_six=document.getElementById('count_fries_six').value;

    let fries_chick_cheese_select = document.getElementById('fries_chick_cheese_select').value;
    let count_fries_five=document.getElementById('count_fries_five').value;

    let fries_chick_ham_select = document.getElementById('fries_chick_ham_select').value;
    let count_fries_four=document.getElementById('count_fries_four').value;
    

// Fries

if (mclunchselect == 'Fries') {
    
    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', '');
    localStorage.setItem('count1', '')

    localStorage.setItem('Mealtypetwo', '');
    localStorage.setItem('count2', '');

    localStorage.setItem('Mealtypethree', '');
    localStorage.setItem('count3', '')

}
if (mclunchselect == 'Fries' && friesselect == 'Chicken Burger') {
    
    

    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', friesselect);
    localStorage.setItem('count1', count_fries)

    localStorage.setItem('Mealtypetwo', '');
    localStorage.setItem('count2', '');

    localStorage.setItem('Mealtypethree', '');
    localStorage.setItem('count3', '')
}
if (mclunchselect == 'Fries' && friesselect == 'Chicken Burger' && fries_chick_select == 'Cheese Burger') {
 
    
    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', friesselect);
    localStorage.setItem('count1', count_fries)

    localStorage.setItem('Mealtypetwo', fries_chick_select);
    localStorage.setItem('count2', count_fries_one);

    localStorage.setItem('Mealtypethree', fries_chick_cheese_select);
    localStorage.setItem('count3', count_fries_five)



}
if (mclunchselect == 'Fries' && friesselect == 'Chicken Burger' && fries_chick_select == 'Ham Burger') {
  
    
    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', friesselect);
    localStorage.setItem('count1', count_fries)

    localStorage.setItem('Mealtypetwo', fries_chick_select);
    localStorage.setItem('count2', count_fries_one);

    localStorage.setItem('Mealtypethree', fries_chick_ham_select);
    localStorage.setItem('count3', count_fries_four)



}
if (mclunchselect == 'Fries' && friesselect == 'Ham Burgerr') {
   
    
    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', friesselect);
    localStorage.setItem('count1', count_fries)

    localStorage.setItem('Mealtypetwo', '');
    localStorage.setItem('count2', '');

    localStorage.setItem('Mealtypethree', '');
    localStorage.setItem('count3', '')
}

if (mclunchselect == 'Fries' && friesselect == 'Ham Burger' && fries_ham_select == 'Chicken Burger') {
    
    
    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', friesselect);
    localStorage.setItem('count1', count_fries)

    localStorage.setItem('Mealtypetwo', fries_ham_select);
    localStorage.setItem('count2', count_fries_two);

    localStorage.setItem('Mealtypethree',fries_ham_chick_select );
    localStorage.setItem('count3', count_fries_six)

}

if (mclunchselect == 'Fries' && friesselect == 'Ham Burger' && fries_ham_select == 'Cheese Burger') {
    
    
    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', friesselect);
    localStorage.setItem('count1', count_fries)

    localStorage.setItem('Mealtypetwo', fries_ham_select);
    localStorage.setItem('count2', count_fries_two);

    localStorage.setItem('Mealtypethree', fries_ham_cheese_select);
    localStorage.setItem('count3', count_fries_seven)

}
if (mclunchselect == 'Fries' && friesselect == 'Cheese Burger') {
    
    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', friesselect);
    localStorage.setItem('count1', count_fries)

    localStorage.setItem('Mealtypetwo', '');
    localStorage.setItem('count2', '');

    localStorage.setItem('Mealtypethree', '');
    localStorage.setItem('count3', '')

}
if (mclunchselect == 'Fries' && friesselect == 'Cheese Burger' && fries_cheese_select == 'Chicken Burger') {
    
    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', friesselect);
    localStorage.setItem('count1', count_fries)

    localStorage.setItem('Mealtypetwo', fries_cheese_select);
    localStorage.setItem('count2', count_fries_three);

    localStorage.setItem('Mealtypethree', fries_cheese_chick_select);
    localStorage.setItem('count3', count_fries_eight)
}
if (mclunchselect == 'Fries' && friesselect == 'Cheese Burger' && fries_cheese_select == 'Ham Burger') {
    
    
    localStorage.setItem('Mealtype', mclunchselect);
    localStorage.setItem('count', maincount);

    localStorage.setItem('Mealtypeone', friesselect);
    localStorage.setItem('count1', count_fries)

    localStorage.setItem('Mealtypetwo', fries_cheese_select);
    localStorage.setItem('count2', count_fries_three);

    localStorage.setItem('Mealtypethree', fries_cheese_ham_select);
    localStorage.setItem('count3', count_fries_nine)

}






}



function mclunchback() {

    let mch3 = document.getElementById('foodone');
    let mainfinal_btn = document.getElementById('mainbtndiv');
    let mcfinalback = document.getElementById('mclunchfinalbtn');
    let mc_lunch_div = document.getElementById('mc_lunch');
    let vege_final_btn = document.getElementById('vegeback');
    let mch32 = document.getElementById('foodtwo');
    mch32.style.display = 'none'

    mch3.style.display = 'none';
    mcfinalback.style.display = 'none';
    mainfinal_btn.style.display = 'none';

    mc_lunch_div.style.display = 'inline'



}













































