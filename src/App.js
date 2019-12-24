import React, { useState } from 'react'

const App = () => {

  // 分割代入でuseStateの要素を取得
  // 第2引数は慣習的に"setXXX"という名前にする
  const [count, setCount] = useState(0)

  // +1 ボタン押下処理
  const increment = () => {
    setCount(count + 1)
  }
  // -1 ボタン押下処理
  const decrement = () => {
    setCount(count - 1)
  }
  
  // setCount は関数を引数に取ることができる
  const increment2 = () => {
    setCount(previousCount => previousCount + 1)
  }
  const decrement2 = () => {
    setCount(count - 1)
  }

  const double = () => {
    setCount(count * 2)
  }

  // resetボタン押下時の処理
  const reset = () => {
    setCount(0)
  }

  // 3の倍数の時だけ3で割る
  const fizzbuzz = () => {
    if (count % 3 === 0) {
      setCount(count / 3)
    }
  }

  // {} は JSX の記載方法
  // JSX ではトップレベルのタグをひとつしか定義できないためReact.Fragmentタグを挿入
  return (
    <React.Fragment>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
        <button onClick={double}>x2</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={fizzbuzz}>3の倍数の時だけ3で割る</button>
      </div>
    </React.Fragment>
  )
}

export default App
