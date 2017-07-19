import React from 'react'
import store from './store'

class PostBody extends React.Component {
  render() {
    let data = store.getState()
    return (
      <div className="post-body">
        PostBody<br />
        <span>{data.length}</span>
      </div>
    )
  }
}

export default PostBody
