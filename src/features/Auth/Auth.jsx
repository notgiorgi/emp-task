import React, { Component } from 'react'
import { Segment, Button, Icon, Image, Card } from 'semantic-ui-react'

const user = {
  login: 'octocat',
  avatar_url: 'https://avatars0.githubusercontent.com/u/583231',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  name: 'The Octocat',
  company: 'GitHub',
  blog: 'http://www.github.com/blog',
  location: 'San Francisco',
  email: 'octocat@github.com',
  followers: 1786,
  following: 6,
  created_at: '2011-01-25T18:44:36Z',
}


class Auth extends Component {
  render() {
    return (
      <Segment>
        <Button
          color="green"
          size="large"
          as="a"
          href={this.generateGithubURL()}
          fluid
        >
          <Icon name="github" /> Login with Github
        </Button>

        <br />

        <Card fluid>
          <Image src={user.avatar_url} />
          <Card.Content>

            <Card.Header as="a" href={user.url} target="_blank">
              {user.name}
            </Card.Header>

            <Card.Meta as="a" href={`mailto:${user.email}`} target="_blank">
              {user.email}
            </Card.Meta>

            <Card.Description>
              {user.company && `Works at ${user.company}`}
            </Card.Description>

          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {user.followers} followers
            </a>
          </Card.Content>
        </Card>
      </Segment>
    )
  }
}

export default Auth
