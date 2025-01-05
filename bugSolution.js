```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cleanup = false;
    if (count > 5) {
      cleanup = true;      
      setCount(0);
    }
    return ()=>{ cleanup = false}
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```