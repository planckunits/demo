// @flow
import React from 'react'
import styled from 'styled-components'

export const HeaderWrap = styled.header`
  background: gray;
  padding: 20px;
`

export const Title = styled.h1`
  color: white;
  margin: 0;
`

const PageHeader = (props: { title: string, desc: string }) => (
  <HeaderWrap>
    <Title>{props.title}</Title>
    <p style={{ color: 'white' }}>{props.desc}</p>
  </HeaderWrap>
)
export default PageHeader
