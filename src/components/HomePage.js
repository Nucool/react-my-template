import React, { Component }  from 'react'

class HomePage extends Component {
  render (){
    console.log('aaaaaaa')
    console.log(this.props)
    return (
      <div>{this.props.data.mainPage}</div>
    )

  }
}

export default HomePage
