var btn = document.getElementsByClassName("play")[0]
var mymusic = document.getElementById("mymusic")
var txt = document.getElementById("txt");
var con = document.getElementsByClassName("content")[0]
var mark = true;

btn.onclick = function(){
    if(mark){
        this.className += " rotate"
        mymusic.play()
        mark = false
    }
    else {
        this.className = "play"
        mymusic.pause()
        mark = true    
        // con.style.top = 0 + 'px'
    }   
}

var lrc = txt.value
var lrcArr = lrc.split("[")
var html = ""
for (var i = 0; i < lrcArr.length; i ++ ){    
    var arr = lrcArr[i].split("]")
    var time = arr[0].split(".")
    var timer = time[0].split(":")
    var ms = timer[0] * 60 + timer[1] * 1
    var text = arr[1]
    if (text){
        html += "<p id=" + ms + ">" + text + "</p>"
    }
    
    con.innerHTML = html
}

var num = 0
var op = con.getElementsByTagName("p")
mymusic.addEventListener("timeupdate", function(){
    var curTime = parseInt(this.currentTime)
    if (document.getElementById(curTime)){
        for (var i = 0; i < op.length; i ++ ){
            op[i].style.cssText = "font-size: 15px;"
        }
        document.getElementById(curTime).style.cssText = "background: linear-gradient(-3deg,#eebd89 0%,#d13abd 100%);-webkit-background-clip: text;color: transparent;font-size: 20px;"
        if (op[1 + num].id == curTime){
            con.style.top = -24 * num + 'px'
            num ++
            // console.log(num);
        }
    }
})

mymusic.addEventListener("ended", function(){
    num = 0
    con.style.top = 0 + 'px'
})