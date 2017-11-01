// @flow
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Body = styled.ul`
  width: 300px;
  overflow-y: auto;
  padding: 0;
  padding-right: 20px;
  margin: 0;
  height: 100%;
`

export const HeaderTitle = styled.h2`
  font-size: 20px;
  padding: 0;
  margin: 0;
`

export const Header = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: solid 1px gray;
`
