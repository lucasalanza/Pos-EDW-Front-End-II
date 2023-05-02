const botaoIniciar = document.getElementById('inicio');
var qtdCliques = 0;
window.onload = () => {
    alert("Seja bemvindo ao sensacional jogo do momento!");
}

window.onunload = ()=>{
    
}


botaoIniciar.onclick = () =>{ 
    const qtdSegundos = document.getElementById("tempo").value;
    qtdCliques=0;
    document.onclick=() => {
        qtdCliques=qtdCliques+1;
    };
    setTimeout(() => {
        document.onclick=null;
        document.write(`Você clicou ${qtdCliques} vezes!`);
    }, qtdSegundos *1000);
};
