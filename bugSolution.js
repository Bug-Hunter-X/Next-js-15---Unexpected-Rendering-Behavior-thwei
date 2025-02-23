```javascript
// pages/index.js

export default function Home() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      //Simulate fetching data
      const res = await fetch('/api/data');
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, []);
  if (!data) return <p>Loading...</p>;
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Data fetched successfully' });
}
```