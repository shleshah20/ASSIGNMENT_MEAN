function currentTime()
{
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear(); 
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    console.log(day + " : " + month + " : " + year);
    console.log("\n")
    console.log(hours + " : " + minutes + " : " + seconds);
    console.log("\n")
    
}

setInterval(() => {
    console.clear();
    currentTime();
}, 1000);