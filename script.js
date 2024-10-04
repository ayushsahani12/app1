const panels =document.querySelectorAll('.panel')

console.log(panels)
panels.forEach(panel =>{
    panel.addEventListener('click', () => {
        removeActiveClasses()
        console.log("script loaded")
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
                panel.classList.remove('active')
    })
}
console.log("script loaded")