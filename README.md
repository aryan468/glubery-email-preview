# Email Templates Documentation

This document describes the Handlebars email templates and their expected data parameters.

## Template List

### 1. welcome.handlebars
**Purpose:** Welcome new users and verify their email address.

**Required Data:**
- `name` (string) - User's name
- `email` (string) - User's email
- `link` (string) - Email verification link

---

### 2. password_reset_otp.handlebars
**Purpose:** Send OTP code for password reset.

**Required Data:**
- `name` (string) - User's name
- `email` (string) - User's email
- `otp` (string/number) - One-time password code
- `expiryMinutes` (number) - OTP expiration time in minutes (optional)

---

### 3. employee_registration.handlebars
**Purpose:** Welcome new employees and provide account setup link.

**Required Data:**
- `name` (string) - Employee's name
- `email` (string) - Employee's email
- `setupLink` (string) - Account setup link
- `role` (string) - Employee's role (optional)
- `department` (string) - Employee's department (optional)

---

### 4. order_request.handlebars
**Purpose:** Notify about new order requests awaiting review.

**Required Data:**
- `name` (string) - Recipient's name
- `email` (string) - Recipient's email
- `orderId` (string) - Order ID
- `orderLink` (string) - Link to order details
- `customerName` (string) - Customer name (optional)
- `totalAmount` (string) - Order total amount (optional)
- `requestDate` (string) - Request date (optional)

---

### 5. order_approved.handlebars
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
**Purpose:** Notify customer that their order has been rejected.

**Required Data:**
- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `orderId` (string) - Order ID
- `contactLink` (string) - Link to contact support
- `rejectedBy` (string) - Name of person who rejected (optional)
- `rejectionDate` (string) - Rejection date (optional)
- `reason` (string) - Reason for rejection (optional)

---

### 7. order_status_update.handlebars
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

### 8. payment_status_update.handlebars
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

### 9. return_request.handlebars
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
**Purpose:** Notify about new credit note issued to account.

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

### 12. credit_note_usage.handlebars
**Purpose:** Notify when credit note is applied to an order.

**Required Data:**
- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `creditNoteId` (string) - Credit note ID
- `orderId` (string) - Order ID where credit was applied
- `amountUsed` (string) - Amount of credit used
- `orderLink` (string) - Link to order details
- `remainingBalance` (string) - Remaining credit balance (optional)
- `usageDate` (string) - Usage date (optional)
- `orderTotal` (string) - Final order total (optional)
- `orderSubtotal` (string) - Order subtotal before credit (optional)

---

### 13. credit_note_revocation.handlebars
**Purpose:** Notify about credit note revocation.

**Required Data:**
- `name` (string) - Customer's name
- `email` (string) - Customer's email
- `creditNoteId` (string) - Credit note ID
- `amount` (string) - Original credit note amount
- `supportLink` (string) - Link to contact support
- `revocationDate` (string) - Revocation date (optional)
- `issueDate` (string) - Original issue date (optional)
- `reason` (string) - Reason for revocation (optional)

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
- Credit Note Usage: Light Green (#8BC34A)
- Credit Note Revocation: Brown (#795548)
