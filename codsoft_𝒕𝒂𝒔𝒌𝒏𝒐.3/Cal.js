function functionequal() 
{
    var x = document.getElementById("disp").value;
    if(x=='') {
        document.getElementById('disp').value = '';
    }else{
        var y = eval(x);
        document.getElementById('disp').value = y;
    }
}

function functionsign()
{
    var z = document.getElementById("disp").value;
    var a = z.at(0);
    if(a == '-') {
        var b = z.toString().slice(1);
        document.getElementById('disp').value = b;
    }else{
        var n = '-';
        document.getElementById('disp').value = n + z;
    }
}