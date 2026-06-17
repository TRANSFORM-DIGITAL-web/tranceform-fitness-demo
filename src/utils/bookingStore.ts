export interface Booking {
  id: string;
  name: string;
  phone: string;
  type: "trial" | "subscription";
  planName?: string;
  planPrice?: string;
  goal?: string;
  timing?: string;
  timestamp: string;
}

const STORAGE_KEY = "tranceform_bookings_v1";

// Simple initial seed data so the dashboard doesn't look empty when first opened
const SEED_BOOKINGS: Booking[] = [
  {
    id: "seed-1",
    name: "Sandip Sawant",
    phone: "9876543210",
    type: "trial",
    goal: "Weight Loss & Fat Burn",
    timing: "Early Morning (06:00 AM - 09:00 AM)",
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString() // 4 hours ago
  },
  {
    id: "seed-2",
    name: "Preeti Shinde",
    phone: "7020112233",
    type: "subscription",
    planName: "Quarterly Transformation",
    planPrice: "₹4,500",
    timestamp: new Date(Date.now() - 3600000 * 25).toISOString() // ~1 day ago
  },
  {
    id: "seed-3",
    name: "Aniket Gaikwad",
    phone: "8888999911",
    type: "trial",
    goal: "Lean Muscle Gain & Bulk",
    timing: "Evening Rush (04:00 PM - 07:00 PM)",
    timestamp: new Date(Date.now() - 3600000 * 50).toISOString() // ~2 days ago
  },
  {
    id: "seed-4",
    name: "Meera Deshpande",
    phone: "9158234567",
    type: "subscription",
    planName: "Half-Yearly Elite Plan",
    planPrice: "₹8,000",
    timestamp: new Date(Date.now() - 3600000 * 72).toISOString() // ~3 days ago
  }
];

export function getBookings(): Booking[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    // Save seed bookings for demo convenience
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_BOOKINGS));
    return SEED_BOOKINGS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return SEED_BOOKINGS;
  }
}

export function saveBooking(booking: Omit<Booking, "id" | "timestamp">): Booking {
  const bookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: "b_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
    timestamp: new Date().toISOString()
  };
  
  const updated = [newBooking, ...bookings];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  
  // Also dispatch custom event so panels can listen for state changes reactively
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("tranceform_bookings_updated"));
  }
  
  return newBooking;
}

export function deleteBooking(id: string): void {
  const bookings = getBookings();
  const filtered = bookings.filter((b) => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("tranceform_bookings_updated"));
  }
}
