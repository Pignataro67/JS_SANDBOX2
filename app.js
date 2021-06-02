document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

// Get local text file
function getText() {
  fetch('test1.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get local json data
function getJSON() {
  fetch('posts.json')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
}