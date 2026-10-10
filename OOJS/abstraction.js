// 1. The Abstract Base Class (The Blueprint)
class PaymentProcessor {
  constructor() {
    // Prevent direct instantiation of the abstract class
    if (this.constructor === PaymentProcessor) {
      throw new Error("Cannot instantiate abstract class PaymentProcessor directly.");
    }
  }

  // Abstract method - child class will have own definiton 
  processPayment(amount) {
    throw new Error("Method 'processPayment()' must be implemented.");
  }
}

// Child Class 1: Credit Card implementation
class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount) {
    return "Charged $" + amount + " securely via Stripe Credit Card API.";
  }
}

// Child Class 2: PayPal implementation
class PayPalProcessor extends PaymentProcessor {
  processPayment(amount) {
    return "Processed $" + amount + " through PayPal checkout flow.";
  }
}

// --- Testing It ---

// var genericPayment = new PaymentProcessor(); // Error: Cannot instantiate...

var creditCard = new CreditCardProcessor();
console.log(creditCard.processPayment(150)); 
// Output: Charged $150 securely via Stripe Credit Card API.

var payPal = new PayPalProcessor();
console.log(payPal.processPayment(75)); 
// Output: Processed $75 through PayPal checkout flow.

