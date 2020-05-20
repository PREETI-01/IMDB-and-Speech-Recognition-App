let githubServer = "https://api.github.com/users";

/*window.fetch(githubServer).then(data) => {
    console.log(data);
};  */
//if want to communicate giyhub server by using wimdow.fetch()
/*window
.fetch(githubServer)
.then((data) => console.log(data))
.catch((err) => console.log(err));  */
/*window
.fetch(githubServer)
.then((data) => {
    data.json(). then(user => {
        console.log(user)
    }).catch(err => console.log(err))
})
.catch((err) => console.log(err));  */

window
.fetch(githubServer)
.then((data) => {
    data
    .json()
    .then((gitUsers) => {
        let output = [];
        for (let user of gitUsers) {
           // console.log(user.login);
            //console.log(user.avatar_url);
            output += `
           <div>
              <img src="${user.avatar_url}" />
              <h1>User : ${user.login}</h1>
              <a href = "${user.html_url}" target = "_blank">details</a> 
           </div>
            `;
            document.getElementById('templete').innerHTML = output;
        }
    })
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));








