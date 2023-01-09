function TodoForm({$target, onSubmit}){
    const $form=document.createElement('form')
    $target.appendChild($form)

    let isInit=false

    this.render=()=>{
        $form.innerHTML=`
            <input type="text" name="todo" />
            <button>Add</button>
        `
        // 제출 시 새로고침 방지
        if(!isInit){
            $form.addEventListener('submit',e=>{
                e.preventDefault()
                // console.log("hello")
                const $todo=$form.querySelector('input[name=todo]')
                const text=$todo.value
                
                if(text.length>1){
                    $todo.value=''
                    // console.log(text)
                    onSubmit(text)
                }

                
            })
            isInit=true
        }
        
    }
    this.render()
}