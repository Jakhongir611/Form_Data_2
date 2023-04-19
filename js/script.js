let doc = document
let form = doc.querySelector('form')
let formIn = doc.querySelector('#form_in')
let form_in = doc.querySelector('.in')
let form_up = doc.querySelector('.up')

let sign_up = doc.querySelector('.sign_up')
let sign_in = doc.querySelector('.sign_in')
let x_1 = doc.querySelector('.btn_x_1')
let x_2 = doc.querySelector('.btn_x_2')
let btn_sign_in = doc.querySelector('.btn_sign_in')
let btn_sign_up = doc.querySelector('.btn_sign_up')
let main_page = doc.querySelector('.main_page')
let btn_save = doc.querySelector('.btn_save')

let imya = doc.querySelector('#txt_1')
let familiya = doc.querySelector('#txt_2')
let pass = doc.querySelector('#pass')
let email = doc.querySelector('#email')
let file = doc.querySelector('#file')
let data = doc.querySelector('#data')
let check = doc.querySelector('#check')
let photo = doc.querySelector('.photo')

x_1.addEventListener("click", (event) => {
    event.preventDefault()
    sign_in.classList.add('active')
    main_page.classList.remove('active')
})
x_2.addEventListener("click", (event) => {
    event.preventDefault()
    sign_up.classList.add('active')
    main_page.classList.remove('active')
})

btn_sign_in.addEventListener("click", (event) => {
    event.preventDefault()
    sign_in.classList.remove('active')
    main_page.classList.add('active')
})
btn_sign_up.addEventListener("click", (event) => {
    event.preventDefault()
    sign_up.classList.remove('active')
    main_page.classList.add('active')
})

form_up.addEventListener('submit', (event) => {
    event.preventDefault()

    let user = {
        id: Math.floor(Math.random() * 100000000),
        name: imya.value,
        surname: familiya.value,
        password: pass.value,
        email: email.value,
        file: file.getAttribute('src'),
    }
    console.log(user);

    fetch('http://localhost:4023/user', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(user)
    })

    let json = JSON.stringify(user)
    console.log(json);

    imya.value = ""
    familiya.value = ""
    pass.value = ""
    email.value = ""
    file.value = ""
    photo.src = "./img/account.png"
    check.checked = false




})

file.addEventListener('change', (event) => {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = () => {
        photo.src = reader.result
    }
    reader.readAsDataURL(file)
})







let email_in = doc.querySelector('#email_in')
let password_in = doc.querySelector('#password_in')
let btn_in = doc.querySelector('#btn_in')


formIn.addEventListener("submit", (event) => {
    event.preventDefault()
    fetch('http://localhost:4023/user',)
        .then(response => response.json())
        .then(data => {
            for (let g of data) {
                if (email_in.value === g.email && password_in.value === g.password) {
                    alert('Вы успешно вошли')
                } else{
                    alert('Неверный логин или пароль')
                }
            }
        })
})