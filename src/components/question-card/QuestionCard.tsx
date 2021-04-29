/** Dependencies */
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/helpers/use-store';

/** Components */
import { Button } from '../ui';

/** Styles */
import styles from './QuestionCard.module.css';

const QuestionCard = () => {
  const {
    treeStore: { current, next },
  } = useStore();

  return (
    <div className={styles.questionCard}>
      {current && !current.done ? (
        <>
          <h3 className={styles.questionTitle}>{current.question}</h3>
          <div className={styles.controls}>
            {current.options &&
              current.options.map((option) => (
                <Button
                  key={option.value}
                  text={option.value}
                  appearance="normal"
                  actionHandler={() => next(option)}
                />
              ))}
          </div>
        </>
      ) : (
        <div className={styles.questionTitle}>We are done! Look the results</div>
      )}
    </div>
  );
};

export default observer(QuestionCard);
