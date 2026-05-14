module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        "plugin:postcss-modules/recommended",
    ],
    settings: {
        react: {
            version: 'detect'
        },
        "postcss-modules": {

            /* Обрабатываем только файлы модулей */
            include: "**/*.module.(css|scss)",
            exclude: "**/node_modules/**/*",
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        "postcss-modules/no-undef-class": "error",
        "postcss-modules/no-unused-class": "warn",
    }
}