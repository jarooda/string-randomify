# string-randomify

> `string-randomify` is a simple and customizable library for generating random strings. This can be useful for creating unique IDs, passwords, tokens, and more.

## Installation

To install string-randomify, use npm:
```sh
npm install string-randomify
```

Or with Yarn:
```sh
yarn add string-randomify
```

Or with pnpm:
```sh
pnpm add string-randomify
```

## Usage

### Importing the Module

To use the randomize function, import it into your project:

```js
const { randomize } = require('string-randomify');
```

### `randomize` Function
The `randomize` function generates a random string of a specified length, with optional prefix, suffix, and custom dictionary.

**Syntax**
```ts
randomize(length: number, option?: RandomizeOption): string
```

**Parameters**
- `length` (number): The length of the random string to be generated. Must be greater than 0 and less than 10,000.
- `option` (object): An optional object to customize the generated string. It includes:
  - `dictionary` (string): A string containing the set of characters to use for generating the random string. Defaults to `"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"`.
  - `prefix` (string): A string to prepend to the generated random string.
  - `suffix` (string): A string to append to the generated random string.

**Returns**

`string`: The generated random string.

**Example**

Here are some examples of how to use the randomize function:

```js
const { randomize, dictionary } = require('string-randomify');

// Generate a random string of length 10
const randomString = randomize(10);
console.log(randomString);

// Generate a random alphanumeric string of length 15
const randomAlphaNum = randomize(15);
console.log(randomAlphaNum);

// Generate a random string with a custom dictionary
const customDictionary = "ABCDEF0123456789";
const customRandom = randomize(8, { dictionary: customDictionary });
console.log(customRandom);

// Generate a random string with default dictionary and additional characters
const additionalDictionary = `${dictionary}!@#$%^&*()`;
const additionalRandom = randomize(8, { dictionary: additionalDictionary });
console.log(additionalRandom);

// Generate a random string with a prefix and suffix
const randomWithPrefixSuffix = randomize(12, { prefix: "PRE-", suffix: "-SUF" });
console.log(randomWithPrefixSuffix);

```

## How to contribute

If you like to contribute to `string-randomify`, please refer to [contributing guidelines][contributing].

## License

`string-randomify` is licensed under the MIT License. See the [LICENSE][license] file for more details.

---

© 2024 - present | [Jalu Wibowo][website]



[license]: /LICENSE
[website]: https://jaluwibowo.id
[contributing]: /CONTRIBUTING.md