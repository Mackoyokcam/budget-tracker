import './drop-zone.scss'
import React from 'react'
import * as util from '../../lib/util.js'

class DropZone extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      dropping: false,
    }

    this.handleDrop = this.handleDrop.bind(this)
    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleDragEnter = this.handleDragEnter.bind(this)
    this.handleDragLeave = this.handleDragLeave.bind(this)
  }

  handleDragOver(e){
    e.preventDefault()
  }

  handleDragEnter(e) {
    console.log('Drag Entered!')
    this.setState({dropping: true})
  }

  handleDragLeave(e) {
    console.log('Drag Left!')
    this.setState({dropping: false})
  }

  handleDrop(e){
    try {
      let data = JSON.parse(e.dataTransfer.getData('application/json'))
      this.props.onComplete(data)
    } catch (err) {
      console.log('__BAD DRAG DATA__', err)
    }
    this.setState({dropping: false})
  }

  render(){
    let classText = util.classToggler(this.state)
    return (
      <div
        className={`drop-zone ${classText}`}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}>
        {this.props.children}
      </div>
    )
  }
}

export default DropZone
