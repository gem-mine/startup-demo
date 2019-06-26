import React, { Component } from 'react'
import intl from '@gem-mine/intl'

const locales = {
  'zh-CN': require('./zh-CN'),
  'en-US': require('./en-US')
}

class I18N extends Component {
  state = {
    initDone: false
  }
  componentDidMount() {
    intl.init({ locales }).then(() => {
      this.setState({ initDone: true })
    })
  }

  render() {
    if (this.state.initDone) {
      return this.props.children
    } else {
      return <></>
    }
  }
}

export default I18N
