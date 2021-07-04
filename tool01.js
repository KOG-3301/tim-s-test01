const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContest=[]

addedBtn.addEventListener('click',function(){
    listContest.unshift({
        content:content.value,
        date:date.value,
        time:time.value
    })
    //渲染頁面的List
    let htmlStr=''
    listContest.forEach(function(item){
        htmlStr=htmlStr+`
        <div class="item">
            <div>
                <p>內容:${item.content}</p>
                <p>時間:${item.date} ${item.time}</p>
                <hr>
            </div>
        </div>
        `
    })
    list.innerHTML=htmlStr
    
})

deletedBtn.addEventListener('click',function(){
    listContest.shift()

    //渲染頁面的List
    let htmlStr=''
    listContest.forEach(function(item){
        htmlStr=htmlStr+`
        <div class="item">
            <div>
                <p>內容:${item.content}</p>
                <p>時間:${item.date} ${item.time}</p>
                <hr>
            </div>
        </div>
        `
    })
    list.innerHTML=htmlStr

})
