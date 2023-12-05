import Input from "./components/Input"; 
import Button from "./components/Button";

import { Container, Content, Row} from './styles';
import { useState } from "react";
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const handleAddNumber = (num) =>{
    setCurrentNumber(prev => `${num}${prev === '0' ? '' : prev}`)
  }
  const handleOnClear = () =>{
    setCurrentNumber('0')
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear()
    }else{
      const sum = Number(firstNumber) + Number(currentNumber())
      setCurrentNumber(String(sum))
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={() => handleAddNumber('×')}/>
          <Button label="%" onClick={() => handleAddNumber('÷')}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="÷" onClick={() => handleAddNumber('%')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="×" onClick={() => handleAddNumber('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => handleAddNumber('-')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumber}/>
        </Row>
        <Row>
          <Button label=" "/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={() => handleAddNumber('=')}/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;