import React, { useState, useEffect } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state

  // DOMが変更される度に実行（レンダリングされる度に実行）
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.')
  })

  // レンダリング時に一度だけ実行
  useEffect(() => {
    console.log('This is like componentDidMount')
  }, [])

  // name が変更されたときだけ実行
  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name])

  return (
    <>
      <p>現在の{name}は{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  )
}

App.defaultProps = {
  name: '価格',
  price: 1000
}

export default App
