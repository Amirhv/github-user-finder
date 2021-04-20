class Ui {
    constructor() {
        this.profileDiv = document.querySelector('#profile');
        this.reposDiv = document.querySelector('#repos');
        this.alertDiv = document.querySelector('#alert');
    }

    // show user's profile section
    showProfile(user) {
        this.profileDiv.innerHTML = `
        <div class="row">
            <div class="col-md-3 mb-sm-4">
                <img src="${user.avatar_url}" class="img-fluid rounded mb-3" alt="">
                <div class="d-grid gap-2">
                    <a href="${user.html_url}" class="btn btn-primary" target="_blank">View Profile</a>
                </div>
            </div>
            <div class="col-md-9">
                <span class="badge bg-primary p-2">public repos: ${user.public_repos}</span>
                <span class="badge bg-success p-2">public gists: ${user.public_gists}</span>
                <span class="badge bg-warning p-2">followers: ${user.followers}</span>
                <span class="badge bg-danger p-2">following: ${user.following}</span>
                
                <br>
                <br>
                
                <ul class="list-group">
                    <li class="list-group-item">Company : ${user.company}</li>
                    <li class="list-group-item">Website/Blog : ${user.blog}</li>
                    <li class="list-group-item">Location : ${user.location}</li>
                    <li class="list-group-item">Member since : ${user.created_at}</li>
                </ul>
            </div>
        </div>`;
    }

    // clear user's profile section
    clearUser() {
        this.profileDiv.innerHTML = '';
    }

    // show alert
    showAlert() {
        this.alertDiv.innerHTML = `
        <div class="row">
            <div class="col-12">
                <div class="alert alert-danger">
                    User Not Found
                </div>
            </div>
        </div>
        `;
        this.clearAlert();
    }

    // clear alert after 2.5s
    clearAlert() {
        setTimeout(() => {
            this.alertDiv.innerHTML = ``;
        }, 2500)
    }

    // show user's repos
    showRepos(repos) {
        let output = '';

        repos.forEach((repo) => {
            output += `
            <div class="row mb-3">
                <div class="col-md-6">
                    <a class="text-decoration-none " href="${repo.html_url}">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <div class="float-end">
                        <span class="badge bg-primary p-2">Stars: ${repo.stargazers_count}</span>
                        <span class="badge bg-success p-2">Watchers: ${repo.watchers_count}</span>
                        <span class="badge bg-warning p-2">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;

            this.reposDiv.innerHTML = output;
        });
    }
}
