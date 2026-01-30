const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

RegisterLink.addEventListener('click', () => {
    container.classList.add('active');
})

LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
})

// Check URL Params for Direct Signup Access
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('action') === 'register') {
    container.classList.add('active');
}
