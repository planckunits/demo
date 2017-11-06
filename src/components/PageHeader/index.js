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
    <p style={{ color: 'white' }}>
      PlanckUnits x タカヤ株式会社 x 株式会社リプロ RIPRO Corporation Japan
    </p>
  </HeaderWrap>
)
export default PageHeader
