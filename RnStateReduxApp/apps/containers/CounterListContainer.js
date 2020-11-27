/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import App from '../components/App';
import * as actions from '../actions';

const mpaStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: (index) => dispatch(actions.increment(index)),
    handleDecrement: (index) => dispatch(actions.decrement(index)),
    handleAddCounter: () => dispatch(actions.add()),
    handleRemoveCounter: () => dispatch(actions.remove()),
});

// connect(state, action매핑값)(Presentation[Component dir] comp연결);
const CounterListContainer = connect(
    mpaStateToProps, mapDispatchToProps
)(App);

export default CounterListContainer;
