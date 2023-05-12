import React from 'react';
import styled from 'styled-components';


const StSelectBorder = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;

const StSelectBox = styled.div`
  display: flex;
  gap: 10px;
`;

const StSelect = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;

const StOption = styled.option`

`

function Select() {
  return (
    <StSelectBorder>
      <h1>Select</h1>
      <StSelectBox>
        <StSelect>
       
          <StOption value="java">자바</StOption>
          <StOption value="react">리액트</StOption>
          <StOption value="spring">스프링</StOption>
          <StOption value="react-native">리액트네이티브</StOption>
         
        </StSelect>


        <StSelect>

          <option value="java">자바</option>
          <option value="react">리액트</option>
          <option value="spring">스프링</option>
          <option value="react-native">리액트네이티브</option>

        </StSelect>
      </StSelectBox>
    </StSelectBorder>
  );
}

export default Select;
