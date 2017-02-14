// Create store according to environment.
if (process.env.NODE_ENV === 'production') { // eslint-disable-line no-undef
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}