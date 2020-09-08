class gitHub{
    constructor(){
        this.client_id = 'c68f8e728bb8c0d96e77';
        this.client_secret= '05540fa0946b90616676138327c6d66c629a1e2b';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_Secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}