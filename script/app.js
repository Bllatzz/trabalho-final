/*passos*/
const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach( (entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('aparecer')
        }else{
            entry.target.classList.remove('aparecer')
        }
    })
})

const elements = document.querySelectorAll('.passos')

elements.forEach((element) => myObserver.observe(element))

