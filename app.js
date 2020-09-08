const github = new gitHub();
const ui = new UI();
const searchUser = document.getElementById('searchUser');

//serach input event listener
searchUser.addEventListener('keyup', (e)=>{
userText = e.target.value;
if(userText !== ''){
    console.log(userText);
    github.getUser(userText).then(data =>{
       console.log(data);
        if(data.profile.message === 'Not Found'){
           ui.showAlert('user not found', 'alert alert-danger');
        }
        else
        {
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
    });
}else{
   ui.clearProfile();
}
});