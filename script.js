var month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

function updateTime() {
    const date = new Date()
    let hrs = date.getHours()
    if(hrs > 12){
        hrs = hrs - 12
        document.getElementById('apm').innerHTML= 'P M'
    }
    if(hrs >= 12){
        document.getElementById('apm').innerHTML= 'P M'
    }
    
    document.getElementById('hrs').innerHTML =  hrs + ' :'
    document.getElementById('min').innerHTML = date.getMinutes()+ ' :'
    document.getElementById('sec').innerHTML = date.getSeconds() + ' :'



    document.getElementById('dat').innerHTML = date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear()
}
setInterval(updateTime, 1000)

updateTime()