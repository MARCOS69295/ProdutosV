// Suponha que essa seja a sua API
const API_URL = 'http://localhost:3000/api/products';

// Função para criar um novo produto
function createProduct(name, price) {
    // Faça uma solicitação POST para a API aqui
    // O código específico depende do que a sua API espera e de como você está fazendo solicitações HTTP
}

// Função para obter todos os produtos
function getProducts() {
    // Faça uma solicitação GET para a API aqui
    // O código específico depende do que a sua API retorna e de como você está fazendo solicitações HTTP
}

// Função para atualizar um produto
function updateProduct(id, name, price) {
    // Faça uma solicitação PUT para a API aqui
    // O código específico depende do que a sua API espera e de como você está fazendo solicitações HTTP
}

// Função para deletar um produto
function deleteProduct(id) {
    // Faça uma solicitação DELETE para a API aqui
    // O código específico depende do que a sua API espera e de como você está fazendo solicitações HTTP
}

// Função para exibir produtos na tabela
function displayProducts(products) {
    const tableBody = document.getElementById('product-table').querySelector('tbody');
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.innerText = product.name;

        const priceCell = document.createElement('td');
        priceCell.innerText = product.price;

        const editCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.innerText = 'Editar';
        editButton.addEventListener('click', () => {
            // Preencha o formulário com os detalhes do produto e permita que o usuário o atualize
            document.getElementById('product-name').value = product.name;
            document.getElementById('product-price').value = product.price;

            document.getElementById('update-product').style.display = 'inline-block';
            document.getElementById('add-product').style.display = 'none';
        });
        editCell.appendChild(editButton);

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Excluir';
        deleteButton.addEventListener('click', () => {
            // Deletar o produto
            deleteProduct(product.id);

            // Recarregar os produtos
            getProducts();
        });
        deleteCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(editCell);
        row.appendChild(deleteCell);

        tableBody.appendChild(row);
    });
}

// Quando a página carrega, obter e exibir os produtos
getProducts();

// Quando o botão "Adicionar Produto" é clicado, criar um novo produto
document.getElementById('add-product').addEventListener('click', () => {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;

    createProduct(name, price);

    // Limpar o formulário e recarregar os produtos
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';

    getProducts();
});

// Quando o botão "Atualizar Produto" é clicado, atualizar o produto
document.getElementById('
