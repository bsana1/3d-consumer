import ReactDOM from "react-dom";
import { RemoteComponent } from "@paciolan/remote-component";
import reportWebVitals from './reportWebVitals';
import './index.css';

//const url = "https://localhost:8094/react-shop-in-3d.js"; // prettier-ignore
const url = "http://localhost:9090/main.js";

const ShopIn3d = ({ color, type }: any) => {
  const node: any = document.getElementById('shop-in-3d-frame');
  console.log("###", node)
  return (
    <div className="wrapper">
      <div className="options-menu">
        <ul>
          <li onClick={() => { node && node.contentWindow.postMessage({ type: 'change-model', value: 'cylinder' }, '*'); }}>device 1</li>
          <li>device 2</li>
          <li>device 3</li>
          <li>device 4</li>
          <li>device 5</li>
        </ul>
      </div>
      <div id="root" >
        <RemoteComponent url={url} color={color} type={type} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <ShopIn3d color='red' type='cube' />,
  document.getElementById('shop-in-3d-root')
);

reportWebVitals();
