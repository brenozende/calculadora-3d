import { useState } from 'react'
import { calculatePro } from './services/calculator/calculatePro';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    weight: 17,
    pricePerKg: 69.99,
    printHours: 2,
    postProcessHours: 0,
    materialType: { name: "PLA", multiplier: 0.8},
    machineEfficiency: 1.0,
    energyCostPerKwh: 0.72,
    machineHourlyCost: 0.9,
    hourlyRate: 40,
    isExclusive: false,
    exclusiveMultiplier: 4.5,
  })

  const handleSubmit = () => {
    const result = calculatePro(formData);
    console.log(result);
  };

  return (
    <div>
      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
}

export default App;
