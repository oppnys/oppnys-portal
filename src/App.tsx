import {useState} from "react";
import {ColorPicker, ConfigProvider, Space, theme} from "antd";
import {StyleProvider, px2remTransformer} from '@ant-design/cssinjs';
import LoginForm from "./pages/LoginForm.tsx";

const px2rem = px2remTransformer({
    rootValue: 16, // 16px = 1rem; @default 16
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
            <Space>
                <LoginForm/>
            </Space>
        </StyleProvider>
    </ConfigProvider>
}

export default App
