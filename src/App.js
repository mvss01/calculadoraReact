import Input from "./components/Input"; 
import Button from "./components/Button";

import { Container, Content, Row} from './styles';
import { useState } from "react";
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const handleAddNumber = (num) =>{
    if(!isNaN(Number(num))){
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`) 
    }else{
      if(num === ","){
        let lastComma = 0
        let lastOperationChar = 0
        for(let i = 0; i < currentNumber.length; i++){
          if(currentNumber[i] === ","){
            lastComma = i
          }else if(isNaN(Number(currentNumber[i]))){
            lastOperationChar = i
          }
        }
        console.log(lastOperationChar)
        console.log(lastComma)
        if(lastOperationChar >= lastComma && currentNumber.length == 0 ? lastOperationChar != (currentNumber.length - 1) : true){
          setCurrentNumber(prev => `${isNaN(prev[prev.length - 1]) ? prev.substring(0, prev.length - 1) + num : prev + num}`) 
        }
      }else{
        setCurrentNumber(prev => `${isNaN(prev[prev.length - 1]) ? prev.substring(0, prev.length - 1) + num : prev + num}`) 
      }
    }
  }

  const handleOnClear = () =>{
    setCurrentNumber('0')
  }

  const handleOnCalculate = () => {
    console.log(currentNumber)
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label=" "/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="%" onClick={() => handleAddNumber('%')}/>
          <Button label="÷" onClick={() => handleAddNumber('÷')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="×" onClick={() => handleAddNumber('×')}/>
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
          <Button label="+" onClick={() => handleAddNumber('+')}/>
        </Row>
        <Row>
          <Button label=" "/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber(',')}/>
          <Button label="=" onClick={handleOnCalculate}/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
