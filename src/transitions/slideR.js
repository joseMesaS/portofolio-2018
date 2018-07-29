import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'slideR'
const duration = 1500

const slideOut = keyframes`
0%, 25% { transform: translateX(0) translateY(-100%); }
100% { transform: translateX(100%) translateY(-100%); }
`
const slideIn = keyframes`
0%, 25% { transform: translateX(-100%); }
100% { transform: translateX(0); }
`
injectGlobal`
.${transitionClassName}-enter, .${transitionClassName}-exit {
    position: relative;
  }  
.${transitionClassName}-exit-active {
  animation: ${slideOut} ${duration}ms both ease;
  z-index: 1;
}
.${transitionClassName}-enter-active {
  animation: ${slideIn} ${duration}ms both ease;
  z-index: 2;
}
`

export default { transition: transitionClassName, duration }