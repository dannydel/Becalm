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
      transform: translate(0px, -10px);
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
    transform: translate(10px,-5px);
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
    stroke-width: 10;
    stroke-opacity: 0.3;
    stroke-linecap: square;
  }
  
  .timer-display .circle__progress {
    stroke: ${({ theme }) => theme.text};
  }
  
  .circle {
    position: relative;
  }
  
  .percent {
    width: 100%;
    position: absolute;
    font-weight: bold;
    text-align: center;
    line-height: 145px;
    top: 50%;
    left: 50%;
    bottom: -10%;
    transform: translate(-77px, -55px);
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

  /**TIME SLIDER**/
.slide-container {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background:${({ theme }) => theme.text}; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: ${({ theme }) => theme.text}; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

footer{
  padding: 0 0 10px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #000;
}
`;
