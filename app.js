document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
    });
}