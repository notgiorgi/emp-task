import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

export const Error = () => (
  <Message icon negative>
    <Icon name="frown" />
    <Message.Content>
      <Message.Header>Sorry, something went wrong</Message.Header>
      <p>Try searching</p>
    </Message.Content>
  </Message>
)

export const NoData = () => (
  <Message icon>
    <Icon name="wizard" />
    <Message.Content>
      <Message.Header>Seems like no data here</Message.Header>
      <p>Try typing something in searchbox</p>
    </Message.Content>
  </Message>
)

export const NotFound = () => (
  <Message icon info>
    <Icon name="meh" />
    <Message.Content>
      <Message.Header>Seems like no such repos on github</Message.Header>
      <p>Try typing something different in searchbox</p>
    </Message.Content>
  </Message>
)
