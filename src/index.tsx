import ReactDOM from "react-dom";
import { RemoteComponent } from "@paciolan/remote-component";
import reportWebVitals from './reportWebVitals';

//const url = "https://localhost:8094/react-shop-in-3d.js"; // prettier-ignore
const url = "http://localhost:9090/main.js";

const ShopIn3dPlayer = ({ color, type }: any) => {
  return <RemoteComponent url={url} color={color} type={type} />;
}

ReactDOM.render(
  <ShopIn3dPlayer color='red' type='cube' />,
  document.getElementById('shop-in-3d-root')
);

reportWebVitals();
