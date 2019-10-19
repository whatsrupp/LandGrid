import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import Chart from './Chart';

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  background: rgb(0,21,52);
  background: linear-gradient(90deg, rgba(0,21,52,1) 0%, rgba(0,21,52,1) 90%, rgba(255,84,112,1) 100%);
`;

function App() {
  return (
    <>
      <StyledApp>
        
      <Chart/>
      </StyledApp>
    <GlobalStyle />
    </>
  );
}




export default App;
