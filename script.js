function post() {
  const postContent = document.getElementById('postContent').value;

  if (postContent.trim() !== '') {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.textContent = postContent;

    document.getElementById('posts').appendChild(postElement);

    // Clear the textarea after posting
    document.getElementById('postContent').value = '';
  }
}
