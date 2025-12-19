import { createContext, useState, useContext, useEffect } from "react";

const PlacesContext = createContext();

// api endpoint for places data
const API_URL = "https://mocki.io/v1/6bea1edd-b4a2-4993-a569-efc07b1759d8";

export function PlacesProvider({ children }) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlaces();
  }, []);

  async function fetchPlaces() {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch places");
      const data = await res.json();
      setPlaces(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PlacesContext.Provider value={{ places, loading, error }}>
      {children}
    </PlacesContext.Provider>
  );
}

export function usePlaces() {
  const ctx = useContext(PlacesContext);
  if (!ctx) throw new Error("usePlaces must be used within PlacesProvider");
  return ctx;
}
