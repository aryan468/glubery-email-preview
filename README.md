# Email Templates Documentation

This document describes the Handlebars email templates and their expected data parameters.

## Template List

### 1. welcome.handlebars (no chnage)

**Purpose:** Welcome new users and verify their email address.

**Required Data:**

- `name` (string) - User's name
- `email` (string) - User's email
- `link` (string) - Email verification link

---

### 2. password_reset_otp.handlebars (no change)

**Purpose:** Send OTP code for password reset.

**Required Data:**

- `name` (string) - User's name
- `email` (string) - User's email
- `otp` (string/number) - One-time password code
- `expiryMinutes` (number) - OTP expiration time in minutes (optional)

---

### 3. employee_registration.handlebars

(Updated welcome text from "You have been registered as an employee at Glubery" to "Welcome aboard! Your account has been successfully created on Glubery.in")

**Purpose:** Welcome new employees and provide account setup link.

**Required Data:**

- `name` (string) - Employee's name
- `email` (string) - Employee's email
- `setupLink` (string) - Account setup link
- `role` (string) - Employee's role (optional)
- `department` (string) - Employee's department (optional)

---

### 4. order_request.handlebars

(Changed field name from customerName to employeeName)

**Purpose:** Notify about new order requests awaiting review.

**Required Data:**

- `name` (string) - Recipient's name
- `email` (string) - Recipient's email
- `orderId` (string) - Order ID
- `orderLink` (string) - Link to order details
- `employeeName` (string) - Employee name (optional)
- `totalAmount` (string) - Order total amount (optional)
- `requestDate` (string) - Request date (optional)

---

### 5. order_approved.handlebars (no change)

**Purpose:** Notify customer that their order has been approved.

**Required Data:**

- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `orderId` (string) - Order ID
- `orderLink` (string) - Link to order details
- `approvedBy` (string) - Name of approver (optional)
- `approvalDate` (string) - Approval date (optional)
- `estimatedDelivery` (string) - Estimated delivery date (optional)
- `notes` (string) - Additional notes (optional)

---

### 6. order_rejected.handlebars

(Removed entire reason field and "If you have any questions..." text)

**Purpose:** Notify customer that their order has been rejected.

**Required Data:**

- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `orderId` (string) - Order ID
- `contactLink` (string) - Link to contact support
- `rejectedBy` (string) - Name of person who rejected (optional)
- `rejectionDate` (string) - Rejection date (optional)

---

### 7. order_status_update.handlebars (no chnage)

**Purpose:** Notify about order status changes.

**Required Data:**

- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `orderId` (string) - Order ID
- `newStatus` (string) - New order status
- `orderLink` (string) - Link to track order
- `previousStatus` (string) - Previous status (optional)
- `updateDate` (string) - Update date (optional)
- `trackingNumber` (string) - Shipping tracking number (optional)
- `message` (string) - Additional message (optional)

---

### 8. payment_status_update.handlebars (no chnage)

**Purpose:** Notify about payment status changes.

**Required Data:**

- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `orderId` (string) - Order ID
- `paymentStatus` (string) - Payment status
- `paymentId` (string) - Payment ID (optional)
- `amount` (string) - Payment amount (optional)
- `paymentMethod` (string) - Payment method (optional)
- `updateDate` (string) - Update date (optional)
- `message` (string) - Additional message (optional)
- `receiptLink` (string) - Link to receipt (optional)

---

### 9. return_request.handlebars (no chnage)

**Purpose:** Confirm receipt of return request.

**Required Data:**

- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `returnId` (string) - Return request ID
- `orderId` (string) - Original order ID
- `returnLink` (string) - Link to track return
- `requestDate` (string) - Request date (optional)
- `items` (string) - Items being returned (optional)
- `reason` (string) - Return reason (optional)

---

### 10. return_status_update.handlebars

(just sample message changed no feild chnaged)

**Purpose:** Notify about return status changes.

**Required Data:**

- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `returnId` (string) - Return request ID
- `orderId` (string) - Original order ID
- `newStatus` (string) - New return status
- `returnLink` (string) - Link to return details
- `previousStatus` (string) - Previous status (optional)
- `updateDate` (string) - Update date (optional)
- `message` (string) - Additional message (optional)
- `refundAmount` (string) - Refund amount if applicable (optional)

---

### 11. credit_note_issuance.handlebars

( Changed "your account" to "your company" and removed auto-apply text)

**Purpose:** Notify about new credit note issued to company account.

**Required Data:**

- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `creditNoteId` (string) - Credit note ID
- `amount` (string) - Credit note amount
- `creditNoteLink` (string) - Link to credit note details
- `orderId` (string) - Related order ID (optional)
- `issueDate` (string) - Issue date (optional)
- `expiryDate` (string) - Expiry date (optional)
- `reason` (string) - Reason for issuance (optional)

---

### 12. credit_note_usage.handlebars ( not applicable)

---

### 13. credit_note_revocation.handlebars ( not applicable)

---

## Common Features

All templates include:

- Responsive HTML design that works on desktop and mobile
- Consistent branding with color-coded headers for different email types
- Professional layout with clear call-to-action buttons
- Fallback text for users who can't view HTML emails
- Optional fields using Handlebars `{{#if}}` conditionals
- User data (name, email) is always passed to all templates

## Color Scheme

Each template uses a distinct color for easy identification:

- Welcome: Green (#4CAF50)
- Password Reset: Orange (#FF9800)
- Employee Registration: Blue (#2196F3)
- Order Request: Purple (#9C27B0)
- Order Approved: Green (#4CAF50)
- Order Rejected: Red (#f44336)
- Order Status: Indigo (#3F51B5)
- Payment Status: Teal (#009688)
- Return Request: Deep Orange (#FF5722)
- Return Status: Deep Purple (#673AB7)
- Credit Note Issuance: Cyan (#00BCD4)

## Tech Stack

- **Backend:** Node.js + Express.js
- **Template Engine:** Handlebars
- **Hosting:** Render (Free Tier)
- **Version Control:** Git + GitHub

A Node.js/Express.js email template preview server using Handlebars, deployed on Render.

**Live Preview:** https://glubery-email-preview.onrender.com

---

## Quick Start

### Local Development

1. Install dependencies: `npm install`
2. Start server: `npm start`
3. Open: `http://localhost:3000`

### Making Changes

1. Edit `.handlebars` files
2. Update sample data in `server.js` if needed
3. Test locally: `npm start`
4. Deploy: `git add . && git commit -m "changes" && git push`

Render auto-deploys in 1-2 minutes.

### Render Notes

- Sleeps after 15min (first load takes 30-60s)
- 750 hours/month (unlimited with sleep mode)
- Auto-deploys on every `git push`
- No expiration

**Key:** Binds to `0.0.0.0` (Render requirement), uses `process.env.PORT`, views set to `__dirname`
