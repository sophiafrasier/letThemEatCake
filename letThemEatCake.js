function eat_cake(str) {
    var begin = "";
    var end = "";
    var last = "";
    if(str.length%2 == 0) {
        begin = str.substring(0, str.length/2);
        end = str.substring(str.length/2, str.length);
    }else{
        begin = str.substring(0, str.length/2+.5);
        end = str.substring(str.length/2+.5, str.length);
    }
    var a = 0;
    for(var i=0; i<end.length; i++) {
        if(end.substring(i, i+1) == begin.substring(0, 1)) {
            a = 0;
            for(var b=i; b<end.length; b++) {
                if(end.substring(b, b+1) == begin.substring(a, a+1)) {

                }else{
                    break;
                }
                a++;
                if(b == end.length-1) {
                    last = begin.substring(0, a);
                }
            }
        }
    }
    if(last == "") {
        return 1;
    }
    return str.length/last.length;
}

function tester() {
    document.getElementById("output").innerHTML += eat_cake("Everyone gets different amounts of cake with the same M&Ms.");
}