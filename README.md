# Emoji Pad🐶🐕🐩🐺

[![Build Status](https://travis-ci.org/raksonibs/emoji-pad.svg?branch=master)](https://travis-ci.org/raksonibs/emoji-pad)

Inspired by [Sindre Sorhus](https://sindresorhus.com).


## Install

```
$ npm install --save emoji-pad
```


## Usage

```js
const emojiPad = require('emoji-pad');

emojiPad('Woof', 3, '🐶');
//=> '🐶🐶🐶Woof'

emojiPad('Woof', 3, '🐶', 'right');
//=> 'Woof🐶🐶🐶'
```


## API

### emojiPad(input, count)

#### input

Type: `string`

String to pad.

#### count

Type: `number`<br>
Default: `0`

Amount of emojis.

#### direction

Type: `string`<br>
Default: `left`

Side to pad with emojis.

## License

MIT © [Oskar Niburski](https://raksonibs.github.io)