const container = document.querySelector('.container');
const reset = document.querySelector('.reset');

reset.addEventListener('click', function(){
    const boxs = document.querySelectorAll('.box');
    boxs.forEach(box => box.style.backgroundColor = "white");
})

let sketchSize = document.querySelector('input[type="range"]');
sketchSize.addEventListener('change', function(e){
    let n = 0;
    n = parseInt(e.target.value)
    let result = makeBox(n);
    container.innerHTML = result;
})

function makeBox(n = 1){
    let boxs = '';
    for(let i = 1; i <= n**2; i++){
        boxs += `
            <div 
                class="box" 
                style="width: ${100 / n}%; 
                border: ${(n < 2) ? '0px' : '1px' } solid rgba(0,0,0,0.1);
            ">
            </div>
        `;
    }
    return boxs;    
}

function sketch(box, colorVal){
    const color = colorVal;
    box.style.backgroundColor = color;
}

function sketchActive(e, colorVal){
    container.addEventListener('mousemove', (e) => {
        colorVal !== 'white' ? container.style.cssText = "cursor: url('cursor/paint.cur'), auto;" : container.style.cssText = "cursor: url('cursor/eraser.cur'), auto;";
        if(e.target.classList.contains('box')){
            const box = e.target;
            sketch(box, colorVal);
        }
    })
}

const colorPicker = document.querySelector('input[type="color"]');
colorPicker.addEventListener("change", function(e) {
    const colorVal = e.target.value;
    sketchActive(e, colorVal);
});

const erase = document.querySelector('.erase');
erase.addEventListener('click', function(e){
    const colorVal = e.target.id;
    sketchActive(e, colorVal);
})