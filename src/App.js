import React, { Component } from 'react'
import './App.css'
import PostBody from './PostBody'
import CommentBox from './CommentBox'

class App extends Component {
  state = {
    data: [
      {comment:'哈哈哈'},
      {comment:'嘿嘿嘿'}
    ]
  }
  handleClick(data){
    this.setState({data:[...this.state.data,{comment:data}]})
  }
  render() {
    let {data} = this.state
    console.log('App:',this.state.data)
    return (
      <div className="App">
        <PostBody data={data} />
        <CommentBox data={data} handleClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}

export default App
