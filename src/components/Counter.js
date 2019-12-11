import React from 'react';
import { connect } from 'react-redux';
// STEP 9 OF THE GENERAL STEPS (A)
import { increment, decrement } from '../state/actionCreators';

// THESE PROPS ARE ACTUALLY INJECTED BY
// OUR 1st arg of connect 'count' makes it in as a prop
// OUR 2nd arg of connect 'increment' and 'decrement' make it in as props
export function Counter({ count, increment, decrement }) {
  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
    </div>
  );
}

// STEP 8 OF THE GENERAL STEPS
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}
export default connect(
  mapStateToProps, // injects props into Counter
  { increment, decrement }, // STEP 9 OF THE GENERAL STEPS (B)
)(Counter);
