import React from 'react'

const texts = [
  'He needs your help...',
  'She needs your help...',
  'They need your help...',
  'WE need your help!',
]

let changer
export default class SubHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
      running: true,
    }
  }

  componentDidMount() {
    this.changeText(texts)
  }

  componentWillUnmount = () => {
    clearInterval(changer)
  }

  changeText = texts => {
    let textIndex = 0
    let letterIndex = 0
    let currentText
    let currentLetter
    let backspace = false
    let textArr = texts
    changer = setInterval(
      async () => {
        if (!this.state.running) clearInterval(changer)
        currentText = textArr[textIndex]
        currentLetter = currentText[letterIndex]
        if (backspace) {
          if (this.state.text.length) {
            try {
              await this.setState({
                text: this.state.text.slice(0, this.state.text.length - 1),
              })
            } catch (err) {
              clearInterval(changer)
            }
          } else {
            backspace = false
          }
        } else {
          try {
            await this.setState({
              text: this.state.text.concat(currentLetter),
            })
          } catch (err) {
            clearInterval(changer)
          }
          letterIndex += 1
          if (
            this.state.text.includes('...') ||
            this.state.text.includes('!')
          ) {
            backspace = true
            textIndex += 1
            letterIndex = 0
            if (textIndex === textArr.length) clearInterval(changer)
          }
        }
      },
      80,
      textArr
    )
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}
