var checkedtime;
var clickedtime;
var responsetime;

document.getElementById("box").onclick = function () {
    this.style.display = "none";
    clickedtime = Date.now();
    responsetime = (clickedtime - checkedtime) / 1000;
    document.getElementById("spanuk").innerHTML = responsetime;
    timer();
}



function timer() {
console.log("dev");

    var time = Math.random();
    time = time * 3000;
    setTimeout(function () {

        var shape = Math.random();
        if (shape > 0.5) {
            document.getElementById("box").style.borderRadius = "100px";
        } else {

            document.getElementById("box").style.borderRadius = "0px";

        }


        function randomcolor(){
            var digits='0123456789ABCDEF'.split('');
            var prepend="#";
            for(var i=0;i<6;i++){
                prepend+=digits[Math.round(Math.random()*15)];

            }
            return prepend;

        }

        var left=Math.random();
        left=left*100;


        var top=Math.random();
        top=top*100;

        document.getElementById("box").style.left=left+"%";
        document.getElementById("box").style.top=top+"%";
        document.getElementById("box").style.backgroundColor=randomcolor();
        document.getElementById("box").style.display = "block";

        checkedtime = Date.now();
    }, time);

}


timer();
