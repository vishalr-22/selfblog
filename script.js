var x = document.getElementById("addblog")
var y = document.getElementById("enterblog")
x.style.display = 'none';
y.innerHTML = "Write Blog"
function toggle() {
    if(x.style.display == 'block'){
        x.style.display = 'none'
        y.innerHTML = "Write Blog"
    }
    else{
        x.style.display = 'block'
        y.innerHTML = "Hide Blog"
    }
}