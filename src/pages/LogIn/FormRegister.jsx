import React from 'react'
import styled from 'styled-components'

import {
  Button,
  Typography,
  TextField,
  FormGroup,
} from '@material-ui/core'

const ButtonV = styled(Button)`
  && {
    margin-top: 40px;
  }
`

export default class extends React.Component {

  state = {
    username: '',
    password: '',
    email: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { username, password, email } = this.state

    return (
      <form noValidate autoComplete="off">
        <FormGroup>
          <Typography align="center" variant="title">
            {"Recite Word"}
          </Typography>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={this.handleChange('email')}
            margin="normal"
          />
          <TextField
            id="username"
            label="Username"
            value={username}
            onChange={this.handleChange('username')}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.handleChange('password')}
            margin="normal"
          />
          <ButtonV variant="contained" color="primary">
            Register
          </ButtonV>
        </FormGroup>
      </form>
    )
  }
}
