const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();

// Configure Handlebars - simplified for Vercel
app.engine(
  "handlebars",
  engine({
    defaultLayout: false,
    extname: ".handlebars",
  })
);
app.set("view engine", "handlebars");
app.set("views", "./");

// Sample data for all 13 templates
const templateData = {
  welcome: {
    name: "Rahul Sharma",
    email: "[email protected]",
    link: "https://glubery.com/verify-email?token=abc123xyz789",
  },

  password_reset_otp: {
    name: "Priya Patel",
    email: "[email protected]",
    otp: "847362",
    expiryMinutes: 10,
  },

  employee_registration: {
    name: "Amit Kumar",
    email: "[email protected]",
    setupLink: "https://glubery.com/employee/setup?token=emp123abc",
    role: "Sales Manager",
    department: "Sales & Marketing",
  },

  order_request: {
    name: "Admin Team",
    email: "admin@glubery.com",
    orderId: "ORD-2025-10-001",
    orderLink: "https://glubery.com/admin/orders/ORD-2025-10-001",
    customerName: "Sneha Reddy", // ← CHANGE THIS
    totalAmount: "₹4,850.00",
    requestDate: "7th October 2025, 11:30 AM",
  },

  order_approved: {
    name: "Sneha Reddy",
    email: "[email protected]",
    orderId: "ORD-2025-10-001",
    orderLink: "https://glubery.com/orders/ORD-2025-10-001",
    approvedBy: "Vikram Singh",
    approvalDate: "7th October 2025, 12:15 PM",
    estimatedDelivery: "11th October 2025",
    notes: "Your order has been confirmed and will be shipped within 24 hours.",
  },

  order_rejected: {
    name: "Karan Mehta",
    email: "karan.mehta@email.com",
    orderId: "ORD-2025-10-002",
    contactLink: "https://glubery.com/support",
    rejectedBy: "Operations Team",
    rejectionDate: "7th October 2025",
  },

  order_status_update: {
    name: "Anjali Gupta",
    email: "[email protected]",
    orderId: "ORD-2025-10-003",
    newStatus: "Out for Delivery",
    orderLink: "https://glubery.com/track/ORD-2025-10-003",
    previousStatus: "Shipped",
    updateDate: "7th October 2025, 11:00 AM",
    trackingNumber: "GLUB123456789IN",
    message: "Your order will be delivered by 8:00 PM today.",
  },

  payment_status_update: {
    name: "Rohan Joshi",
    email: "[email protected]",
    orderId: "ORD-2025-10-004",
    paymentStatus: "Completed",
    paymentId: "PAY-2025-10-004",
    amount: "₹2,350.00",
    paymentMethod: "UPI",
    updateDate: "7th October 2025, 10:45 AM",
    message: "Your payment has been successfully processed.",
    receiptLink: "https://glubery.com/receipts/PAY-2025-10-004",
  },

  return_status_update: {
    name: "Arjun Verma",
    email: "arjun.verma@email.com",
    returnId: "RET-2025-10-002",
    orderId: "ORD-2025-09-020",
    newStatus: "Approved - Refund Initiated",
    returnLink: "https://glubery.com/returns/RET-2025-10-002",
    previousStatus: "Under Review",
    updateDate: "7th October 2025",
    message:
      "Your return has been approved. A credit note or revised invoice will be issued within 48 hours of item verification.",
    refundAmount: "₹1,890.00",
  },

  return_status_update: {
    name: "Arjun Verma",
    email: "[email protected]",
    returnId: "RET-2025-10-002",
    orderId: "ORD-2025-09-020",
    newStatus: "Approved - Refund Initiated",
    returnLink: "https://glubery.com/returns/RET-2025-10-002",
    previousStatus: "Under Review",
    updateDate: "7th October 2025",
    message:
      "Your return has been approved. Refund will be credited within 5-7 business days.",
    refundAmount: "₹1,890.00",
  },

  credit_note_issuance: {
    name: "Divya Sharma",
    email: "[email protected]",
    creditNoteId: "CN-2025-10-001",
    amount: "₹500.00",
    creditNoteLink: "https://glubery.com/credit-notes/CN-2025-10-001",
    orderId: "ORD-2025-09-025",
    issueDate: "7th October 2025",
    expiryDate: "7th January 2026",
    reason: "Compensation for delayed delivery",
  },
};

// List of all templates
const templates = [
  {
    name: "Welcome Email",
    path: "welcome",
    color: "#4CAF50",
    description: "New user welcome & email verification",
  },
  {
    name: "Password Reset OTP",
    path: "password_reset_otp",
    color: "#FF9800",
    description: "OTP for password reset",
  },
  {
    name: "Employee Registration",
    path: "employee_registration",
    color: "#2196F3",
    description: "New employee onboarding",
  },
  {
    name: "Order Request",
    path: "order_request",
    color: "#9C27B0",
    description: "New order notification",
  },
  {
    name: "Order Approved",
    path: "order_approved",
    color: "#4CAF50",
    description: "Order approval confirmation",
  },
  {
    name: "Order Rejected",
    path: "order_rejected",
    color: "#f44336",
    description: "Order rejection notice",
  },
  {
    name: "Order Status Update",
    path: "order_status_update",
    color: "#3F51B5",
    description: "Order status changes",
  },
  {
    name: "Payment Status Update",
    path: "payment_status_update",
    color: "#009688",
    description: "Payment notifications",
  },
  {
    name: "Return Request",
    path: "return_request",
    color: "#FF5722",
    description: "Return request confirmation",
  },
  {
    name: "Return Status Update",
    path: "return_status_update",
    color: "#673AB7",
    description: "Return status updates",
  },
  {
    name: "Credit Note Issuance",
    path: "credit_note_issuance",
    color: "#00BCD4",
    description: "New credit note issued",
  },
];

// Homepage - now just "index" since it's in root
app.get("/", (req, res) => {
  res.render("index", { templates });
});

// Individual template pages
app.get("/preview/:templateName", (req, res) => {
  const { templateName } = req.params;
  const data = templateData[templateName];

  if (!data) {
    return res.status(404).send("<h1>Template not found</h1>");
  }

  res.render(templateName, data);
});

const PORT = process.env.PORT || 10000;
const HOST = "0.0.0.0"; // Important for Render

app.listen(PORT, HOST, () => {
  console.log(`✅ Server running on ${HOST}:${PORT}`);
});

module.exports = app;
