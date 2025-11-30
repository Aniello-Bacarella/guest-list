export default function GuestList({ guests, onSelect }) {
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
