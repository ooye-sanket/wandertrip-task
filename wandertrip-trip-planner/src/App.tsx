import { useState } from 'react'
import './App.css'

// Sample data for destinations
const destinations = [
  "Paris, France",
  "Tokyo, Japan",
  "New York, USA",
  "Rome, Italy",
  "Bali, Indonesia",
  "Sydney, Australia",
  "London, UK",
  "Cairo, Egypt",
  "Rio de Janeiro, Brazil",
  "Bangkok, Thailand"
];

// Sample data for interests
const interests = [
  "Food & Dining",
  "History & Culture",
  "Nature & Outdoors",
  "Shopping",
  "Nightlife",
  "Art & Museums",
  "Adventure Activities",
  "Relaxation & Wellness",
  "Family Activities",
  "Local Experiences"
];

function App() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInterestChange = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      <h1 className="title">The Mini Trip Planner</h1>
      
      {!submitted ? (
        <div className="planner-form">
          <form onSubmit={handleSubmit}>
            {/* Destination Input */}
            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input 
                type="text" 
                id="destination"
                list="destination-list"
                placeholder="Where would you like to go?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
                className="input-field"
              />
              <datalist id="destination-list">
                {destinations.map((dest, index) => (
                  <option key={index} value={dest} />
                ))}
              </datalist>
            </div>

            {/* Date Selection */}
            <div className="form-group date-group">
              <div className="date-input">
                <label htmlFor="start-date">Start Date</label>
                <input 
                  type="date" 
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <div className="date-input">
                <label htmlFor="end-date">End Date</label>
                <input 
                  type="date" 
                  id="end-date"
                  value={endDate}
                  min={startDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
            </div>

            {/* Interests Selection */}
            <div className="form-group">
              <label>Select Your Interests</label>
              <div className="interests-container">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-option">
                    <input
                      type="checkbox"
                      id={`interest-${index}`}
                      checked={selectedInterests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                    />
                    <label htmlFor={`interest-${index}`}>{interest}</label>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="submit-btn">Plan My Trip</button>
          </form>
        </div>
      ) : (
        <div className="trip-summary">
          <h2>Your Trip Summary</h2>
          <div className="summary-details">
            <p><strong>Destination:</strong> {destination}</p>
            <p><strong>Dates:</strong> {startDate} to {endDate}</p>
            <p><strong>Interests:</strong></p>
            <ul>
              {selectedInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
          <button onClick={() => setSubmitted(false)} className="back-btn">
            Plan Another Trip
          </button>
        </div>
      )}
    </div>
  )
}

export default App