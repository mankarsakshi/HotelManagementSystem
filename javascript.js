let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let food3s = document.getElementById('food3');
let food4s = document.getElementById('food4');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{ 
    foods.style.backgroundImage="url('images/food1.png')";
})
food2s.addEventListener('click',()=>{ 
    foods.style.backgroundImage="url('images/food2.png')";
})

food3s.addEventListener('click',()=>{ 
    foods.style.backgroundImage="url('images/food3.png')";
})

food4s.addEventListener('click',()=>{ 
    foods.style.backgroundImage="url('images/food4.png')";
})
