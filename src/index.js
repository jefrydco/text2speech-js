import { isExists } from './utils'

export default class TextToSpeech {
  constructor(opt) {
    opt = {
      lang: 'en-US',
      pitch: 1,
      rate: 1,
      voice: window.speechSynthesis.getVoices().find(voice => voice.default),
      ...opt
    }

    this.text = ''
    this.speechSynthesis = window.speechSynthesis
    this.utterance = new SpeechSynthesisUtterance()
    this.utterance.text = this.text
    this.utterance.lang = opt.lang
    this.utterance.pitch = opt.pitch
    this.utterance.rate = opt.rate
  }

  static isSupported() {
    return isExists(window.speechSynthesis) && isExists(window.SpeechSynthesisUtterance)
  }

  speak() {
    this.utterance.text = this.text
    this.speechSynthesis.speak(this.utterance)
  }

  pause() {
    this.speechSynthesis.pause()
  }

  resume() {
    this.speechSynthesis.resume()
  }

  stop() {
    this.speechSynthesis.cancel()
    this.utterance = new SpeechSynthesisUtterance()
  }

  getVoices() {
    return this.speechSynthesis.getVoices()
  }
}