// @flow

import styled from 'styled-components'

export const Marker = styled.div`
  margin-left: ${props => (props.hover ? '-20px' : '-10px')};
  margin-top: ${props => (props.hover ? '-20px' : '-10px')};
  height: ${props => (props.hover ? '40px' : '20px')};
  width: ${props => (props.hover ? '40px' : '20px')};
`

export const MarkerImg = styled.img`
  height: 100%;
  wieght: 100%;
`

export const Label = styled.span`
  padding: 2px;
  position: absolute;
  background: ${p => (p.primary ? 'yellow' : 'white')};
`
