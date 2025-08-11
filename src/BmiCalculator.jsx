// BmiCalculator.jsx
import React, { useState } from 'react';
import './BmiCalculator.css';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [extraFeedback, setExtraFeedback] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height!');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (
      parseFloat(weight) /
      (heightInMeters * heightInMeters)
    ).toFixed(2);

    setBmi(bmiValue);

    // BMI Category
    let bmiStatus = '';
    if (bmiValue < 18.5) {
      bmiStatus = 'Underweight';
    } else if (bmiValue < 24.9) {
      bmiStatus = 'Normal weight';
    } else if (bmiValue < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obesity';
    }
    setStatus(bmiStatus);

    // Extra feedback on height/weight
    let feedback = '';
    if (parseFloat(height) < 150) {
      feedback += 'Your height is below average. ';
    } else if (parseFloat(height) > 190) {
      feedback += 'Your height is above average. ';
    } else {
      feedback += 'Your height is within the average range. ';
    }

    if (parseFloat(weight) < 50) {
      feedback += 'Your weight is below average.';
    } else if (parseFloat(weight) > 90) {
      feedback += 'Your weight is above average.';
    } else {
      feedback += 'Your weight is within the average range.';
    }

    setExtraFeedback(feedback);
  };

  return (
    <div className='container'>
      <h1>BMI Calculator</h1>
      <div className='input-group'>
        <label>
          Weight (kg):
          <input
            type='number'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder='Enter your weight'
          />
        </label>
      </div>
      <div className='input-group'>
        <label>
          Height (cm):
          <input
            type='number'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder='Enter your height'
          />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate</button>

      {bmi && (
        <div className='result'>
          <h3>Your BMI: {bmi}</h3>
          <h3>Status: {status}</h3>
          <p>{extraFeedback}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
