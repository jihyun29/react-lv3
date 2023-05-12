import React, { useState } from 'react'
import styled from 'styled-components'

const StInputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const StInput = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`

const StInputButton = styled.button`
  border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`

function Input() {

  const [name,setName] = useState('');
  const [price,setPrice] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    let inputPrice = event.target.value;

    const numCheck = /^[0-9,]+$/.test(inputPrice);
    // 숫자만 입력가능
    if (!numCheck && inputPrice) return; 

    if (numCheck) {
      const numValue = inputPrice.replaceAll(',', '');
      inputPrice = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    setPrice(inputPrice);
  };
  const changeEventHandler= (event) => {
    event.preventDefault();

    //모두 입력하지 않을 때
    if(name === '' || price === '') {
      alert('이름과 가격 모두 입력해주세요.');
     return;
    } 
     const priceWithoutCommas = price.replace(/,/g, '');
    console.log(name);
    alert(`{name: ${name}, price: ${priceWithoutCommas}}`);

    };

  return (
    <div>
    <h1>Input</h1>
    <StInputBox>
    이름<StInput type='text' onChange={nameChangeHandler} value={name}></StInput>
    가격<StInput type='text' onChange={priceChangeHandler} value={price}/>
    <StInputButton onClick={changeEventHandler}>저장</StInputButton>
    </StInputBox>

    </div>
  )
}

export default Input;