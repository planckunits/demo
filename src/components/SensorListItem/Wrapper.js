// @flow

import styled, { keyframes } from 'styled-components'

const bgEmergeAnimation = keyframes`
0% {
  color: white;
}
100% {
  background: orange;
}
`

const bgEmergeAnimationSuper = keyframes`
0% {
  color: white;
}
50% {
  background: orange;
}
100% {
  background: red;
  transform: rotate(360deg);
}
`

export const Wrapper = styled.li`
  list-style-type: none;
  width: 300px;
  padding: 5px;
  background: ${props => (props.hover ? '#aaa' : 'white')};
  ${props =>
    props.emerge ? `animation: ${bgEmergeAnimation} 1s linear infinite;` : ''};
`

export const ValueRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ValueRowLabel = styled.div`
  font-weight: 500;
  width: 11em;
  border-right: solid #ccc 2px;
  margin-right: 5px;
  padding-right: 5px;
`

export const Cell = styled.div`
  width: 14em;
`

export const Value = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Name = styled.h3`
  margin: 0;
  padding: 0;
`
