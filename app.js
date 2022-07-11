let displayProfile = document.getElementById('showUser');
let getForm = document.querySelector('form');
let getName = document.getElementById('name');

getForm.addEventListener('submit',displayData);

function displayData(e){
   let userName = getName.value;

   fetch(`https://api.github.com/users/${userName}`).then((response) =>{
    return response.json();
   }).then((data) =>{
        if(data.message === 'Not Found'){
        displayProfile.innerHTML = `
        <div class="output container" id="output">
            <h3>Invlaid User</h3>
        </div>    
        `
        }
        else{
            displayProfile.innerHTML = `
            <div class="output container" id="output">
            <div class="r1">
                <img src="${data.avatar_url}" alt="User Profile" class="img">
            <div class="follower f">
                <h1>${data.followers}</h1>
                <h3>Followers</h3>
            </div>
            <div class="following f">
                <h1>${data.following}</h1>
                <h3>Following</h3>
            </div>
            </div>
            <div class="r2">
                <div class="name f2">${data.name}</div>
                <div class="location f2">${data.location}</div>
                <div class="bio f2">${data.bio}</div>
            </div>
        </div>
            `
        }
   })


   e.preventDefault();
   
}