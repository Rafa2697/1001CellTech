const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            // entry.target.classList.add('animate')
            entry.target.classList.add('animate-div')
        }else{
            entry.target.classList.remove('animate-div')
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
const myObserver3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
        }else{
            entry.target.classList.remove('animate')
        }
    })
})

const elements = document.querySelectorAll('.img-wraper')
const elementsRight = document.querySelectorAll('.image2')
const elementsLeft = document.querySelectorAll('.image')

elements.forEach((element) => myObserver.observe(element))
elementsRight.forEach((element) => myObserver2.observe(element))
elementsLeft.forEach((element) => myObserver3.observe(element))


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



