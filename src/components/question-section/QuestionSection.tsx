/** Components */
import QuestionCard from '../question-card/QuestionCard';

/** Styles */
import styles from './QuestionSection.module.css';

const QuestionSection = () => {
  return (
    <section className={styles.questionSection}>
      <h3 className={styles.title}>What BVG Ticket Do You Need?</h3>
      <p>Answer few simple questions and you'll get an advice</p>
      <QuestionCard />

      <div className={styles.line}></div>
    </section>
  );
};

export default QuestionSection;
