import {useState} from "react";
import {ConfigProvider, theme} from "antd";
import {Color} from "antd/es/color-picker";
import {StyleProvider, px2remTransformer} from '@ant-design/cssinjs';
import './App.css';
import Layout from "./pages/layout/Layout.tsx";
import LoginWrapper from "./pages/login/LoginWrapper.tsx";


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
        <StyleProvider transformers={[px2rem]}>
            <Layout primaryColor={primaryColor}
                    handleSetPrimaryColor={(color: Color) => setPrimaryColor(color.toHexString())}/>
            <LoginWrapper/>
        </StyleProvider>
    </ConfigProvider>
}

export default App
