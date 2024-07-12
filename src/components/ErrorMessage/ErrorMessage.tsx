interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div style={{ color: 'red', textAlign: 'center' }}>{message}</div>;
};

export default ErrorMessage;