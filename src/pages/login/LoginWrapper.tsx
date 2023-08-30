import {Card} from "antd";
import styled from "@emotion/styled";
import LoginForm from "./LoginForm.tsx";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(-180deg, rgb(0, 51, 102) 11.2%, rgb(255, 255, 255) 91.1%);
`;

const ShadowCard = styled(Card)`
  width: 32rem;
  box-shadow: rgba(0, 0, 0, .3) 0 0 5rem .5rem;
  text-align: center;
`

export default function LoginWrapper() {
    return <Container>
        <ShadowCard>
            <h2>欢迎登录</h2>
            <LoginForm/>
        </ShadowCard>
    </Container>
}