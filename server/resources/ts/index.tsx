import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

//全てのHTML 要素にany" 型を設定
declare global {
      namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any;
    }
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)