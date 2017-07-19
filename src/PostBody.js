import React from 'react'

class PostBody extends React.Component {
  render() {
    return (
      <div className="post-body">
        PostBody<br />
        <span>{this.props.data.length}</span>
      </div>
    )
  }
}

export default PostBody
