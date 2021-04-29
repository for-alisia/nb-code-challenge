/** Styles */
import styles from './AnswerItem.module.css';

interface AnswerItemProps {
  ticket: string;
  idx: number;
}

const AnswerItem: React.FC<AnswerItemProps> = ({ ticket, idx }) => {
  return (
    <li className={styles.answerItem}>
      <span className={styles.idx}>{idx}</span>
      <span>{ticket}</span>
    </li>
  );
};

export default AnswerItem;
