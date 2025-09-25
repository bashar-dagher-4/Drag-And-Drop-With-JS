const btn = document.querySelector('button')
const inputValue = document.querySelector('input')
const boxes = document.querySelectorAll('.box')
let drag = null;

btn.addEventListener('click' , (e)=>{
    e.preventDefault()
    const valueText = inputValue.value;
    if(valueText.trim() !== '' ){
        let item = document.createElement('div')
        item.textContent = valueText;
        item.classList.add('item')
        item.setAttribute('draggable' , 'true')
        document.querySelector('.items').appendChild(item)
        inputValue.value = ''
    }  
    dragItem()
})

function dragItem(){
    let items = document.querySelectorAll('.item')
    
    items.forEach(item=>{
        item.addEventListener('dragstart' , ()=>{
            drag = item
            item.style.opacity = '0.5'
        })
        item.addEventListener('dragend' , ()=>{
            drag = null;
            item.style.opacity = '1';
        })

        boxes.forEach(box=>{
            box.addEventListener('dragover' , (e)=>{
                e.preventDefault()
                box.style.background = '#090';
                box.style.color = '#fff';
            })
            box.addEventListener('dragleave' , ()=>{
                box.style.background = '#fff';
                box.style.color = '#000';
            })
            box.addEventListener('drop' , ()=>{
                box.querySelector('.items').append(drag)
                box.style.background = '#fff';
                box.style.color = '#000';
            })
        })
    })

   
}