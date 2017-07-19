import React from 'react'
import store from './store'

class CommentBox extends React.Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      data:store.getState()
    }
  }
  handleSubmit(e){
    e.preventDefault()
    let newcomment = this.comment.value
    console.log(store.getState())
    store.dispatch({type:'ADD_COMMENT',data:newcomment})
    this.setState({data:store.getState()})
    console.log(store.getState())
    this.comment.value = ''
  }
  render(){
    return(
      <div className="comment-box">
       {
        this.state.data.map(item =>
          <div key={Math.random()}>
            {item.comment}
          </div>
        )}
        <div  className="comment-form">
          <input className='input' type='text' ref={value => this.comment = value} />
          <input className='submit-btn' type='button' value='评论' onClick={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default CommentBox
