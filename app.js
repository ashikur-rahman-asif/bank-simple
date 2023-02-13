// Step: 1 => add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-2: email field er mal pati nite hobe 
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    // step:3 : password er malpati get 
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    // console.log(password)
    // step:4 => now verify the mal pati 
    if (email === 'bobuj80@gmail.com' && password === 'secret') {
        window.location.href='bank.html'
    }
    else {
        alert('invalid user')
    }
})