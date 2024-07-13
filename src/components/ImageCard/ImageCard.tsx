interface Image {
  urls: {
    thumb: string;
    regular: string;
  };
  alt_description?: string;
}

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <img src={image.urls.thumb} alt={image.alt_description} />
  );
};

export default ImageCard;