# Text2Speech JS

> Wrapper around browser Text to Speech API

**Note:** This package use HTML5 Web Speech API. So, make sure your browser is supported. Please take a look here to see all the supported browser [Can I Use Speech Synthesis](https://caniuse.com/#feat=speech-synthesis)

## Example

Check out this link [Text to Speech Example](https://htmlpreview.github.io/?https://github.com/jefrydco/text2speech-js/blob/master/examples/index.html)

## Installation

Install using one of these method below
```bash
yarn add text2speech-js

# or

npm install text2speech-js
```

Then you can import it using this way:
```js
const Text2Speech = require('text2speech-js')

// or

import Text2Speech from 'text2speech-js'
```

You can also attach directly to your HTML file by using this way:
```html
<script src="https://rawcdn.githack.com/jefrydco/text2speech-js/master/dist/index.umd.min.js"></script>
```

## Usage
```js
const tts = new TextToSpeech()
tts.text = "Hello World!"

// Speak
tts.speak()

// Pause
tts.pause()

// Resume
tts.resume()

// Stop
tts.stop()
```

## Options

See all the available config here: [SpeechSynthesisUtterance Properties](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance#Properties)

## License
[MIT](./license.md) Copyright (c) 2019 - Jefry Dewangga(@jefrydco)