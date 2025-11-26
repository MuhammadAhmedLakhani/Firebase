import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification } from "./firebase.js";


/// state change listener

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user", user)
        // ...
    } else {
        console.log("user signout")
    }
});







///signin method


let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            console.log(userCredential.user);
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            // ..
        });
}


let signupBtn = document.getElementById("signup");

signupBtn.addEventListener('click', signup)


// signout method

let signout = () => {

    signOut(auth).then(() => {
        console.log("signout sucessfully")
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });


}




// gettingElements with button pressed 

let signoutBtn = document.getElementById("signoutBtn");

signoutBtn.addEventListener('click', signout)


//Email Verification

let emailVerify = ()=>{

    sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            console.log("sent")
            // ...
        });


}




let emailVerification = document.getElementById("emailVerification");

emailVerification.addEventListener('click', emailVerify)






