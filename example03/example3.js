//버튼을 3개 만든다.
// alert('Hello');

// const $button1=document.createElement('button');
// $button1.textContent='Button1';

// const $button2=document.createElement('button');
// $button2.textContent='Button2';

// const $button3=document.createElement('button');
// $button3.textContent='Button3';

// const $main=document.querySelector('#app')

// $main.appendChild($button1)
// $main.appendChild($button2)
// $main.appendChild($button3)

// const toggleButton=($button)=>{
//     if($button.style.textDecoration==''){
//         // console.log($button.style.textDecoration);
//         $button.style.textDecoration="line-through"
//         // console.log($button.style.textDecoration);
//     }else{
//         // console.log($button.style.textDecoration);
//         $button.style.textDecoration=""
//         // console.log($button.style.textDecoration);
//     }
// }

// document.querySelectorAll('button').forEach($button=>{
    
//     $button.addEventListener('click',(e)=>{
//         const {target}=e
//         toggleButton(target)
//         // if(target.style.textDecoration=="line-through"){
//         //     // console.log(target.style.textDecoration);
//         //     target.style.textDecoration="none";
            
//         // }else{
//         //     // console.log(target.style.textDecoration);
//         //     target.style.textDecoration="line-through";
//         //     // console.log(target.style.textDecoration);
            
//         // }
//     })
// })

// $button1.addEventListener('click', ()=>{
//     // console.log("hello");
//     if($button1.style.textDecoration=='line-through'){
        
//         $button1.style.textDecoration='none'
//     }else{
//         // console.log("line-through");    
//         $button1.style.textDecoration='line-through'
//     }
    
// })

function TimerButton({
    $target,
    text,
    timer=3000,
}){
    const button=new ToggleButton({$target, text, onClick: ()=>{
        setTimeout(()=>{
            button.setState({
                ...(button.state),
                toggled: !button.state.toggled
            })
        },timer)
    }})
}


function ToggleButton({
    $target, 
    text,
    onClick
}){
    const $button=document.createElement('button');
    $target.appendChild($button)
    // let clickCount=0
    this.state={
        clickCount: 0,
        toggled: false,
    }
    this.setState=(nextState)=>{
        this.state=nextState
        this.render();
    }

    this.render=()=>{
        $button.textContent=text
        $button.style.textDecoration=this.state.toggled ? 'line-through': ''
    }

    $button.addEventListener('click',()=>{
        this.setState({
            clickCount: this.state.clickCount+1,
            toggled: !this.state.toggled
        })
        // ++clickCount;
        // if($button.style.textDecoration==''){
        //     $button.style.textDecoration='line-through';
        // }else{
        //     $button.style.textDecoration='';
        // }
        // if(clickCount%3==0){
        //     alert('3th click')
        // }
        if(onClick){
            onClick(this.state.clickCount)
        }
    })
    
    this.render()
}
function ButtonGroup({
    $target,
    buttons,
}){
    const $group=document.createElement('div')
    let isInit=false
    
    this.render=()=>{
        console.log("hello");
        if(!isInit){
            
            buttons.forEach(({type,...props})=>{
                if(type=='toggle'){
                    new ToggleButton({$target: $group, ...props})
                }else if(type=='timer'){
                    new TimerButton({$target: $group, ...props})
                }
            })
            $target.appendChild($group)
            isInit=true
        }
    }
    this.render()
    
}
const $app=document.querySelector('#app')
new ButtonGroup({
    $target: $app,
    buttons: [
        {
            type: 'toggle',
            text: '토글버튼',
        },
        {
            type: 'toggle',
            text: '토글 버튼',
        },
        {
            type: 'timer',
            text: 'timer',
            timer: 1000,
        }
    ]
})
// new ToggleButton({
//     $target: $app,
//     text: 'Button1',
//     onClick: (clickCount) =>{
//         if(clickCount%3==0){
//             alert("3th click")
//         }
//     }
// })
// new ToggleButton({
//     $target: $app,
//     text: 'Button2'
// })
// new ToggleButton({
//     $target: $app,
//     text: 'Button3'
// })
// new TimerButton({
//     $target: $app,
//     text: '3초 뒤에 자동으로!'

// })
// new TimerButton({
//     $target: $app,
//     text: '5초 뒤에 자동으로!',
//     timer: 5000

// })