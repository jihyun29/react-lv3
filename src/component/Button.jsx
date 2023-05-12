import React from 'react'
import styled from 'styled-components'

const StButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const StButtonMintLarge = styled.button`
  border: 3px solid rgb(85, 239, 196);
  border-radius: 8px;
  background-color: white;
  color: rgb(0, 0, 0);
  height: 50px;
  width: 200px;
  font-weight: 600;
  cursor: pointer;

  
`;

const StButtonMintMedium = styled.button`
  border: none;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 45px;
  width: 130px;
  cursor: pointer;

  &:active {
        background-color: lightblue;
    }
  

`;

const StButtonMintSmall = styled(StButtonMintMedium)`
  height: 40px;
  width: 100px;
`;

const StButtonRedLarge = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(214, 48, 49);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(250, 177, 160);
    background-color: rgb(255, 255, 255);
    font-weight: 600;
`;


const StButtonRedMeium = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
    height: 45px;
    width: 130px;

    &:active {
        background-color: lightpink;
    }

`;

const StButtonRedSmall = styled(StButtonRedMeium)`
  height: 40px;
  width: 100px;
`;



function Button() {
  return (
    <div>
      <h1>Button</h1>
      <StButtonBox>
      <StButtonMintLarge onClick={()=>{alert("버튼을 만들어보세요")}}>Large Primary Button 

      {/* 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현하세요. */}
      
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L1 9" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </StButtonMintLarge>
      <StButtonMintMedium>Medium</StButtonMintMedium>
      <StButtonMintSmall>Small</StButtonMintSmall><br/>
      </StButtonBox>
      <StButtonBox>
      <StButtonRedLarge onClick={()=>{prompt("어렵나요?")}}>Large Primary Button
      <svg width="14" height="17" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 23.5C11.1046 23.5 12 22.6046 12 21.5C12 20.3954 11.1046 19.5 10 19.5C8.89543 19.5 8 20.3954 8 21.5C8 22.6046 8.89543 23.5 10 23.5ZM10 26C12.4853 26 14.5 23.9853 14.5 21.5C14.5 19.0147 12.4853 17 10 17C7.51472 17 5.5 19.0147 5.5 21.5C5.5 23.9853 7.51472 26 10 26Z" fill="black"></path><path d="M0 11C0 5.47715 4.47715 1 10 1C15.5228 1 20 5.47715 20 11V19C20 20.1046 19.1046 21 18 21H2C0.895431 21 0 20.1046 0 19V11Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 18.5V11C17.5 6.85786 14.1421 3.5 10 3.5C5.85786 3.5 2.5 6.85786 2.5 11V18.5H17.5ZM10 1C4.47715 1 0 5.47715 0 11V19C0 20.1046 0.895431 21 2 21H18C19.1046 21 20 20.1046 20 19V11C20 5.47715 15.5228 1 10 1Z" fill="black"></path><circle cx="17.5" cy="4.5" r="4.5" fill="#EB4C4C"></circle></svg>
      </StButtonRedLarge>
      <StButtonRedMeium>Medium</StButtonRedMeium>
      <StButtonRedSmall>Small</StButtonRedSmall>
      </StButtonBox>
    </div>
  )
}

export default Button