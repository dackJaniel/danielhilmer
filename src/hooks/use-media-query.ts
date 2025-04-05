import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Setze den initialen Wert
    setMatches(media.matches);

    // Aktualisiere den Wert, wenn sich der Medientyp ändert
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    // Cleanup-Funktion
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
