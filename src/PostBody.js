import React from 'react'
import { connect } from 'react-redux'

class PostBody extends React.Component{
  render(){
    return(
      <div className="post-body">
        PostBody<br />
        <span>{this.props.data.length}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state
})

export default connect(mapStateToProps)(PostBody)
