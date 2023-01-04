//버튼을 3개 만든다.
// alert('Hello');
const $button1=document.createElement('button');
$button1.textContent='Button1';

const $button2=document.createElement('button');
$button2.textContent='Button2';

const $button3=document.createElement('button');
$button3.textContent='Button3';

const $main=document.querySelector('#app')

$main.appendChild($button1)
$main.appendChild($button2)
$main.appendChild($button3)

document.querySelectorAll('button').forEach($button=>{
    $button.addEventListener('click',()=>{
        if($button.style.text)
    })
})

$button1.addEventListener('click', ()=>{
    // console.log("hello");
    if($button1.style.textDecoration=='line-through'){
        
        $button1.style.textDecoration='none'
    }else{
        // console.log("line-through");    
        $button1.style.textDecoration='line-through'
    }
    
})