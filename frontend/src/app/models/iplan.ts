export interface IBudget {
  id: string;
  name: string; // e.g., "Food & Dining"
  icon: string; // e.g., "bx bx-restaurant"
  spent: number; // e.g., 420
  limit: number; // e.g., 600
  color: string; // e.g., "#00b894" (Green) or "#f97316" (Orange)
}

export interface IGoal {
  id: string;
  name: string; // e.g., "New Car"
  icon: string; // e.g., "bx bxs-car"
  saved: number; // e.g., 5000
  target: number; // e.g., 20000
  color: string; // Background color for icon wrapper
  iconColor: string; // Color for the icon itself
}
