import React from 'react'

class CommentBox extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  state = {
    data: this.props.data
  }
  handleSubmit(e){
    e.preventDefault()
    console.log(this.comment.value)
    this.props.handleClick(this.comment.value)
    this.comment.value = ''
  }
  render(){
    let {data} = this.state
    console.log(data,this.props)
    return(
      <div className="comment-box">
       {
        this.props.data.map(item =>
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
