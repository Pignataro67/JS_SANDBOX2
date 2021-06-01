const posts = [
  {title: 'Post Three', body: 'This is post three'},
  {title: 'Post Four', body: 'This is post four'}
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = true;  // can be false, too

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
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

createPost({title: 'Post Five', body: 'This is post five'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});