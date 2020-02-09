import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/counter';
import { increase, decrease } from '../moudules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 상태
const mapStateToProps = state => ({
  number: state.counter.number,
});

// 액션 함수
const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
  },

  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(
  // mapStateToProps,
  // mapDispatchToProps

  // 취향에 따라 익명함수로 사용해도 된다
  state => ({
    number: state.counter.number,
  }),

  // dispatch => ({
  //   increase: () => dispatch(increase()),
  //   decrease: () => dispatch(decrease()),
  // }),

  //더 간결한 방법
  {
    increase,
    decrease,
  },
)(CounterContainer);
