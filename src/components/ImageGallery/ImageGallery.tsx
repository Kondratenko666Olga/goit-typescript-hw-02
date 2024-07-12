import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

interface Image {
  id: string;
  urls: {
    thumb: string;
  };
  alt_description?: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.cardList}>
      {images.map(image => (
        <li
          className={styles.galleryItem}
          key={image.id}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
