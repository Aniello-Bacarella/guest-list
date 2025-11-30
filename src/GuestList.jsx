export default function GuestList({ guests, onSelect }) {
  console.log("Guests prop:", guests);
  if (!guests || guests.length === 0) {
    return <p>No guests found.</p>;
  }
  return (
    <ul>
      {guests.map((guest) => (
        <li key={guest.id} onClick={() => onSelect(guest)}>
          <p>
            {guest.name} - {guest.email}
          </p>
        </li>
      ))}
    </ul>
  );
}
