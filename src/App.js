import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input'

import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [operacao, setOperacao] = useState("0");
  const [memoria, setMemoria] = useState("0");
  const [flag, setFlag] = useState(true)

  function clickButton(tecla)
  {
    if (!isNaN(parseFloat(tecla)) && isFinite(tecla))
    {
      digitaNumero(tecla);
    } else {
      teclaOperacaos(tecla)
    }
  }

  function digitaNumero(tecla)
  {
    if (currentNumber === "0" || flag)
    {
      setCurrentNumber(tecla)
      setFlag(false)
    } else {
      setCurrentNumber(currentNumber + tecla)
    }
  }

  function teclaOperacaos(tecla)
  {
    switch (tecla){
      case "C":
        limpar();
        break;
      case "=":
        calculaResultado();
        break;
      default:
        setOperacao(tecla)
        if (operacao !== "0"){
          calculaResultado();
        } else {
          setMemoria(currentNumber);          
        }
        setFlag(1);
    }

  }

  function limpar()
  {
    setCurrentNumber('0');
    setMemoria("0");
    setOperacao("0");
    setFlag("0");
  }

  function calculaResultado()
  {
    const val1 = Number(memoria);
    const val2 = Number(currentNumber);
    let resultado;
    switch (operacao) {
      case "+":
        resultado = val1 + val2;
        break;
      case "-":
        resultado = val1 - val2;
        break
      case "*":
        resultado = val1 * val2;
        break;
      default:
        resultado = val1 / val2;
    }
    setCurrentNumber(resultado);
    setMemoria(resultado)
    setFlag(true);
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="/" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="*" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="C" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="=" onClick={(e) => clickButton(e.target.innerText)}/>
        </Row>
        <Row>
          <Button label="7" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="8" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="9" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="-" onClick={(e) => clickButton(e.target.innerText)}/>
        </Row>
        <Row>
          <Button label="4" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="5" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="6" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="+" onClick={(e) => clickButton(e.target.innerText)}/>
        </Row>
        <Row>
          <Button label="1" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="2" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="3" onClick={(e) => clickButton(e.target.innerText)}/>
          <Button label="0" onClick={(e) => clickButton(e.target.innerText)}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
