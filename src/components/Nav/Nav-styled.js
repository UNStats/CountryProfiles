import styled, { css } from 'styled-components';

const StyledNavContainer = styled.div`
  position: sticky;
  top: 2rem;
  margin: ${props => props.theme.baseline};
  max-width: 300px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const StyledListItem = styled.li``;

const StyledNavLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 7px;
  text-decoration: none;
  color: ${props => props.theme.palette.darkerGray};
  line-height: 1.25;
  transition: color 125ms linear;

  .active &,
  .active &:hover {
    cursor: default;
  }
`;

const StyledGoalNum = styled.span`
  width: 28px;
  min-width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  margin-right: 8px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  border-radius: 1px;

  ${props =>
    props.goalColor &&
    css`
      background: ${props.goalColor};
      color: white;
    `};
`;

const StyledGoalTitle = styled.span`
  &:hover {
    color: ${props => props.theme.palette.black};
  }

  .active &,
  .active &:hover {
    color: ${props => props.theme.palette.blue};
    font-weight: 600;
  }
`;

const StyledScrollToTopContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1.5rem;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 125ms linear;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-height: 670px) {
    display: none;
  }
`;

const TooltipSpan = styled.span`
  white-space: nowrap;
`;

export {
  StyledNavContainer,
  StyledListItem,
  StyledNavLink,
  StyledGoalNum,
  StyledGoalTitle,
  StyledScrollToTopContainer,
  TooltipSpan
};
