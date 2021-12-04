/* Moralis init code */
const serverUrl = "https://mf3d5exkivqc.usemoralis.com:2053/server";
const appId = "Lsfh0BW3ZRIEAIjBNf0ARjwXtKjt3kdpFKOaZm6P";
Moralis.start({ serverUrl, appId });

/* TODO: Add Moralis Authentication code */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console(error);
        });
    }
  }
  
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
  
  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;