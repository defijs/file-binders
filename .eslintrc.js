module.exports = {
    root: true,
    extends: 'airbnb',
    rules: {
        indent: ['error', 4, { 'SwitchCase': 1 }],
        'no-var': 'error',
        'comma-dangle': ["error", "never"],
    },
    env: {
        jasmine: true
    },
    globals: {
        window: true
    }
}
