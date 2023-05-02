window.onload=obterProdutos;

function obterProdutos(){
    fetch('https://fakestoreapi.com/products',{method:'GET'})
    .then((resposta) => {
        return resposta.json();
    }).then((produtos)=>{
        let areaProdutos = document.getElementById('listaProdutos');
        for(let produto of produtos){
            let card = document.createElement('div');
            card.className="card";
            card.style.width="14rem";
            card.innerHTML= `
                <img src="${produto.image}" class="card-img-top" alt="foto do produto">
                <div class="card-body">
                    <h5 class="card-title">${produto.title}</h5>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#produto${produto.id}" aria-expanded="false" aria-controls="collapseExample">
                        Descrição
                    </button>
                    <div class="collapse" id="produto${produto.id}">
                        <div class="card card-body">
                            ${produto.description}
                        </div>
                    </div>
                  <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            `
            areaProdutos.appendChild(card);
        }
    });
}