export type RoomStatus = "free" | "occupied" | "reserved" | "needs_cleaning";
export type TableStatus = "free" | "occupied" | "reserved" | "needs_cleaning";
export type ExpenseStatus = "pending" | "approved" | "rejected";


export const branches = [
  { id: "bk", name: "Birnin Kebbi", address: "12 Kalgo Road, Birnin Kebbi", status: "active" },
  { id: "lg", name: "Lagos", address: "Coming soon", status: "opening" },
  { id: "kd", name: "Kaduna", address: "Coming soon", status: "opening" },
];


export const roomTypes = [
  { id: "std", name: "Standard room", sleeps: 2, price: 28000, meta: "8 available", desc: "Queen bed, AC, en-suite bathroom, complimentary breakfast." },
  { id: "dlx", name: "Deluxe room", sleeps: 2, price: 45000, meta: "5 available", desc: "King bed, sitting area, garden-facing balcony, breakfast included." },
  { id: "exe", name: "Executive suite", sleeps: 4, price: 78000, meta: "2 available", desc: "Separate lounge, dining nook, priority restaurant & airport pick-up." },
  { id: "corp", name: "Corporate room", sleeps: 2, price: 33000, meta: "Sold out", desc: "Work desk, fast wifi, discounted long-stay corporate rate.", soldOut: true },
  { id: "fam", name: "Family suite", sleeps: 6, price: 96000, meta: "1 available", desc: "Two connecting rooms, ideal for families travelling together." },
];

// // GET /api/v1/rooms?branch_id=bk (individual room instances + live status)
export const rooms: { number: string; roomTypeId: string; status: RoomStatus }[] = [
  { number: "101", roomTypeId: "dlx", status: "occupied" },
  { number: "102", roomTypeId: "std", status: "free" },
  { number: "103", roomTypeId: "std", status: "needs_cleaning" },
  { number: "104", roomTypeId: "dlx", status: "reserved" },
  { number: "105", roomTypeId: "exe", status: "occupied" },
  { number: "106", roomTypeId: "std", status: "free" },
  { number: "107", roomTypeId: "dlx", status: "occupied" },
  { number: "108", roomTypeId: "std", status: "free" },
  { number: "109", roomTypeId: "corp", status: "reserved" },
  { number: "110", roomTypeId: "dlx", status: "occupied" },
  { number: "111", roomTypeId: "std", status: "needs_cleaning" },
  { number: "112", roomTypeId: "fam", status: "free" },
];

export const menu = [
  {
    category: "Starters",
    items: [
      { id: "m1", name: "Peppered gizzard", desc: "Grilled gizzard, onions, house pepper sauce", price: "₦3,500" },
      { id: "m2", name: "Suya platter", desc: "Beef suya, yaji spice, sliced onion & tomato", price: "₦4,200" },
      { id: "m3", name: "Vegetable spring rolls", desc: "Four pieces, sweet chilli dip", price: "₦2,800" },
    ],
  },
  {
    category: "Mains",
    items: [
      { id: "m4", name: "Jollof rice & grilled chicken", desc: "House jollof, plantain, coleslaw", price: "₦6,500" },
      { id: "m5", name: "Tuwo shinkafa & miyan kuka", desc: "Northern classic, goat meat option", price: "₦5,800" },
    ],
  },
  {
    category: "Grills",
    items: [
      { id: "m6", name: "Whole grilled fish", desc: "Tilapia, pepper sauce, jollof or fries", price: "₦7,200" },
      { id: "m7", name: "Continental mixed grill", desc: "Chicken, beef, sausage, roasted vegetables", price: "₦9,000" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { id: "m8", name: "Zobo (chilled)", desc: "House hibiscus blend", price: "₦1,200" },
      { id: "m9", name: "Fresh pineapple juice", desc: "Pressed daily", price: "₦1,800" },
    ],
  },
];




// // ---------- Guests ----------
// // GET /api/v1/guests?branch_id=bk
// export const guests = [
//   { id: "g1", name: "Chidi Okafor", phone: "+234 803 555 0142", email: "chidi.okafor@email.com", vip: true },
//   { id: "g2", name: "Amaka Eze", phone: "+234 806 555 0198", email: "amaka.eze@email.com", vip: false },
//   { id: "g3", name: "Suleiman Bala", phone: "+234 812 555 0233", email: "suleiman.bala@email.com", vip: false },
// ];

// // ---------- Active folio (front desk) ----------
// // GET /api/v1/bookings/:id/folio
// export const activeFolio = {
//   bookingId: "bk-2291",
//   guest: guests[0],
//   room: "101",
//   checkIn: "7 Aug",
//   checkOut: "9 Aug",
//   lineItems: [
//     { label: "Deluxe room × 2 nights", date: "7–9 Aug", amount: "₦90,000" },
//     { label: "Restaurant — dinner (table 6)", date: "7 Aug", amount: "₦11,200" },
//     { label: "Room service — breakfast", date: "8 Aug", amount: "₦4,500" },
//   ],
// };

// // ---------- Checkout summary (guest booking flow) ----------
// export const checkoutSummary = {
//   roomName: "Deluxe room · 3 nights",
//   lineItems: [
//     { label: "₦45,000 × 3 nights", value: "₦135,000" },
//     { label: "Service charge", value: "₦4,600" },
//     { label: "VAT (7.5%)", value: "₦5,000" },
//   ],
//   total: "₦144,600",
// };




// export const tables: { number: string; capacity: string; status: TableStatus }[] = [
//   { number: "T1", capacity: "4 seats", status: "occupied" },
//   { number: "T2", capacity: "2 seats", status: "free" },
//   { number: "T3", capacity: "4 seats", status: "reserved" },
//   { number: "T4", capacity: "6 seats", status: "occupied" },
//   { number: "T5", capacity: "2 seats", status: "free" },
//   { number: "T6", capacity: "4 seats", status: "needs_cleaning" },
//   { number: "T7", capacity: "4 seats", status: "occupied" },
//   { number: "T8", capacity: "2 seats", status: "free" },
// ];


// export const activeOrder = {
//   id: "4471",
//   table: "T1",
//   openedAt: "opened 7:42pm",
//   items: [
//     { qty: 2, name: "Continental mixed grill", price: "₦18,000" },
//     { qty: 1, name: "Suya platter", price: "₦4,200" },
//     { qty: 3, name: "Zobo (chilled)", price: "₦3,600" },
//   ],
//   total: "₦25,800",
// };

// export const kotSent = [
//   { orderId: "4471", table: "T1 · #4471", items: ["2× Continental mixed grill", "1× Suya platter"], time: "Sent 2 min ago" },
//   { orderId: "4472", table: "T4 · #4472", items: ["1× Whole grilled fish", "2× Jollof rice"], time: "Sent 1 min ago" },
//   { orderId: "4473", table: "Room 204 · #4473", items: ["1× Tuwo shinkafa & miyan kuka"], time: "Sent just now" },
// ];

// export const kotPreparing = [
//   { orderId: "4468", table: "T7 · #4468", items: ["3× Peppered gizzard", "2× Vegetable spring rolls"], time: "Started 6 min ago" },
//   { orderId: "4469", table: "Takeaway · #4469", items: ["1× Continental mixed grill"], time: "Started 3 min ago" },
// ];

// export const kotReady = [
//   { orderId: "4465", table: "T3 · #4465", items: ["2× Fresh pineapple juice"], time: "Ready 1 min ago" },
//   { orderId: "4466", table: "T5 · #4466", items: ["1× Whole grilled fish", "1× Zobo (chilled)"], time: "Ready just now" },
// ];

// // ---------- Tours ----------
// // GET /api/v1/tour-packages?branch_id=bk
// export const tourPackages = [
//   { id: "t1", name: "Argungu riverside day trip", desc: "Full-day guided trip along the Argungu waterfront with lunch included.", duration: "8 hrs", group: "Up to 12 guests", price: "₦18,000 pp" },
//   { id: "t2", name: "Kebbi heritage & craft trail", desc: "Visit the Emir's palace grounds and local weaving cooperatives.", duration: "5 hrs", group: "Up to 8 guests", price: "₦12,500 pp" },
//   { id: "t3", name: "Sunset savanna drive", desc: "Evening 4x4 drive through the outskirts, refreshments included.", duration: "3 hrs", group: "Up to 6 guests", price: "₦9,000 pp" },
//   { id: "t4", name: "Two-branch discovery package", desc: "Multi-day itinerary combining Birnin Kebbi and our Kaduna branch.", duration: "3 days", group: "Up to 10 guests", price: "₦95,000 pp" },
// ];

// // GET /api/v1/tour-departures?range=next-7-days
// export const tourDepartures = [
//   { pkg: "Argungu riverside day trip", date: "11 Aug", guide: "Musa Aliyu", vehicle: "KB 204 XA", status: "confirmed" as const },
//   { pkg: "Kebbi heritage & craft trail", date: "12 Aug", guide: "Zainab Umar", vehicle: "KB 118 YB", status: "confirmed" as const },
//   { pkg: "Sunset savanna drive", date: "12 Aug", guide: "—", vehicle: "—", status: "needs_guide" as const },
//   { pkg: "Two-branch discovery package", date: "15 Aug", guide: "Musa Aliyu", vehicle: "KB 204 XA", status: "confirmed" as const },
// ];

// export const nextDeparture = {
//   title: "Argungu riverside day trip — 11 Aug, 8:00am",
//   guide: "Musa Aliyu",
//   vehicle: "Hiace bus — KB 204 XA",
//   manifest: "9 booked",
//   capacity: "9 / 12",
// };

// // ---------- Inventory ----------
// // GET /api/v1/inventory?branch_id=bk
// export const inventoryItems = [
//   { id: "i1", name: "Rice (50kg bag)", unit: "bag", quantityOnHand: 4, reorderThreshold: 5, unitCost: 45000 },
//   { id: "i2", name: "Chicken (kg)", unit: "kg", quantityOnHand: 22, reorderThreshold: 15, unitCost: 3200 },
//   { id: "i3", name: "Cooking gas (12.5kg)", unit: "cylinder", quantityOnHand: 1, reorderThreshold: 2, unitCost: 15000 },
//   { id: "i4", name: "Tomatoes (basket)", unit: "basket", quantityOnHand: 6, reorderThreshold: 3, unitCost: 18000 },
// ];

// // ---------- Expenses & finance ----------
// // GET /api/v1/expenses?status=pending
// export const pendingExpenses: { id: string; desc: string; category: string; by: string; amount: string; status: ExpenseStatus }[] = [
//   { id: "e1", desc: "Diesel — generator, 2 drums", category: "Utilities", by: "Front desk", amount: "₦180,000", status: "pending" },
//   { id: "e2", desc: "Kitchen produce restock", category: "Restaurant purchases", by: "Restaurant staff", amount: "₦96,500", status: "pending" },
//   { id: "e3", desc: "AC repair, room 118", category: "Maintenance", by: "Branch manager", amount: "₦45,000", status: "approved" },
// ];

// // GET /api/v1/reports/pnl?month=2026-07&branch_id=bk
// export const pnlSummary = {
//   period: "July 2026",
//   revenue: [
//     { label: "Rooms", value: "₦18,400,000" },
//     { label: "Restaurant", value: "₦6,120,000" },
//     { label: "Tours", value: "₦2,850,000" },
//   ],
//   revenueTotal: "₦27,370,000",
//   expenses: [
//     { label: "Staff salaries", value: "₦9,200,000" },
//     { label: "Restaurant purchases", value: "₦4,150,000" },
//     { label: "Utilities & generator", value: "₦2,300,000" },
//     { label: "Maintenance", value: "₦1,050,000" },
//   ],
//   expenseTotal: "₦16,700,000",
// };

// // GET /api/v1/reports/overview (super admin)
// export const companyKpis = [
//   { label: "Occupancy", value: "78%", delta: "↑ 6% vs last week" },
//   { label: "Revenue today", value: "₦2.4M", delta: "↑ 12%" },
//   { label: "Restaurant covers", value: "143", delta: "↑ 4%" },
//   { label: "Expenses (MTD)", value: "₦8.1M", delta: "↑ 3% over budget", down: true },
// ];

// export const branchPerformance = [
//   { name: "Birnin Kebbi", occupancy: "82%", revenue: "₦1.6M", restaurant: "96 covers", pl: "+₦410K" },
//   { name: "Lagos (opening)", occupancy: "—", revenue: "—", restaurant: "—", pl: "—" },
//   { name: "Kaduna (opening)", occupancy: "—", revenue: "—", restaurant: "—", pl: "—" },
// ];

// // ---------- Housekeeping ----------
// // GET /api/v1/housekeeping-tasks?staff_id=...
// export const housekeepingTasks = [
//   { id: "h1", room: "103", title: "Departure clean", detail: "Guest checked out 10:30am · full turnover", done: true },
//   { id: "h2", room: "111", title: "Departure clean", detail: "Guest checked out 09:15am · full turnover", done: true },
//   { id: "h3", room: "203", title: "Stay-over refresh", detail: "Towels, linens, bathroom restock", done: false },
//   { id: "h4", room: "207", title: "Stay-over refresh", detail: "Towels, linens, bathroom restock", done: false },
//   { id: "h5", room: "118", title: "Deep clean — maintenance follow-up", detail: "AC repair completed, needs dust clean", done: false },
// ];

// // ---------- Staff (also doubles as the RBAC/role reference) ----------
// // GET /api/v1/staff?branch_id=bk
// export const staffMembers = [
//   { id: "st1", name: "Yusuf Abdullah", role: "Super admin", branch: "All branches" },
//   { id: "st2", name: "Amina Bello", role: "Front desk", branch: "Birnin Kebbi · Shift open" },
//   { id: "st3", name: "Hauwa Sani", role: "Housekeeping", branch: "Birnin Kebbi · Morning shift" },
//   { id: "st4", name: "Yakubu Musa", role: "Restaurant staff", branch: "Birnin Kebbi · Dinner service" },
//   { id: "st5", name: "Fatima Yusuf", role: "Accountant", branch: "Birnin Kebbi" },
//   { id: "st6", name: "Ibrahim Nasir", role: "Tours coordinator", branch: "Birnin Kebbi" },
// ];

// // ---------- Auth (mock login response shape — confirm real shape with backend) ----------
// // POST /api/v1/auth/login
// export const mockLoginResponse = {
//   token: "mock-jwt-token",
//   staff: { id: "st2", name: "Amina Bello", role: "front_desk", branchId: "bk" },
// };
