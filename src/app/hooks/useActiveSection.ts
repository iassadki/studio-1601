import { useState } from "react";

// Hook de base qui retourne une section active fictive
export function useActiveSection() {
  // Remplacez cette logique par celle de votre projet si besoin
  const [activeSection] = useState<string>("");
  return activeSection;
}
