const differentDiv = document.getElementById('diff')
const sameDiv = document.getElementById('same')
const differentForm = document.getElementById('differentForm')


differentForm.style.height = 0
differentForm.style.overflow = 'hidden'

differentDiv.addEventListener('click', () => {
    differentForm.style.height = 'auto'
})

sameDiv.addEventListener('click', () => {
    differentForm.style.height = 0
})