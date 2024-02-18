const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
        }else{
            entry.target.classList.remove('animate')
        }
    })
})
const myObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate2')
        }else{
            entry.target.classList.remove('animate2')
        }
    })
})

const elements = document.querySelectorAll('.image')
const elementsRight = document.querySelectorAll('.image2')

elements.forEach((element) => myObserver.observe(element))
elementsRight.forEach((element) => myObserver2.observe(element))


// efeito do botão nav



   let navList = document.querySelector('.nav_list');
    document.querySelector('.bi-list').addEventListener('click', () => {
        if (navList.style.display === 'none') {
            navList.style.display = 'flex';
        } else {
            navList.style.display = 'none';
        }
        
        console.info(navList)
    })



