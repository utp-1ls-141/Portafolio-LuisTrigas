
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function con(){
    modal.style.display = "block";
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var res = a+b;
    var resu =document.getElementById("resu");
    var matr = document.getElementById("matr");
    resu.innerHTML = res;
    var mat = [];
     for(var i = 0 ; i < c; i++) {
        mat[i] = [];
        for(var j = 0; j < c; j++) {
            mat[i][j] = 3 * (Math.floor((Math.random()* 10) + 1 ));
            console.log(mat[i][j]);
            matr.innerHTML = mat
        }
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 