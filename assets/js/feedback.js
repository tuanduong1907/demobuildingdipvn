var feedbackApi = 'https://61b15bc23c954f001722a8d2.mockapi.io/api/feedbacks'

function start() {
    getDataFeedBack(renderDataFeedBack)

    handleCreateFeedBack()
}
start()

function resestInput() {
    document.querySelector('input[name="name"]').value = ''
    document.querySelector('textarea[name="content"]').value = ''
}

function getDataFeedBack(callback) {
    fetch(feedbackApi)
        .then(res => res.json())
        .then(callback)
}

function CreateFeedBack(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(feedbackApi, options)
        .then(res=> res.json())
        .then(callback)
}

function renderDataFeedBack(dataFeedBacks) {
    var html = ''
    dataFeedBacks.forEach((dataFeedBack)=> {
        return html +=`<div class="container__feeback-box-body-item">
            <div class="container__feeback-body-item-chat-content">
                <h2 class="container__feeback-box-body-item-title">${dataFeedBack.status}</h2>
                <p class="container__feeback-box-body-item-content">${dataFeedBack.content}</p>
            </div> 
            <img src="./assets/images/user-feedback.png" class="container__feeback-box-body-img">
        </div>`
    })
    document.querySelector('.container__feeback-box-body').innerHTML = html
}

function handleCreateFeedBack() {
    var createBtn = document.querySelector('#js-btn-create')
    createBtn.onclick = function() {
        var tittleFeedBack = document.querySelector('input[name="name"]').value
        var contentFeedBack = document.querySelector('textarea[name="content"]').value

        var data = {
            status: tittleFeedBack,
            content: contentFeedBack
        }
        CreateFeedBack(data, ()=> {
            getDataFeedBack(renderDataFeedBack)
            resestInput()
        })
    }
}