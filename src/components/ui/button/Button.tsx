/** Styles */
import styles from './Button.module.css';

interface ButtonProps {
  appearance: 'normal' | 'inversed';
  text: string;
  actionHandler: () => void;
}

const Button: React.FC<ButtonProps> = ({ appearance, text, actionHandler }) => {
  return (
    <button
      className={`${styles.button} ${appearance === 'inversed' ? styles.inversed : ''}`}
      onClick={actionHandler}
    >
      {text}
    </button>
  );
};

export default Button;
