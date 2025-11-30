import { useState } from "react";
import GuestList from "./GuestList.jsx";
import GuestDetails from "./GuestDetails.jsx";
import { fetchGuests, fetchGuestDetails } from "./api.jsx";

const placeholderGuests = [
  { id: 1, name: "Anthony Bacarella", email: "anthony@masonschools.com" },
  { id: 2, name: "Joe Bacarella", email: "joeb2001@yahoo.com" },
  { id: 3, name: "Priya Rengaraj", email: "priya123@gmail.com" },
];

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGuests() {
      try {
        setLoading(true);
        const data = await fetchGuests();
        setGuests(data.guests);
      } catch (err) {
        setError("failed to load guests.");
      } finally {
        setLoading(false);
      }
    }
    loadGuests();
  }, []);

  return (
    <div>
      <h1>Convention Guests</h1>
      {selectedGuest ? (
        <GuestDetails
          guest={selectedGuest}
          onBack={() => setSelectedGuest(null)}
        />
      ) : (
        <GuestList guests={guests} onSelect={setSelectedGuest} />
      )}
    </div>
  );
}
