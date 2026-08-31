bar1 = document.getElementById('bar1')
bar2 = document.getElementById('bar2')
side_bar = document.getElementById('side_bar')
side_bar2 = document.getElementById('side_bar2')
tasks = document.getElementById('tasks')
task_text = document.getElementById('task_text')
add = document.getElementById('add')
task_left = document.getElementById('task_left')
befor = document.getElementById('befor')
d3 = document.getElementById('d3')
list_bar = document.getElementById('list_bar')
list_bar2 = document.getElementById('list_bar2')
trash = document.querySelectorAll('.trash')
pencil = document.querySelectorAll('.pencil')
view_mode_icon = document.getElementById('view_mode')
main = document.getElementById('main')
h2 = document.getElementsByTagName('h2')
input = document.getElementsByTagName('input')
d2p = document.getElementById('d2p')
left_bar = document.getElementById('left_bar')
mt1 = document.getElementById('mt1')
mt2 = document.getElementById('mt2')
gear = document.getElementById('gear')
gear2 = document.getElementById('gear2')
sb2p = document.getElementsByClassName('sb2p')
all = document.getElementById('all')
active = document.getElementById('active')
completed = document.getElementById('completed')
count = 0



show_menu = () => {
    side_bar.style.display = 'none'
    side_bar2.style.display = 'block'
}

close_menu = () => {
    side_bar2.style.display = 'none'
    side_bar.style.display = 'block'
}

add_task = () => {
    if (task_text.value === '') {
        return
    }
    else {
        tasks.innerHTML += `
            <div class='div_count'>
                <div id="text">
                    <input type="checkbox" class='inp'>
                    <p class='p'>${task_text.value}</p>
                </div>
                <div id="imgs">
                    <img src="./imgs/pencil-solid-full.svg" class='pencil'>
                    <img src="./imgs/trash-can-regular-full.svg" class="trash">
                </div>
            </div>
        `
        
        change_task_style()
        
        count++
        task_left.textContent = `${count} tasks left`
    }
}

update_tasks = () => {
    let inputs = document.querySelectorAll('.inp')
    let paragraphs = document.querySelectorAll('.p')

    count = 0

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            paragraphs[i].style.textDecoration = 'line-through'
        }
        else {
            paragraphs[i].style.textDecoration = 'none'
            count++
        }
    }

    task_left.textContent = `${count} tasks left`
}

show_task = () => {
    befor.style.display = 'none'
    d3.style.display = 'block'
}

remove_task = (trash) => {
    let task = trash.closest('#imgs').parentElement
    task.remove()

    count--
    if (count < 0) {
        count = 0
        task_left.textContent = `${count} tasks left`
    }else{
        task_left.textContent = `${count} tasks left`
    }
}

edit_task = (pencil) => {
    let task = pencil.closest('#imgs').parentElement
    let paragraph = task.querySelector('.p')
    let new_task = prompt('enter new task')

    if (new_task !== null && new_task !== '') {
        paragraph.textContent = new_task
    }
}

view_mode = () => {
    if (view_mode_icon.src.includes('moon-regular-full.svg')) {
        view_mode_icon.src = './imgs/sun-regular-full.svg'
        main.style.backgroundColor = '#101828'
        left_bar.style.backgroundColor = '#101828'
        side_bar.style.backgroundColor = '#1E2939'
        side_bar2.style.backgroundColor = '#1E2939'
        h2[0].style.color = 'white'
        input[0].style.backgroundColor = '#364153'
        input[0].style.boxShadow = 'none'
        input[0].style.color = '#A7A7A7'
        add.style.backgroundColor = '#4A5565'
        d2p.style.color = 'white'
        bar1.src = './imgs/bars-solid-full-white.svg'
        bar2.src = './imgs/bars-solid-full-white.svg'        
        mt1.style.backgroundColor = '#F3F4F6'
        mt2.style.backgroundColor = '#F3F4F6'
        gear.src = 'imgs/gear-solid-full-white.svg'
        gear2.src = 'imgs/gear-solid-full-white.svg'
        side_bar.style.borderRight = 'none'
        side_bar2.style.borderRight = 'none'
        sb2p[0].style.color = 'white'
        sb2p[1].style.color = '#7A8391'
        sb2p[2].style.color = 'white'

    }else if(view_mode_icon.src.includes('sun-regular-full.svg')){
        view_mode_icon.src = './imgs/moon-regular-full.svg'
        main.style.backgroundColor = '#F3F4F6'
        left_bar.style.backgroundColor = '#F3F4F6'
        side_bar.style.backgroundColor = '#FFFFFF'
        side_bar2.style.backgroundColor = '#FFFFFF'
        h2[0].style.color = '#333333'
        input[0].style.backgroundColor = '#FFFFFF'
        input[0].style.boxShadow = '-1px 1px 5px rgba(128, 128, 128, 0.6)'
        input[0].style.color = 'black'
        add.style.backgroundColor = 'black'
        d2p.style.color = 'black'
        bar1.src = './imgs/bars-solid-full.svg'
        bar2.src = './imgs/bars-solid-full.svg'
        gear.src = './imgs/gear-solid-full.svg'
        gear2.src = './imgs/gear-solid-full.svg'
        side_bar.style.borderRight = '2px solid rgba(128, 128, 128, 0.4)'
        side_bar2.style.borderRight = '2px solid rgba(128, 128, 128, 0.5)'
        sb2p[0].style.color = 'black'
        sb2p[1].style.color = '#6A7282'
        sb2p[2].style.color = 'black'
    }
}

show_all = () => {
    let tasks = document.querySelectorAll('.div_count')

    tasks.forEach(task => {
        task.style.display = 'flex'
    })
}

show_active = () => {
    let tasks = document.querySelectorAll('.div_count')

    tasks.forEach(task => {
        let checkbox = task.querySelector('.inp')

        if (checkbox.checked) {
            task.style.display = 'none'
        } else {
            task.style.display = 'flex'
        }
    })
}

show_completed = () => {
    let tasks = document.querySelectorAll('.div_count')

    tasks.forEach(task => {
        let checkbox = task.querySelector('.inp')

        if (checkbox.checked) {
            task.style.display = 'flex'
        } else {
            task.style.display = 'none'
        }
    })
}

change_task_style = () => {
    let div_count = document.querySelectorAll('.div_count')
    let p = document.querySelectorAll('.p')
    let inp = document.querySelectorAll('.inp')
    let trash = document.querySelectorAll('.trash')
    let pencil = document.querySelectorAll('.pencil')
    let btn = document.querySelectorAll('.btn')

    if (view_mode_icon.src.includes('moon-regular-full.svg')) {
        div_count.forEach(i => {
            i.style.backgroundColor = 'white'
        })
        p.forEach(i => {
            i.style.color = 'black'
        })
        inp.forEach(i => {
            i.style.accentColor = 'white'
        })
        trash.forEach(i => {
            i.src = './imgs/trash-can-regular-full.svg'
        })
        pencil.forEach(i => {
            i.src = './imgs/pencil-solid-full.svg'
        })
        btn.forEach(i => {
            i.style.backgroundColor = '#F3F4F6'
        });
        task_left.style.color = '#6A7282'
    }
    else if (view_mode_icon.src.includes('sun-regular-full.svg')) {
        div_count.forEach(i => {
            i.style.backgroundColor = '#1E2939'
        })
        p.forEach(i => {
            i.style.color = 'white'
        })
        inp.forEach(i => {
            i.style.accentColor = 'black'
        })
        trash.forEach(i => {
            i.src = './imgs/trash-solid-full-white.svg'
        })
        pencil.forEach(i => {
            i.src = './imgs/pencil-solid-full-white.svg'
        })
        btn.forEach(i => {
            i.style.backgroundColor = '#101828'
        });
        task_left.style.color = '#6A7282'
    }
}

add.addEventListener('click', function(){
    add_task()
    show_task()
})

tasks.addEventListener('change', function(){
    update_tasks()
})

tasks.addEventListener('click', function(event){
    if (event.target.classList.contains('trash')) {
        remove_task(event.target)
    }

    if (event.target.classList.contains('pencil')) {
        edit_task(event.target)
    }
})

bar1.addEventListener('click', function(){
    show_menu()
})

bar2.addEventListener('click', function(){
    close_menu()
})

mt1.addEventListener('click', function(){
    show_task()
})

mt2.addEventListener('click', function(){
    show_task()
})

view_mode_icon.addEventListener('click',function() {
    view_mode()
    change_task_style()
})

all.addEventListener('click',function(){
    show_all()
})

active.addEventListener('click',function(){
    show_active()
})

completed.addEventListener('click',function(){
    show_completed()
})