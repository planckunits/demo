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

const PageHeader = ({ title }: { title: string }) => (
  <HeaderWrap>
    <Title>{title}</Title>
  </HeaderWrap>
)
export default PageHeader
