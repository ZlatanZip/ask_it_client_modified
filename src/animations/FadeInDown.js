import styled, {keyframes} from "styled-components"
import {fadeInDownBig} from "react-animations"

const FadeInDown = styled.div`
  animation: 0.5s ${keyframes`${fadeInDownBig}`};
`

export default FadeInDown
