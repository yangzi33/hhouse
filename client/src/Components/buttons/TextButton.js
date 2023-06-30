import React, { Component } from 'react'
import { Button } from "@mui/material"

export default class TextButton extends Component {
  render() {
    const {onClick, className='', children} = this.props
    return (
      <Button 
        variant="text"
        onClick={onClick}
        className={className}
      >
        {children}
      </Button>
    )
  }
}
