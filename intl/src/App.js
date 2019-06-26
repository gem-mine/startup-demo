import React from 'react'
import intl from '@gem-mine/intl'

function App() {
  return (
    <div className="App">
      {intl.get('welcome')}: {intl.get('user.name')}
    </div>
  )
}

export default App
