document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('post-form');
    const blogPosts = document.getElementById('blog-posts');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            const article = document.createElement('article');
            article.className = 'post';
            article.innerHTML = <><h2>${title}</h2><p>${content}</p></>;
            blogPosts.appendChild(article);

            form.reset();
        }
    });
});