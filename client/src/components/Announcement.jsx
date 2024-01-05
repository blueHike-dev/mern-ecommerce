import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
  return (
    <Container>Super deals tailored for you! Free shipping on orders over $50</Container>
  )
}

const Container = styled.div`
height: 20px;
background-color: #d1bd04;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

export default Announcement