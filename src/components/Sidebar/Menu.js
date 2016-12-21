/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.li`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: list-item;
  text-align: -webkit-match-parent;
  position: relative;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px 25px 10px 15px;
  font-size: 12px;
  background-attachment: scroll;
  background-clip: initial;
  background-image: none;
  background-origin: initial;
  background-position: initial;
  background-repeat: initial;
  background-size: initial;
  text-overflow: clip;

  /* theme */
  color: ${props => props.theme.sidebarHeaderColor || '#fff'}
  background-color: ${props => props.theme.sidebarHeaderBg || '#fff'}
`;

const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
`;

const Menu = props => (
  <StyledMenu className="sidebar-menu" >
    <StyledHeader className="menu-header" >{props.header}</StyledHeader>
    {props.children}
  </StyledMenu>
);

Menu.propTypes = {
  children: React.PropTypes.node,
  header: React.PropTypes.string,
};

export default Menu;
