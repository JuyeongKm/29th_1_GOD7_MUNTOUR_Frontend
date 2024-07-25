import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import styled from "styled-components";
import Header from "../components/Header";
import Id from "../assets/id.png";
import Pw from "../assets/pw.png";
import CheckPw from "../assets/check.png";

const Wrapper = styled.div`
  width: 100%;

  //임시 중앙정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  //임시 height
  height: 700px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ title }) => (title ? 'center' : 'flex-start')};
  font-weight: bold;
  font-size: ${({ title }) => (title ? '20px' : '15px')};
  margin: ${({ title }) => (title ? '5px 0px 25px 0px' : '10px 230px 0px 0px')};
`;

const Idarea = styled.label`
  display: flex;
  width: 350px;
  height: 50px;
  position: relative;
  margin: 7px 20px;
`;


const Textarea = styled.input`
    font-size: 16px; 
    line-height: 20px;
    border: none;
    border-radius: 3px;
    margin: 5px 20px;
    padding: 10px;
    resize: none;
    background-color: #EEEEEE;
    width: 350px; 
    height: 40px;
    outline: none;
      
    &::placeholder {
      font-size: 13px; 
      color: #9E9E9E;
      background: url(${props => props.img || Id}) no-repeat left center; 
      background-size: contain; // 이미지 크기 조정
      padding-left: 30px; // 이미지와 텍스트 사이 여백
      line-height: 1.5;  //텍스트와 이미지 세로 정렬
    }

`;

const Divider = styled.div`
  width: 350px;
  height: 1px;
  background-color: #CCC;
  margin: 20px 0;
`;

const NewButton = styled(Button)`
  &&& {
    padding: ${({ sign }) => (sign ? '13px 60px' : '13px 13px')};
    font-size: ${({ sign }) => (sign ? '20px' : '11px')};
    border-radius: ${({ sign }) => (sign ? '30px' : '3px')};
    white-space: nowrap;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 0px 60px 0px 0px;
`;



const InterestButton = styled(Button)`
  &&& {
    background-color: #EEEEEE;
    color: black;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 15px;
    border-radius: 7px;

    &:hover {
      background-color: #85A1E8;
      color: white;
    }

  }
`;

function SignUp(props) {

  let navigate = useNavigate();

  const { title, onClick, disabled, className } = props;
  
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

    return (
      
      <Wrapper>
        <Header/>
        <Box>
            <Text title>회원가입</Text>
            <Idarea>
              <Textarea type="text" img={Id} placeholder="아이디"/>
              <NewButton
                overlap
                title="중복확인"
                onClick={onClick}
                disabled={disabled}
              />
            </Idarea>
            <Textarea type="password" img={Pw} placeholder="비밀번호" maxLength={12}/>
            <Textarea type="password" img={CheckPw} placeholder="비밀번호 확인" maxLength={12}/>

            <Divider />

            <Text>1. 이름(닉네임) *</Text>
            <Textarea/>

            <Text>2. 관심분야(선택)</Text>
            <ButtonGroup>
            {['공연', '전시', '스포츠', '도서'].map((title, index) => (
            <InterestButton
              key={title}
              active={activeButton === index}
              title={title}
              onClick={() => handleButtonClick(index)}
              disabled={disabled}
            >
              {title}
            </InterestButton>
          ))}
        </ButtonGroup>

            <NewButton
              sign
              title="회원가입"
              onClick={()=>{navigate("/login")}}
              disabled={disabled}
            />            
        </Box>
      </Wrapper>
    );
  }
  
  export default SignUp;