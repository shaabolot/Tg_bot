//? https://api.telegram.org/bot6185587864:AAH43laaTswBS64CacbDhGorMUHLETweiRU/getUpdates

// let TOKEN = '6185587864:AAH43laaTswBS64CacbDhGorMUHLETweiRU'
// let CHAT_ID = '1467456757' 
// let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

// let success = document.getElementById("success")

// document.getElementById("tg").addEventListener('submit', function(e) {
//     e.preventDefault()
//     let = message = `<b>Заявка с сайта</b>\n`
//     message += `<b>Отправитель :</b> ${this.name.value}\n`
//     message += `<b>Номер :</b> ${this.number.value}\n`
//     message += `<b>Почта :</b> ${this.email.value}\n`
//     axios.post(URL_API, {
//         chat_id: CHAT_ID,
//         parse_mode: "html",
//         text: message
//     }).then((res) => {
//         this.name.value = " "
//         this.number.value = " "
//         this.email.value = " "
//         success.innerHTML = "Сообшения отправленно !"
//         success.style.display = 'block'
//         setTimeout(() => {
//         success.style.display = 'none'
//         },3000)
//     }).catch((err) => {
//         console.log(err)
//     }).finally(() => {
//         console.log("Goooooooooood")
//     })
// })



let TOKEN = '6185587864:AAH43laaTswBS64CacbDhGorMUHLETweiRU'
let CHAT_ID = '1467456757' 
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`

let tg = document.getElementById("tg")
let success = document.getElementById("success")



tg.addEventListener("submit", function(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append("chat_id", CHAT_ID)
    formData.append("document",this.document.files[0])
    axios.post(URL_API,formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    }).then((res) => {
        this.document.value = ''
        success.innerHTML = "Сообшения отправленно !"
        success.style.display = 'block'
        setTimeout(() => {
            success.style.display = 'none'
        },2000)
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        console.log('good')
    })
})