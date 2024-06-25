const signBtn = document.querySelector('#sign')
const name = document.querySelector('.name')


signBtn.addEventListener('click', () => {
    if (signBtn.textContent === 'SignUp') {
        name.style.height = 'auto'
        signBtn.textContent = 'SignIn' 
    } else {
        name.style.height = '0px'
        signBtn.textContent = 'SignUp'
    }
})