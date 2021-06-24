// Init Github
const github = new Github;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make HTTp call
    github.getUser(userText)
      .then(data => {
        console.log(data);
      })
  }
});