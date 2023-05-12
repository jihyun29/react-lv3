


import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackgroundStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`
const ModalStyle = styled.div`
    background-color: white;
    position: relative;
    width: 300px;
    height: 200px;
    margin: 100px auto;
    padding: 20px;
    z-index: 11;
`

const StModalBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const StModalMintButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
`;
const StModalRedButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: rgb(214, 48, 49);
  height: 50px;
  width: 200px;
  border: 3px solid rgb(250, 177, 160);
  background-color: rgb(255, 255, 255);
  font-weight: 600;
`;

const Modal = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleOpenFirstModal = () => {
    setIsFirstModalOpen(true);
  };

  const handleCloseFirstModal = () => {
    setIsFirstModalOpen(false);
  };

  const handleOpenSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const handleCloseSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  return (
    <div>
      <h1>Modal</h1>
      <StModalBox>
        <StModalMintButton onClick={handleOpenFirstModal}>open modal</StModalMintButton>
        <StModalRedButton onClick={handleOpenSecondModal}>open modal</StModalRedButton>
      </StModalBox>

      {/* 첫번째 모달 */}
      {isFirstModalOpen && (
        <ModalBackgroundStyle>
          <ModalStyle onClick={(event) => event.stopPropagation()}>
    
            <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>

            <button onClick={handleCloseFirstModal}>취소</button>
            <button>확인</button>
          </ModalStyle>
        </ModalBackgroundStyle>

      )}

      {/* 두번째 모달 */}

      {isSecondModalOpen && (
        <ModalBackgroundStyle onClick={handleCloseSecondModal}>
          <ModalStyle>
            
            <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>

            <button onClick={handleCloseSecondModal}>X</button>
          </ModalStyle>
        </ModalBackgroundStyle>
      )}
    </div>
  );
};

export default Modal;
