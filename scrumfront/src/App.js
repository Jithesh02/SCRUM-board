import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Button>Click me</Button>
    </div>
  );
}

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export default App;
