/** Dependencies */
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/helpers/use-store';

/* Component */
import AnswerItem from '../answer-item/AnswerItem';

/** Styles */
import styles from './AnswerList.module.css';

const AnswerList = () => {
  const {
    treeStore: { tickets },
  } = useStore();

  return (
    <ul className={styles.answerList}>
      {tickets.length ? (
        tickets.map((ticket, idx) => <AnswerItem key={ticket} ticket={ticket} idx={idx + 1} />)
      ) : (
        <p className={styles.process}>Just answer simple questions, please</p>
      )}
    </ul>
  );
};

export default observer(AnswerList);
