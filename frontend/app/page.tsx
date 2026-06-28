'use client'
 
import { useState, useEffect } from 'react'
 
function HealthStatus() {
  const [healthCondition, setHealthCondition] = useState("loading");

  useEffect(() => {
    const fetchHealthStatus = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/health');
        const data = await response.json();
        setHealthCondition(data.status);
      } catch (error) {
        console.error('Error fetching health status:', error);
        setHealthCondition("error");
      }
    };
    fetchHealthStatus();
  }, []);

return (
    <div>
      <h1>Health Status</h1>
      <p>{healthCondition}</p>
    </div>
  );
}

export default HealthStatus;  
