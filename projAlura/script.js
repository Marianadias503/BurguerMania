// script.js
const inputBusca = document.getElementById('busca');
const listaProdutos = document.getElementById('produtos');
const mensagemErro = document.createElement('p'); // Cria um elemento para a mensagem de erro

const produtos = [
    { nome: 'Cheeseburger Clássico', preco: 29.99, imagem: './food-1.jpg' },
    { nome: 'Bacon Burger Supremo', preco: 34.99, imagem: './food-2.jpg' },
    { nome: 'Burger Gourmet da casa', preco: 39.99, imagem: './food-3.jpg' },
    { nome: 'Double Bacon Cheeseburger', preco: 49.99, imagem: './food-4.jpg' },
    { nome: 'Burger com Cebola Caramelizada', preco: 32.99, imagem: './food-5.jpg' },
    { nome: 'Burger BBQ com Queijo Cheddar', preco: 37.99, imagem: './food-6.jpg' },
    { nome: 'Hambúrguer de Costela', preco: 35.99, imagem: './food-7.jpg' },
    { nome: 'Hambúrguer com Queijo Suíço e Presunto', preco: 34.99, imagem: './food-8.jpg' },
    { nome: 'Double Burger com Queijo Prato e Alface Crocante', preco: 32.99, imagem: './food-9.jpg' },
    { nome: 'Hambúrguer de Porco com Molho Agridoce', preco: 36.99, imagem: './food-10.jpg' },
    { nome: 'Hambúrguer com Queijo Cheddar e Anéis de Cebola', preco: 34.99, imagem: './food-11.jpg' },
    { nome: 'Burger com Queijo Catupiry e Bacon', preco: 39.99, imagem: './food-12.jpg' },
];

mensagemErro.textContent = 'Nenhum produto encontrado';
mensagemErro.style.color = 'red';
mensagemErro.style.textAlign = 'center';
mensagemErro.style.display = 'none'; // Inicialmente oculta a mensagem

function renderProdutos(produtos) {
    listaProdutos.innerHTML = '';
    if (produtos.length === 0) {
        listaProdutos.appendChild(mensagemErro); // Adiciona a mensagem de erro se nenhum produto for encontrado
        mensagemErro.style.display = 'block'; // Exibe a mensagem de erro
    } else {
        mensagemErro.style.display = 'none'; // Oculta a mensagem de erro se produtos forem encontrados
        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            const img = document.createElement('img');
            img.src = produto.imagem;
            img.alt = produto.nome;
            
            const nome = document.createElement('h3');
            nome.textContent = produto.nome;
            
            const preco = document.createElement('p');
            preco.textContent = `R$ ${produto.preco.toFixed(2)}`;
            
            card.appendChild(img);
            card.appendChild(nome);
            card.appendChild(preco);
            
            listaProdutos.appendChild(card);
        });
    }
}

inputBusca.addEventListener('input', () => {
    const termoBusca = inputBusca.value.toLowerCase();
    const produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termoBusca)
    );
    renderProdutos(produtosFiltrados);
});

// Renderiza todos os produtos na inicialização
renderProdutos(produtos);
