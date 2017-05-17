const current_user = document.querySelector('body');

export const SHARED_STATE = {
    email: current_user.getAttribute('data-email'),
    logout_url: current_user.getAttribute('data-logout')
};