import Modal from 'react-modal';

interface ImageModalProps {
  image: {
    urls: {
      regular: string;
    };
    alt_description?: string;
  } | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={Boolean(image)}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
      style={{
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <img src={urls.regular} alt={alt_description || 'Image'} />
    </Modal>
  );
};

export default ImageModal;
