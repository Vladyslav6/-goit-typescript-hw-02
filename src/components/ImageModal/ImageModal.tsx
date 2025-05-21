import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

const rootElement = document.getElementById("root");
if (rootElement) {
  Modal.setAppElement(rootElement);
}
const ImageModal = ({ isOpen, onRequestClose, currentImage }) => {
  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onRequestClose}>
      {currentImage && <img src={currentImage} alt="Selected" />}
    </Modal>
  );
};
export default ImageModal;
