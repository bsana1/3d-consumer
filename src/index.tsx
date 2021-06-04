import { useState } from 'react'
import ReactDOM from "react-dom";

import OptionsMenu from './OptionsMenu';
import Modal from './Modal';
import reportWebVitals from './reportWebVitals';
import './index.css';

//const url = "https://localhost:8094/react-shop-in-3d.js"; // prettier-ignore
const url = "http://localhost:9090/main.js";

const ShopIn3d = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    return () => {
      setIsModalVisible(false)
    }
  }

   // event handlers
   window.onmessage = function (e: any) {
    if (e.data && e.data.type == "TEST") {
      console.log(`**** OMG!!!: [${e.data.type}, ${e.data.value}]`);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <OptionsMenu />

        <button className="modal-button"onClick={() => { setIsModalVisible(!isModalVisible) }} >
          Show in modal
        </button>
      </div>

      <div className="content">
        {
          isModalVisible && <Modal onClose={closeModal} />
        }

        {!isModalVisible && (
          <div className="iframe-container">
            <iframe id="shop-in-3d-frame" src="http://localhost:9090?type=cube&color=red&width=800&height=500" width="100%" height="100%" frameBorder="0" />
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(
  <ShopIn3d />,
  document.getElementById('shop-in-3d-root')
);

reportWebVitals();
