import H1 from './components/Title';
import { DefaultButton, ExtendedButton } from './components/Button';
import styled from 'styled-components';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
    <Wrapper />
    <div>
      <H1>Styled Components</H1>
      <p>Cillum culpa deserunt enim et eiusmod quis proident consequat tempor ipsum sunt esse.</p>
      <DefaultButton>Click ME!</DefaultButton>
      <ExtendedButton red>Click ME!</ExtendedButton>
    </div>
    <div>
    <Wraper>
        <h1>Another heading</h1>
        <p>Another para</p>
        <button>Another button</button>
      </Wraper>
    </div>
   
    </>
  );
}

const Wraper = styled.div`
h1{
  text-align: center;
  color: violet;
}

p{
  font-size: 40px;
}

button{
  background-color: pink;
  padding: 4px 8px;
  border: none;  
}
`

export default App;