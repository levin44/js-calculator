function go(){
    let x =+ document.getElementById("inputOne").value;
    let y =+ document.getElementById("inputTwo").value;
    let operation = document.getElementById("operation").value;
    if (operation == "+") {
        document.getElementById('result').innerText = x+y;
    }else if(operation == "-"){
        document.getElementById('result').innerText = x-y;
    }else if(operation == "*"){
        document.getElementById('result').innerText = x*y;
    }else if(operation == "/"){
        document.getElementById('result').innerText = x/y;
    }
}