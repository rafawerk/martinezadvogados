// Função para salvar uma postagem
function savePost() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const image = document.getElementById('postImage').files[0];
    const link = document.getElementById('postLink').value;
    const imageCaption = document.getElementById('postImageCaption').value;

    if (title && content) {
        const postList = document.getElementById('postList');
        const postItem = document.createElement('div');
        postItem.className = 'post-item';

        let imageHTML = '';
        if (image) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageHTML = `<img src="${e.target.result}" alt="Imagem da Postagem"><p>${imageCaption}</p>`;
                renderPost();
            };
            reader.readAsDataURL(image);
        } else {
            imageHTML = '';
            renderPost();
        }

        function renderPost() {
            postItem.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
                ${imageHTML}
                ${link ? `<a href="${link}" target="_blank">Leia mais</a>` : ''}
            `;
            postList.appendChild(postItem);

            // Limpar o formulário
            document.getElementById('postTitle').value = '';
            document.getElementById('postContent').value = '';
            document.getElementById('postImage').value = '';
            document.getElementById('postLink').value = '';
            document.getElementById('postImageCaption').value = '';
        }
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}

// Função para carregar postagens ao abrir a página do blog
window.onload = function() {
    const postList = document.getElementById('postList');
    const postItems = document.querySelectorAll('.post-item');

    postItems.forEach(post => postList.appendChild(post));
};
