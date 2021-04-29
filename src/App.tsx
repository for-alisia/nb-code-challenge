/** Components */
import AnswerSection from './components/answer-section/AnswerSection';
import QuestionSection from './components/question-section/QuestionSection';

/** Styles */
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <QuestionSection />
      <AnswerSection />
    </div>
  );
}

export default App;
