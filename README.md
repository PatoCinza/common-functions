# Common functions

Common functions to be used across all projects, we use babel here to make sure it's up to date with the oldest browsers, and rollup to generate a small build

## How to use

To use it, you first have to install it in your project, since it's a closed repo, you'll add this to your package.json

```json
  "common-functions": "git+ssh://git@git.btservers.com.br:frontend/common-functions.git"
```

and then run `npm install`, it is now part of your project, you can use it like this:

```js
import { validateCpf } from 'common-functions'

function (cpf) {
  return validateCpf(cpf)
}
```

Just like that, it's easy

## Contributing

To contribute, just create your `function.js` inside the `src/` folder, solve the problem you want to solve, write the tests for it inside `test/` and run `npm run build`, it will generate a new build file, as well as updating your documentation, this should in the future be done as a CI step and precommit step
