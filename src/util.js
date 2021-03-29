export function objectToArray(data) {
    if (data === null) {
        return [];
    } else {
        return Object.entries(data).map(([key, value]) => Object.assign({ _id: key }, value));
    };
};

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
