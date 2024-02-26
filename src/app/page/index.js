'use client'

import { useState, useEffect } from 'react';

const Home = () => {
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/student');
        const data = await response.json();
        setAllStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Students</h1>
      <ul>
        {allStudents.map(student => (
          <li key={student.id}>{student.name} - Roll Number: {student.rollNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
