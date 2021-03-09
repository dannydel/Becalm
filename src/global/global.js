import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }

    body {
      background: ${({ theme }) => theme.body};
      background: ${({ theme }) => theme.gradient};
      background-repeat: no-repeat;
      color: ${({ theme }) => theme.text};
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    
      width: 100%;
      height: 100%;
    }
    
    #theme-button{
      border-color: ${({ theme }) => theme.text};
    
      background: ${({ theme }) => theme.themeGradient};
      background-size: 200% 100%;
      background-position: right bottom;
      transition: background 1s ease;
    }

    #space,
    .stars{
      visibility : ${({ theme }) => theme.stars} !important;
    }

    .circle{
      top: -85px;
    left: -25px;
      position: relative;
      height:200px;
      width:200px;
      border-radius:50%;
    }

    .circle-small{
      position: relative;
      height:100px;
      width:100px;
      border-radius:50%;
    }

    .start{
      background-color: transparent;
      color: ${({ theme }) => theme.text};
      border-color:transparent;
      font-size: 1.4rem;
      letter-spacing: .5rem;
      text-transform: uppercase;

      transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
      
      cursor: pointer;
      user-select: none;
    }

    .stop{
      background-color: transparent;
      color: ${({ theme }) => theme.text};
      border-color:transparent;
      font-size: 1 rem;
      letter-spacing: .5rem;
      text-transform: uppercase;

      transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
      
      cursor: pointer;
      user-select: none;
    }

  .start:hover, .stop:hover {
    color: ${({ theme }) => theme.body};
    transition-delay: 0.5s;
    background-color: ${({ theme }) => theme.text};
    opacity:.8;
    -o-transition-delay: 0.35s;
    -moz-transition-delay: 0.35s;
    -webkit-transition-delay: 0.35s;
  }

  .start:hover:before, stop:hover:before {
    transition-delay: 0s;
    -o-transition-delay: 0s;
    -moz-transition-delay: 0s;
    -webkit-transition-delay: 0s;
  }

  .count-wrapper {
    margin:auto;
    width: 100%;
    height: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    transform: translateY(50px);
  }

  /* Count Down Timer Styles */
  .display-container {
    margin: auto;
  }
  
  .timer-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0 25px;
  }
  
  .circle__progress {
    fill: none;
    stroke-width: 3;
    stroke-opacity: 0.3;
    stroke-linecap: round;
  }
  
  .timer-display .circle__progress {
    stroke: ${({ theme }) => theme.text};
  }
  
  .circle {
    position: relative;
  }
  
  .percent {
    width: 100%;
    top: 50%;
    left: 50%;
    position: absolute;
    font-weight: bold;
    text-align: center;
    line-height: 145px;
    transform: translate(-40%, -50%);
    bottom:-40px;
  }
  
  .percent__int {
    font-size: 55px;
  }
  .percent__dec {
    display:none;
    font-size: 12px;
  }
  
  .circle__progress--fill {
    --initialStroke: 0;
    --transitionDuration: 0;
    stroke-opacity: 1;
    stroke-dasharray: var(--initialStroke);
    stroke-dashoffset: var(--initialStroke);
    transition: stroke-dashoffset var(--transitionDuration) linear;
  }
  
  .circle__svg {
    transform: rotate(-90deg);
  }
`;
