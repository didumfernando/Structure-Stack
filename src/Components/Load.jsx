// App.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin, Typography, Statistic, Button } from 'antd';
import CountUp from 'react-countup';
import '../../src/./App.css';
const formatter = (value) => <CountUp end={value} separator="," />;

const { Title } = Typography;

const Load = () => {
  const [loading, setLoading] = useState(true);
  const [userCount, setUserCount] = useState(0);
  
  const navigate = useNavigate()
  const onHome = () => {
    navigate('/', {replace: true})
  }

  useEffect(() => {
    // Simulate fetching user count from an API
    setTimeout(() => {
      setUserCount(5); // Example user count
      setLoading(false);
    }, 1000); // Simulate 2 seconds loading time
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <header className="header">
            <Title level={2} style={{ fontSize: '50px' }}>Structure Stack</Title>
            <h2>Everything & anything about Data Structures & Algorithms</h2>
            <Statistic title="Active Users" value={63} formatter={formatter} />
          </header>
          <div className="content">
            <Button type="primary" size="large" onClick={onHome}>Start Learning</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Load;
