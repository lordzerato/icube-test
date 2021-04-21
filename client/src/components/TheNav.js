import React from 'react'
import {
  Nav, Navbar
 } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function TheNav() {
  const history = useHistory()

  function handleClickBtn(route) {
    history.push(route)
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Yugi-Oh FansApp</Navbar.Brand>
      <Navbar.Toggle className="text-left"
       aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={
           () => handleClickBtn("/")
           }>Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}