document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open(`http:api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const res = JSON.parse(this.responseText);
      
      let output = '';

      if(res.type === 'success') {
        res.value.forEach(function(joke) {
          output +=`<li>${joke.joke}</li>`
        })
      }else {
        output += `<li>Something went wrong</li>`;
      }
    }
  }

  xhr.send();

  e.preventDefault();
}