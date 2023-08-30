import {ColorPicker} from "antd";
import {Color} from "antd/es/color-picker";
import {Header} from "antd/lib/layout/layout";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AppHeader = styled(Header)`
  height: 4.8rem;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #dedede;
`

export default function Layout({primaryColor, handleSetPrimaryColor}: {
    primaryColor: string,
    handleSetPrimaryColor: (value: Color) => void
}) {
    return <AppContainer>
        <AppHeader>
            <ColorPicker value={primaryColor} onChangeComplete={handleSetPrimaryColor}/>
        </AppHeader>

    </AppContainer>
}