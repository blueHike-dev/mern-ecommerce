import React from "react";
import styled from "styled-components"
import { BsSearch, BsCart3 } from "react-icons/bs";
import  { mobile } from '../responsive';
import {Link  } from "react-router-dom";
 
const Navbar = () => {
  return <Container>
    <Wrapper>
      <Left>
        <Language>
          EN
          
        </Language>
        <SearchContainer>
          <Input placeholder='Search' />
          <BsSearch  style={{color:"gray", fontSize: 16}} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>blueHike.</Logo>
      </Center>
      <Right>
        <MenuItem>SIGN UP</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <Link to='/cart'>
          <BsCart3 style={{color: "black", fontWeight: 800}}/>
        </Link>
      </Right>
    </Wrapper>
  </Container>;
};

const Container = styled.div`
height: 60px;
border-bottom: 0.5px solid lightgrey;
${mobile({ height: "50px"})}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: '10px 0px'})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.div`
font-size: 14px;
cursor: pointer;
background-color: #1f4903;
padding: 6px;
color: white;
${mobile({display: 'none'})}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
width: 100px;
`
const Input = styled.div`
border: none;
${mobile({ width : '50px'})}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: '24px'})}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  ${mobile({flex : 2, justifyContent: "center"})}
`
const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`


export default Navbar;
