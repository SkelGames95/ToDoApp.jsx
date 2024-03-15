import partialTitle from './assets/partialTitle.png';
import classes from './style/Title.module.scss'

export const Title = () => {
  return (
    <div className={classes.header}>
        <h1>
            <span className={classes.headerTitle}>To</span>
            <img src={partialTitle} className={classes.partialTitle} alt="partial title" />
            <span className={classes.headerTitle}>APP</span>
        </h1>
    </div>
  );
};
