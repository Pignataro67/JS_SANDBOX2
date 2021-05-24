const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post One', body: 'This is post one'}
];

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    post.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
  }, 1000);
}