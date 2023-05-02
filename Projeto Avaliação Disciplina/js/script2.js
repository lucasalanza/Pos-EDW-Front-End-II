var olaMundo = function(msg) {
    var padrao = "oi";
    return function() {
        console.log(padrao + " " + msg);
    };
};
var teste = olaMundo("pessoal");
teste(); //oi pessoal
