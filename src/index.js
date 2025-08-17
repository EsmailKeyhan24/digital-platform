const toggle=document.getElementById('toggle')
const navBarMenu=document.getElementById('navBarMenu')
toggle.addEventListener('click' , ()=>{
    navBarMenu.style.right=0
})

document.addEventListener('click' , (e)=>{
    if(!toggle.contains(e.target) && !navBarMenu.contains(e.target)){
        navBarMenu.style.right='-80%'
    }
})