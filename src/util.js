export function saveUserData(data) {
    const { user: { email, uid } } = data;
    sessionStorage.setItem('user', JSON.stringify({ email, uid }));
};

export function getUserData() {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export function clearUserData() {
    sessionStorage.removeItem('user');
};
