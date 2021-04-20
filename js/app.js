const github = new Github();

const searchUserInput = document.querySelector('#search-user');

searchUserInput.addEventListener('keyup', (e) => {
    // get input text
    const username = e.target.value;

    if (username !== '') {
        // show profile section
        github.getUser(username);
    } else {
        // clear profile section
        UI.clearUser();
    }

});