# 동작 순서

Counter.jsx 버튼 클릭
CounterContainer.jsx 함수 실행 / 액션 발생
reducer를 통해 state 값 변경
Counter.jsx 리랜더링


# thunk

## thunk 만들어보기
```javascript
const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
```

## redux-thunk 라이브러리
```javascript
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

## thunk 사용해보기

modules/counter.js
```javascript
export const increaseAsync = () => dispatch => {
    // 3초 뒤에 action 발생
    setTimeout(() => dispatch(increase()), 3000)
}
export const decreaseAsync = () => dispatch => {
    // 3초 뒤에 action 발생
    setTimeout(() => dispatch(decrease()), 3000)
}
```

components/CounterContainer.jsx
```javascript
    const onIncrease = () => {
        dispatch(increaseAsync())
    }
    const onDecrease = () => {
        dispatch(decreaseAsync())
    }
```