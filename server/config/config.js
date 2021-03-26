const config = {
    PORT: 5000,
    DB_CONNECTION: 'mongodb://localhost/beer-shop',
    SALT_ROUNDS: 11,
    SECRET: 'MyLittleSecret',
    COOKIE_NAME: 'USER_SESSION',
};

module.exports = config;