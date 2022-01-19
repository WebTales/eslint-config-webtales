# eslint-config-webtales
This package uses ESLint to enforce Webtales company code style and provides a shared base configuration for our Javascript projects.

## Install
### `npm`
```sh
npm i -D eslint-config-webtales
```

## Usage
Create a .eslintrc.js file in base of your project:

### For Node Projects
```js
module.exports = { extends: ['webtales/node-eslint'] };
```

### For Vue Projects
```js
module.exports = { extends: ['webtales/node-eslint', 'webtales/vue-eslint'] };
```

### For Vue 3 Projects
```js
module.exports = { extends: ['webtales/node-eslint', 'webtales/vue3-eslint'] };
```

## Contributing
You can make sure this module lints with itself using `npm lint`.
