const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2508-FTB-CT-WEB-PT";
const API = BASE_URL + COHORT;

export async function fetchGuests() {
  const res = await fetch(`${API}/guests`);
  const data = await res.json();
  return data;
}

export async function fetchGuestDetails(id) {
  const data = await fetchGuestDetails(guests.id);
  setSelectedGuest(data.guest);
}
