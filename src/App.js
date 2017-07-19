import React, { Component } from 'react'
import './App.css'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render(){
    return(
      <div className="App">
        <Provider store={store}>
          <div>
            <PostBody />
            <CommentBox />
          </div>
        </Provider>
      </div>
    )
  }
}

export default App
