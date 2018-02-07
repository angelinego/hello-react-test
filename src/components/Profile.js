import React, { Component } from "react"
import Person from "./Person"
import LikeButton from "./LikeButton"
import LikeCount from "./LikeCount"
import { Card, Icon, Image, Button, Popup } from 'semantic-ui-react'


export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state= {
      count: 0
    }
    this.increaseVote = this.increaseVote.bind(this)
  }

  increaseVote() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
      <Card>
        <Person image={this.props.image} name={this.props.name} />
        <Card.Content>
          <Card.Header>
              {this.props.name}
          </Card.Header>
          <Card.Meta>
            <span className='bio'>
              {this.props.bio}
            </span>
          </Card.Meta>
          <Card.Description>
            <Popup
              trigger={<Button primary>Description</Button>}
              content={this.props.description}
            />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <LikeButton onClick={() => this.increaseVote()} count={this.state.count} />
        </Card.Content>
      </Card>

      </div>
    )
  }
}
