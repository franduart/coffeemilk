const menu = document.getElementById('menu');
const cart = document.getElementById('cart');
const modal = document.getElementById('modal');
const cartItensContainer = document.getElementById('cartItens');
const totalcart = document.getElementById('total');
const finalizarcart = document.getElementById('finalizar');
const fecharModal = document.getElementById('fechar');
const cartCounter = document.getElementById('cartCounter');
const endereco = document.getElementById('endereco');
const enderecoVazio = document.getElementById('enderecoVazio')
const btnCart = document.getElementById('btnCart');


let listaCart = [];

//abrir modal
cart.addEventListener('click', function(event){
    modal.style.display = "flex";
    updateModal()
})

menu.addEventListener('click', function(event){
    if(event.target === menu){
        modal.style.display = "none";
    }
}
)

fecharModal.addEventListener('click', function(){
    modal.style.display = "none";
})

//add no carrinho

menu.addEventListener('click', function(event){
  let parentButton = event.target.closest("#btnCart");

  if(parentButton){
    const name = parentButton.getAttribute('data-name');
    const price = parseFloat(parentButton.getAttribute('data-price'));

    addToCart(name, price);
  }
})

function addToCart(name, price){
   
    const existingItem = listaCart.find(item => item.name === name)
    if(existingItem){
        existingItem.quantity += 1;
    }else{
        listaCart.push({
        name,
        price,
        quantity: 1,
    })
    }
    updateModal();

}

function updateModal(){
   modal.innerHTML = "";
   let total = 0;

   listaCart.forEach(item => {
    const cartItemElement = document.createElement("div");

    cartItemElement.innerHTML = `
    <div>
    <div>
    <i class="fa-solid fa-cart-plus"></i>
    <p>${item.name}</p>
    <p>Quantidade: ${item.quantity}</p>
    <p>Valor: R$${item.price.toFixed(2)}</p>

    <div>
    <button style="border: none; margin-rigth: 10px; background-color: red; box-shadow: 0 0 10px #000; padding: 5px; color: #fff; font-size: 1rem; border-radius: 5px; margin-top: 10px;">Excluir do carrinho</button>
    <button style="border: none; background-color: green; box-shadow: 0 0 10px #000; padding: 5px; color: #fff; font-size: 1rem; border-radius: 5px; margin-top: 10px;">Finalizar Pedido</button>
    </div>
    </div/>
    </div>
    `

    modal.appendChild(cartItemElement);
     
   })
}