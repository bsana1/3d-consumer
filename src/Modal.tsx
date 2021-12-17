//import './Modal.css'

const Modal = ({ onClose }: { onClose?: any }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose && onClose()}>&times;</span>
        <iframe id="shop-in-3d-frame" src="http://localhost:9090?type=cylinder&color=blue&width=800&height=500" width="100%" height="100%" frameBorder="0" />
      </div>
    </div>
  )
}

export default Modal