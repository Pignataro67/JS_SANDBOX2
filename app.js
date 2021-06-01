const posts = [
  {title: 'Post Three', body: 'This is post three'},
  {title: 'Post Four', body: 'This is post four'}
];

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback;
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    post.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Five', body: 'This is post five'}, getPosts);