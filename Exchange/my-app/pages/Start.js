import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>Welcome To The World of DeFI</h1>
        </div>
      ) : (
        // Your main content here
        <div>
          {/* Add your other components/content here */}
        </div>
      )}
    </div>
  );
}

export default App;
