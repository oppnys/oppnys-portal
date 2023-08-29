import {useState} from "react";
import {Card, ColorPicker, ConfigProvider, theme} from "antd";
import {StyleProvider, px2remTransformer} from '@ant-design/cssinjs';
import LoginForm from "./pages/LoginForm.tsx";
import './App.css';

const px2rem = px2remTransformer({
    rootValue: 10, // 10px = 1rem; @default 16
    mediaQuery: true
});


const App = () => {
    const [primaryColor, setPrimaryColor] = useState('#0052cc');

    return <ConfigProvider
        theme={{
            algorithm: theme.compactAlgorithm,
            token: {
                colorPrimary: primaryColor,
            }
        }}
    >
        <ColorPicker value={primaryColor} onChangeComplete={(color) => setPrimaryColor(color.toHexString())}/>
        <StyleProvider transformers={[px2rem]}>
            <Card>
                <LoginForm/>
            </Card>
        </StyleProvider>
    </ConfigProvider>
}

export default App
