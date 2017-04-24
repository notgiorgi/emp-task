import React from 'react'
import { Table } from 'semantic-ui-react'

export const renderRow = ({ id, name, owner, stargazers_count, created_at }) => (
  <Table.Row key={id}>
    <Table.Cell>{id}</Table.Cell>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{owner.login}</Table.Cell>
    <Table.Cell>{/* eslint-disable */ stargazers_count}</Table.Cell>
        <Table.Cell>{created_at /* eslint-enable */}</Table.Cell>
  </Table.Row>
)
