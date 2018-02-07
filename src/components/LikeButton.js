import React, { Component } from "react"
import { Button, Icon, Label } from 'semantic-ui-react'


export default class LikeButton extends Component {
  render() {
    return(
    <div>
      <Button as='div' labelPosition='right'>
        <Button color='red' onClick={this.props.onClick}>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic color='red' pointing='left'>{this.props.count}</Label>
      </Button>
  </div>
  )
}
}
