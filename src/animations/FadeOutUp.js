import React from "react"
import styled, {keyframes} from "styled-components"
import {fadeInUpBig} from "react-animations"

const FadeInUp = styled.div`
  animation: 0.5s ${keyframes`${fadeInUpBig}`};
`

export default FadeInUp
