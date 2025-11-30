import GuestList from "./GuestList.jsx";
import GuestDetails from "./GuestDetails.jsx";

const placeholderGuests = [
  { id: 1, name: "Anthony Bacarella", email: "anthony@masonschools.com" },
  { id: 2, name: "Joe Bacarella", email: "joeb2001@yahoo.com" },
  { id: 3, name: "Priya Rengaraj", emial: "priya123@gmail.com" },
];

export default function App() {
  const [selectedGuest, setSelectedGuest] = useState(null);
  return (
    <div>
      <h1>Convention Guests</h1>
      {selectedGuest ? (
        <GuestDetails
          guest={selectedGuest}
          onBack={() => setSelectedGuest(null)}
        />
      ) : (
        <GuestList guests={placeholderGuests} onSelect={setSelectedGuest} />
      )}
    </div>
  );
}
