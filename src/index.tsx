import ReactDOM from "react-dom";
import { RemoteComponent } from "@paciolan/remote-component";
import reportWebVitals from './reportWebVitals';
import './index.css';

const url = "http://localhost:3001/?experienceId=af23c46a-3423-4bf9-b239-d04883d9aebf&clientId=PDPb452dcbe";

declare global {
  interface Window {
    microsoft: {
      si3d: {
        api: any;
      };
    };
  }
}


const ShopIn3d = ({ color, type }: any) => {
  const node: any = document.getElementById('shop-in-3d-frame');

  /*const sendMessage = (message: any) => {
    const channel = new MessageChannel();
    node && node.contentWindow.postMessage(message, '*', [channel.port2]);

      channel.port1.onmessage = (message: any) => {
        const lastResponse = message?.data;
        window.microsoft.si3d.api.lastResponse = lastResponse;
        console.log(lastResponse);
      }
  }

  const api = {
    getPens: () => sendMessage({ type: 'getPens' }),
    getTypeCovers: () => sendMessage({ type: 'getTypeCovers' }),
    getDeviceSizes: () => sendMessage({ type: 'getDeviceSizes' }),
    getDeviceColors: () => sendMessage({ type: 'getDeviceColors' }),
    removePenByColorName: (colorName: string) => sendMessage({ type: 'removePenByColorName', colorName }),
    removeTypeCoverByColorName: (colorName: string) => sendMessage({ type: 'removeTypeCoverByColorName', colorName }),
    removeDeviceSizeByValue: (deviceSize: string) => sendMessage({ type: 'removeDeviceSizeByValue', deviceSize }),
    removeDeviceColorByName: (colorName: string, deviceSize: string) => sendMessage({ type: 'removeDeviceColorByName', deviceSize, colorName })
  }

  window.microsoft = {
    si3d: {
      api
    }
  };*/
  return (
    <div className="wrapper">
      <div className="options-menu">
        <ul>
          <li onClick={() => {
            node && node.contentWindow.postMessage({ type: 'change-model', value: 'cylinder' }, '*');
            console.log("sent!")
          }}>device 1</li>
          <li>device 2</li>
          <li>device 3</li>
          <li>device 4</li>
          <li>device 5</li>
        </ul>
      </div>
      {/*<div id="root" >
        <RemoteComponent url={url} color={color} type={type} />
  </div>*/}
    </div>
  );
}

ReactDOM.render(
  <ShopIn3d color='red' type='cube' />,
  document.getElementById('shop-in-3d-root')
);

reportWebVitals();
