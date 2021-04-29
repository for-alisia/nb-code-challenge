/** Dependencies */
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/helpers/use-store';

/** Components */
import AnswerList from '../answer-list/AnswerList';
import { Button } from '../ui';

/** Styles */
import styles from './AnswerSection.module.css';

const AnswerSection = () => {
  const {
    treeStore: { start },
  } = useStore();
  return (
    <section className={styles.answerSection}>
      <div>
        <h3 className={styles.title}> Let's see what we can find for you...</h3>
        <p>Tickets we advice you to consider</p>
      </div>

      <AnswerList />
      <div>
        <h3 className={styles.title}>Hope We Could Help You</h3>
        <Button appearance="inversed" text="Try To Find Again" actionHandler={start} />
      </div>

      <div className={styles.line}></div>
    </section>
  );
};

export default observer(AnswerSection);
