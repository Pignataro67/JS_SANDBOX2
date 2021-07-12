// Init Github
const github = new Github;
// Init UI
const  ui = new UI;

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
        if(data.profile.message === 'Not Found') {
          // Show alert

        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
    } else {
      // CLear profile
      ui.cldearProfile();
    }
});