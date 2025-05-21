import { useState } from 'react'
import './App.css'

// Sample data for destinations
const destinations = [
  // 🇮🇳 India
  "Delhi, India",
  "Mumbai, India",
  "Goa, India",
  "Jaipur, India",
  "Udaipur, India",
  "Manali, India",
  "Shimla, India",
  "Leh-Ladakh, India",
  "Kashmir, India",
  "Amritsar, India",
  "Rishikesh, India",
  "Varanasi, India",
  "Agra, India",
  "Ranthambore, India",
  "Hampi, India",
  "Bangalore, India",
  "Chennai, India",
  "Hyderabad, India",
  "Kochi, India",
  "Munnar, India",
  "Alleppey, India",
  "Pondicherry, India",
  "Darjeeling, India",
  "Sikkim, India",
  "Shillong, India",
  "Andaman and Nicobar Islands, India",
  "Lakshadweep, India",
  
  // 🌍 Worldwide
  "Paris, France",
  "London, UK",
  "Rome, Italy",
  "Venice, Italy",
  "Barcelona, Spain",
  "Madrid, Spain",
  "Berlin, Germany",
  "Amsterdam, Netherlands",
  "Vienna, Austria",
  "Prague, Czech Republic",
  "Zurich, Switzerland",
  "Athens, Greece",
  "Istanbul, Turkey",
  "Dubai, UAE",
  "Tokyo, Japan",
  "Kyoto, Japan",
  "Seoul, South Korea",
  "Beijing, China",
  "Bangkok, Thailand",
  "Phuket, Thailand",
  "Bali, Indonesia",
  "Singapore",
  "Kuala Lumpur, Malaysia",
  "Sydney, Australia",
  "Melbourne, Australia",
  "Auckland, New Zealand",
  "Cairo, Egypt",
  "Cape Town, South Africa",
  "Nairobi, Kenya",
  "New York, USA",
  "Los Angeles, USA",
  "Las Vegas, USA",
  "Miami, USA",
  "San Francisco, USA",
  "Toronto, Canada",
  "Vancouver, Canada",
  "Rio de Janeiro, Brazil",
  "Buenos Aires, Argentina",
  "Lima, Peru",
  "Mexico City, Mexico",
  "Havana, Cuba",
  "Reykjavik, Iceland",
  "Moscow, Russia",
  "Helsinki, Finland",
  "Oslo, Norway",
  "Stockholm, Sweden"
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

// Sample activities for each destination and interest
const activities = {
  "Jaipur, India": {
    "Food & Dining": ["Rajasthani thali at Chokhi Dhani", "Lassi at Lassiwala", "Street food at Johari Bazaar"],
    "History & Culture": ["Amber Fort tour", "City Palace visit", "Hawa Mahal photo stop"],
    "Nature & Outdoors": ["Elephant village visit", "Walk through Jal Mahal lakefront", "Nahargarh Fort sunset"],
    "Shopping": ["Block-printed fabrics in Bapu Bazaar", "Jewelry at Johari Bazaar", "Handicrafts from Tripolia Bazaar"],
    "Nightlife": ["Light & sound show at Amber Fort", "Rooftop dining at Peacock Restaurant", "Cultural evening at Jawahar Kala Kendra"],
    "Art & Museums": ["Albert Hall Museum", "Anokhi Museum of Hand Printing", "Sanganeri print workshop"],
    "Adventure Activities": ["Hot air balloon ride", "Trekking in Aravalli hills", "ATV ride outside Jaipur"],
    "Relaxation & Wellness": ["Spa at a heritage hotel", "Yoga session in gardens", "Ayurvedic massage"],
    "Family Activities": ["Visit to Jaipur Zoo", "Camel ride in desert area", "Craft workshop for kids"],
    "Local Experiences": ["Mehendi art session", "Rajasthani folk dance", "Pottery-making workshop"]
  },
  "Goa, India": {
    "Food & Dining": ["Seafood at Martin's Corner", "Beach shack dinner at Baga", "Goan fish curry tasting"],
    "History & Culture": ["Old Goa churches tour", "Portuguese heritage walk", "Fort Aguada visit"],
    "Nature & Outdoors": ["Dudhsagar Falls trip", "Butterfly Beach hike", "Sunset at Chapora Fort"],
    "Shopping": ["Saturday Night Market", "Anjuna Flea Market", "Arpora local stalls"],
    "Nightlife": ["Clubbing at Tito’s", "Silent Disco at Palolem", "Beach party at Curlies"],
    "Art & Museums": ["Museum of Christian Art", "Houses of Goa Museum", "Mario Miranda gallery"],
    "Adventure Activities": ["Parasailing at Calangute", "Scuba diving at Grande Island", "Jet skiing at Baga"],
    "Relaxation & Wellness": ["Beachside spa massage", "Yoga retreat in Ashvem", "Ayurveda detox session"],
    "Family Activities": ["Dolphin watching boat ride", "Splashdown Waterpark", "Visit to Spice Plantation"],
    "Local Experiences": ["Feni distillery visit", "Traditional fish market tour", "Cashew tapping demonstration"]
  },
  "Delhi, India": {
    "Food & Dining": ["Chaat at Chandni Chowk", "Paranthas at Paranthe Wali Gali", "Fine dining at Indian Accent"],
    "History & Culture": ["Red Fort tour", "Qutub Minar visit", "Humayun’s Tomb exploration"],
    "Nature & Outdoors": ["Walk at Lodhi Garden", "Boat ride at India Gate", "Deer Park stroll"],
    "Shopping": ["Dilli Haat craft bazaar", "Sarojini Nagar street shopping", "Janpath market for souvenirs"],
    "Nightlife": ["Hauz Khas Village pubs", "Live music in Connaught Place", "Sufi night at Nizamuddin Dargah"],
    "Art & Museums": ["National Museum", "Kiran Nadar Art Museum", "Crafts Museum visit"],
    "Adventure Activities": ["Segway tour of Rajpath", "Paintball in Gurgaon", "Rock climbing at Indian Mountaineering Foundation"],
    "Relaxation & Wellness": ["Luxury spa in South Delhi", "Ayurvedic therapy", "Yoga at Lodhi Garden"],
    "Family Activities": ["Visit to Delhi Zoo", "Rail Museum trip", "Kingdom of Dreams (Gurgaon)"],
    "Local Experiences": ["Cooking class in a local home", "Cycle tour of Old Delhi", "Rickshaw ride through bazaars"]
  }
};

// Add default activities for any unspecified destinations
const defaultActivities = {
  "Food & Dining": ["Local food tour", "Fine dining experience", "Street food exploration"],
  "History & Culture": ["Visit main historical site", "Cultural museum tour", "Heritage walking tour"],
  "Nature & Outdoors": ["City park visit", "Scenic viewpoint trip", "Nature reserve hike"],
  "Shopping": ["Main shopping district", "Local market visit", "Boutique stores exploration"],
  "Nightlife": ["Popular bar visit", "Live music venue", "Cultural night show"],
  "Art & Museums": ["Main art museum visit", "Contemporary gallery tour", "Public art walk"],
  "Adventure Activities": ["City bike tour", "Local adventure sport", "Guided outdoor activity"],
  "Relaxation & Wellness": ["Day spa visit", "Yoga in scenic location", "Traditional wellness experience"],
  "Family Activities": ["Family-friendly attraction", "Interactive museum visit", "Outdoor family activity"],
  "Local Experiences": ["Local craft workshop", "Regional cooking class", "Meet locals event"]
};

function App() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [itinerary, setItinerary] = useState<any>(null);
  const [jsonView, setJsonView] = useState(false);

  const handleInterestChange = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const generateItinerary = () => {
    // Create start date object
    const start = new Date(startDate);
    
    // Generate a 3-day itinerary
    const threeDay = [];
    
    for (let i = 0; i < 3; i++) {
      // Create a copy of the date and add i days
      const currentDate = new Date(start);
      currentDate.setDate(currentDate.getDate() + i);
      
      // Format the date as YYYY-MM-DD
      const formattedDate = currentDate.toISOString().split('T')[0];
      
      // Select activities based on destination and interests
      const dayActivities = {
        morning: getRandomActivity("morning"),
        afternoon: getRandomActivity("afternoon"),
        evening: getRandomActivity("evening")
      };
      
      threeDay.push({
        date: formattedDate,
        day: i + 1,
        activities: dayActivities
      });
    }
    
    return {
      destination,
      dates: {
        start: startDate,
        end: endDate
      },
      interests: selectedInterests,
      itinerary: threeDay
    };
  };
  
  const getRandomActivity = (timeOfDay: string) => {
    // Get random interest from selected interests
    const interest = selectedInterests[Math.floor(Math.random() * selectedInterests.length)];
    
    // Get activities for this destination and interest
    let activitiesPool = defaultActivities[interest];
    
    // If we have specific activities for this destination, use those instead
    if (activities[destination] && activities[destination][interest]) {
      activitiesPool = activities[destination][interest];
    }
    
    // Get random activity from the pool
    const activity = activitiesPool[Math.floor(Math.random() * activitiesPool.length)];
    
    return {
      time: timeOfDay === "morning" ? "9:00 AM - 12:00 PM" : 
            timeOfDay === "afternoon" ? "1:00 PM - 5:00 PM" : 
            "6:00 PM - 10:00 PM",
      description: activity,
      interest: interest
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedItinerary = generateItinerary();
    setItinerary(generatedItinerary);
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
              <label>Select Your Interests (minimum 3)</label>
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
              {selectedInterests.length < 3 && (
                <p className="error-message">Please select at least 3 interests</p>
              )}
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={selectedInterests.length < 3}
            >
              Generate 3-Day Itinerary
            </button>
          </form>
        </div>
      ) : (
        <div className="trip-summary">
          <h2>Your 3-Day Itinerary for {destination}</h2>
          
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${!jsonView ? 'active' : ''}`}
              onClick={() => setJsonView(false)}
            >
              Visual View
            </button>
            <button 
              className={`toggle-btn ${jsonView ? 'active' : ''}`}
              onClick={() => setJsonView(true)}
            >
              JSON Output
            </button>
          </div>
          
          {jsonView ? (
            <div className="json-output">
              <pre>{JSON.stringify(itinerary, null, 2)}</pre>
            </div>
          ) : (
            <div className="itinerary-display">
              {itinerary.itinerary.map((day, index) => (
                <div key={index} className="day-card">
                  <h3>Day {day.day} - {new Date(day.date).toLocaleDateString()}</h3>
                  <div className="activity">
                    <h4>Morning</h4>
                    <p>{day.activities.morning.description}</p>
                    <span className="activity-tag">{day.activities.morning.interest}</span>
                    <span className="activity-time">{day.activities.morning.time}</span>
                  </div>
                  <div className="activity">
                    <h4>Afternoon</h4>
                    <p>{day.activities.afternoon.description}</p>
                    <span className="activity-tag">{day.activities.afternoon.interest}</span>
                    <span className="activity-time">{day.activities.afternoon.time}</span>
                  </div>
                  <div className="activity">
                    <h4>Evening</h4>
                    <p>{day.activities.evening.description}</p>
                    <span className="activity-tag">{day.activities.evening.interest}</span>
                    <span className="activity-time">{day.activities.evening.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="button-group">
            <button onClick={() => setSubmitted(false)} className="back-btn">
              Plan New Trip
            </button>
            <button 
              onClick={() => {
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(itinerary, null, 2));
                const downloadAnchorNode = document.createElement('a');
                downloadAnchorNode.setAttribute("href", dataStr);
                downloadAnchorNode.setAttribute("download", `${destination.split(',')[0]}_itinerary.json`);
                document.body.appendChild(downloadAnchorNode);
                downloadAnchorNode.click();
                downloadAnchorNode.remove();
              }} 
              className="download-btn"
            >
              Download JSON
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

