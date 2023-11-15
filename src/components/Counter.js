import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store';

const Counter = () => {
  const value= 5
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  
  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggle())
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(value))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement)
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by {value}</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
