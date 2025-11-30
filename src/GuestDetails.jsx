export default function GuestDetails({ guest, onBack }) {
  const details = {
    ...guest,
    phone: "444-1243",
    bio: "they like pizza",
    job: "Delivery Driver",
  };

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Phone: {details.phone}</p>
      <p>Job: {details.job}</p>
      <p>Bio: {details.bio}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
}
