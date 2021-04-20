const UI = new Ui();

class Github {
    constructor() {
        this.client_id = 'fe7f3d921cb063a91d64';
        this.client_secret = 'a4b9aa7ce610a33101260a38811a5066ae2034c9';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // get github user's information and repos
    getUser(user) {
        // get user's information
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.message === 'Not Found') {
                    // show alert
                    UI.showAlert();
                } else {
                    // show profile
                    UI.showProfile(data);
                }
            });
        // get user's repos
        fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                UI.showRepos(data);
            });
    }
}