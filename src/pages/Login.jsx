import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import styled from "styled-components";
import Header from "../components/Header";
import Id from "../assets/id.png";
import Pw from "../assets/pw.png";
import Idcheck from "../assets/idcheck.png"

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
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  margin: 7px 0px 25px 0px;
`;


const Textarea = styled.input`
    font-size: 16px; 
    line-height: 20px;
    border: none;
    border-radius: 15px;
    margin: 5px 20px;
    padding: 10px;
    resize: none;
    background-color: #EEEEEE;
    width: 350px; 
    height: 45px;
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

const LoginButton = styled(Button)`
  &&& {
    padding: 13px 70px;
    margin: 15px 0px 20px 0px;
    font: bold 20px;
  }
`;

const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  margin: 15px 230px 5px 0px;
  
  
`;

const IdCheck = styled.input`
  appearance: none;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  border-color: #85A1E8;
  border-width: 3px;
  &:checked {
    border-color: transparent;
    background-image: url(${Idcheck});
    background-size: 100%;
    background-repeat: no-repeat;
    border-color: #85A1E8;
    border-width: 3px;
  }
`;
const Find = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

`;

const FindLabel =styled.label`
  cursor: pointer;
  font-size: 16px;
  margin: 5px 10px 5px 0px;
  color: #ccc;

  &:hover {
    color: #555;
  }
`;

const Divider = styled.div`
  width: 1.8px;
  height: 18px;
  margin: 5px 9px 0px 0px;
  background-color: #ccc;
`;

function Login(props) {

    const { title, onClick, disabled, className } = props;

    let navigate = useNavigate();

    return (
      <Wrapper>
        <Header/>
        <Box>
            <Text>로그인</Text>
            <Textarea type="text" img={Id} placeholder="아이디"/>

            <Textarea type="password" img={Pw} placeholder="비밀번호" maxLength={12}/>

            <CheckDiv>
              <IdCheck
                type="checkbox"
                id="check"
              />
              <label for="check">
                아이디 저장
              </label>
            </CheckDiv>

            <LoginButton
              title="로그인"
              onClick={()=>{navigate("/")}}
              disabled={disabled}
            />
            <Find>
              <FindLabel id="login" onClick={()=>{navigate("/pw-find")}}>
                비밀번호 찾기
              </FindLabel>
              <Divider />
              <FindLabel id="signup" onClick={()=>{navigate("/sign-up")}}>
                회원가입
              </FindLabel>
            </Find>
        </Box>
      </Wrapper>
    );
  }
  
  export default Login;