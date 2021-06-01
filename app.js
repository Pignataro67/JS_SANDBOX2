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

createPost({title: 'Post Five', body: 'This is post five'}, getPosts);