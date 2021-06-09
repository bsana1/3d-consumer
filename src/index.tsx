import { useState } from 'react'
import ReactDOM from "react-dom";

import OptionsMenu from './OptionsMenu';
import Modal from './Modal';
import Embedded3dPlayer from './Embedded3dPlayer';
import reportWebVitals from './reportWebVitals';
import './index.css';


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
    <div className="root">
      <div className="wrapper">
        <OptionsMenu />

        <button className="modal-button" onClick={() => { setIsModalVisible(!isModalVisible) }} >
          Show in modal
        </button>
      </div>

      <div className="content">
        {
          isModalVisible && <Modal onClose={closeModal} />
        }

        {!isModalVisible && <Embedded3dPlayer />
        }
      </div>
    </div>
  );
}

ReactDOM.render(
  <ShopIn3d />,
  document.getElementById('shop-in-3d-root')
);

reportWebVitals();
