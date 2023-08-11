const container = document.querySelector('.container');
let boxs = '';

function makeBox(n){
    for(let i = 1; i <= n**2; i++){
        boxs += `
            <div 
                class="box" 
                style="width: ${100 / n}%; 
                border: ${(n < 2) ? '0px' : '1px' } solid salmon;
            ">

            </div>
        `;
    }
    return boxs;    
}

// let color = prompt('get color');

function sketch(box, color){
    box.style.backgroundColor = color;
}

container.addEventListener('mousemove', (e) => {
    if(e.target.classList.contains('box')){
        const box = e.target;
        sketch(box, color);
    }
})



const result = makeBox(9);

container.innerHTML = result;