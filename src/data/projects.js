import invDashboard from "../images/work/inventory-dashboard.webp";
import invRecord from "../images/work/inventory-record.webp";
import bdaySignup from "../images/work/birthday-signup.webp";
import bdayStaff from "../images/work/birthday-staff.webp";
import invThumb from "../images/work/inventory-thumb.webp";
import bdayThumb from "../images/work/birthday-thumb.webp";
import budgetThumb from "../images/work/budget-thumb.webp";
import budgetLight from "../images/work/budget-light.webp";
import budgetDark from "../images/work/budget-dark.webp";

export const projects = [
  {
    slug: "inventory",
    title: "The Cup of Faith Inventory",
    client: "The Cup of Faith Coffee Shop",
    year: "2026",
    summary:
      "A multi-branch inventory system that shows the team what's in stock, what's running low and what's selling — across six branches.",
    url: "https://thecupoffaithinventory.netlify.app/",
    tags: ["Web app", "Inventory", "Multi-branch", "Netlify"],
    cover: invThumb,
    shots: [
      { src: invDashboard, alt: "Inventory dashboard with stock value, low-stock alerts and branch overview" },
      { src: invRecord, alt: "Record screen for logging usage, deliveries, wastage and transfers" },
    ],
    features: [
      "Dashboard with stock value, low-stock alerts and a per-branch overview",
      "Record every movement: usage, delivery, wastage, transfer, return, adjustment and batches made",
      "Low-stock watchlist with reorder levels for each item",
      "Stock counts, orders, grocery lists, POS and sales reports",
      "Admin roles, notifications and dark mode",
    ],
  },
  {
    slug: "birthday-club",
    title: "Birthday Club",
    client: "The Cup of Faith Coffee Shop",
    year: "2026",
    summary:
      "A loyalty sign-up page where customers register for a free birthday drink, plus a staff dashboard that sends the greetings automatically.",
    url: "https://cupoffaith-birthday-club.thecupoffaith.workers.dev/",
    tags: ["Web app", "Loyalty", "Automation", "Cloudflare Workers"],
    cover: bdayThumb,
    shots: [
      { src: bdaySignup, alt: "Customer sign-up form for the birthday club" },
      { src: bdayStaff, alt: "Staff dashboard listing today's and upcoming birthdays" },
    ],
    features: [
      "Mobile-friendly sign-up linked to the customer's loyalty card",
      "Consent checkbox written to follow the Data Privacy Act of 2012",
      "Staff dashboard with today's birthdays and the next 30 days",
      "Greetings go out automatically every morning at 8:00 AM",
      "Members list, custom messages and a QR code for in-store sign-ups",
    ],
  },
  {
    slug: "budget-tracker",
    title: "SAWADA. Budget Tracker",
    client: "Personal project",
    year: "2026",
    summary:
      "A personal budget, accounts and debt tracker that shows your net worth, what's due next and where every peso goes, synced between phone and computer.",
    url: "https://jcqtqt.github.io/budget-debt-tracker/",
    tags: ["Web app", "Personal finance", "Google sign-in", "GitHub Pages"],
    cover: budgetThumb,
    shots: [
      { src: budgetLight, alt: "Dashboard with net worth, accounts and recent transactions (sample data)" },
      { src: budgetDark, alt: "The same dashboard in dark mode (sample data)" },
    ],
    features: [
      "Net worth at a glance: total money, what you still owe and the difference",
      "Accounts for banks, e-wallets, cash and savings in one place",
      "Debt and installment tracking with progress bars and next due dates",
      "Monthly budget with income, spending and money left",
      "Google sign-in to sync between phone and computer, or use it on one device only",
      "Light and dark mode, plus a button to hide amounts",
    ],
  },
];
