# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React applications involving an infinite update loop within the `useEffect` hook. The bug arises from incorrect conditional logic within the `useEffect` callback, leading to continuous state updates.

## Bug Description
The `MyComponent` component utilizes the `useState` hook to manage a counter. The `useEffect` hook is intended to reset the counter to 0 when it exceeds 5. However, the provided logic causes an infinite loop because each state update triggers another `useEffect` call, leading to an endless cycle of updates.

## Bug Solution
The solution addresses the infinite loop by modifying the conditional logic within `useEffect`. It prevents triggering an update if the component unmounts before the condition is met by using the `return` statement inside useEffect to cleanup the function call.