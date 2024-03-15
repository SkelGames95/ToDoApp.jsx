import classes from './style/App.module.scss';
import { Title } from "./Title";

const App = () => {
  return (
    <div className={classes.structure}>
      <Title />
      
      {/* <Sidebar /> */}
      {/* <Body /> */}
    </div>
  );
};
export default App;
