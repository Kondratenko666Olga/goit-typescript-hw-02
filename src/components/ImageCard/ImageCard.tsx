interface ImageCardProps {
  image: {
    urls: {
      thumb: string;
    };
    alt_description?: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <img src={image.urls.thumb} alt={image.alt_description} />
  );
};

export default ImageCard;
