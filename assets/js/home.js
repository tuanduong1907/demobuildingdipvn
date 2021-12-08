/* ------------------------------------------------- */
// Render News

var newsListApi = 'https://619f38f31ac52a0017ba467c.mockapi.io/api/news'

function start() {
    getNewsList()
}

start()

Function
function getNewsList() {
    fetch(newsListApi)
        .then(function (response) {
            return response.json()
        })
        .then((res) => {
            renderNewsList(res)
        })
}

function renderNewsList(newsList) {
    var newsListBlock = document.querySelector('.container__news-list')
    var html = ''
    newsList.forEach(function (news) {
        return html += `<li class="container__news-item">
            <img src="${news.image}" class="container__news-img">
            <div class="container__news-info">
                <h3 class="container__news-name">${news.name}</h3>
                <p class="container__news-title">${news.title}</p>
                <div class="container__news-footer">
                <span class="container__news-date">
                <i class="container__news-date-icon fas fa-calendar-alt"></i>
                ${news.date}
                </span>
                <a href="" class="container__news-more">Xem thêm</a>
            </div>
            </div>
        </li>`
    })
    newsListBlock.innerHTML = html
}

// Chart Section

const ctx = document.getElementById('chart-item').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Biểu đồ cột tiêu thụ điện',
            data: [12, 19, 3, 5, 2, 3, 6 , 1, 4, 9, 4, 11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('chart-item-2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Biểu đồ cột tiêu thụ nước',
            data: [1, 3, 12, 6, 9, 11, 7, 8, 4, 5, 11, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



// Add Image Comment Section

function chartCount() {
    var countElement = document.querySelector('.container__comment-Content').value.length;
    document.querySelector('.container__comment-Content-count').innerHTML = countElement + '/500 (Kí tự tối đa)'
}

const imgInput = document.getElementById('image_input');
const uploadImgBtn = document.getElementById('upload-img-btn')

function UploadImgActive() {
    imgInput.click()
}
var uploaded_image;

image_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});


// News Slider Section 
$('.container__news-slider-list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next-icon'),
    prevArrow: $('.prev-icon'),

  });