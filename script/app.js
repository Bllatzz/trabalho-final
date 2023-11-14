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


document.addEventListener('DOMContentLoaded', function () {
    var animatedElement = document.querySelector('#carro');

    // Adiciona um ouvinte de evento para o scroll
    window.addEventListener('scroll', function () {
        // Obtém a posição vertical do scroll
        var scrollPosition = window.scrollY;

        // Ativa a classe 'active' quando o elemento estiver visível
        if (scrollPosition > 200) { // ajuste conforme necessário
            animatedElement.classList.add('pesquise');
        }
         if(scrollPosition >= 900){
            animatedElement.classList.remove('pesquise')
            animatedElement.classList.add('metas');
        }
         if(scrollPosition >= 1400){
            animatedElement.classList.remove('metas')
            animatedElement.classList.add('orcamento');
        }
         if(scrollPosition >= 1900){
            animatedElement.classList.remove('orcamento')
            animatedElement.classList.add('poupe');
        }
         if(scrollPosition >= 2500){
            animatedElement.classList.remove('poupe')
            animatedElement.classList.add('dividas');
        }
        console.log(scrollPosition)
    });
});
