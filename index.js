const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine", 
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

// Function 1: Calculate Refill Cost
function calculateRefillCost(customer) {
    // Calculate the refill cost by multiplying the price per refill by the number of refills
    const refillCost = customer.pricePerRefill * customer.refills;
    // Return the calculated refill cost
    return refillCost;
}

// Function 2: Apply Subscription Discount
function applySubscriptionDiscount(totalCost, customer) {
    // Check if the customer has a subscription
    if (customer.subscription) {
        // Calculate the subscription discount (25% off)
        const subscriptionDiscount = 0.25 * totalCost;
        // Subtract the subscription discount from the total cost
        totalCost -= subscriptionDiscount;
    }
    // Return the total cost after applying the subscription discount
    return totalCost;
}

// Function 3: Apply Coupon Discount
function applyCouponDiscount(totalCost, customer) {
    // Check if the customer has a coupon
    if (customer.coupon) {
        // Subtract $10 from the total cost as a coupon discount
        totalCost -= 10;
    }
    // Return the total cost after applying the coupon discount
    return totalCost;
}


// Calculate the total cost for each customer

// Calculate the total cost for Timmy's refills
const timmyTotalCost = calculateRefillCost(timmy);
// Apply the subscription discount to Timmy's total cost
const timmyTotalAfterSub = applySubscriptionDiscount(timmyTotalCost, timmy);
// Apply the coupon discount to Timmy's total cost
const timmyGrandTotal = applyCouponDiscount(timmyTotalAfterSub, timmy);

// Calculate the total cost for Sarah's refills
const sarahTotalCost = calculateRefillCost(sarah);
// Apply the subscription discount to Sarah's total cost
const sarahTotalAfterSub = applySubscriptionDiscount(sarahTotalCost, sarah);
// Apply the coupon discount to Sarah's total cost
const sarahGrandTotal = applyCouponDiscount(sarahTotalAfterSub, sarah);

// Calculate the total cost for Rocky's refills
const rockyTotalCost = calculateRefillCost(rocky);
// Apply the subscription discount to Rocky's total cost
const rockyTotalAfterSub = applySubscriptionDiscount(rockyTotalCost, rocky);
// Apply the coupon discount to Rocky's total cost
const rockyGrandTotal = applyCouponDiscount(rockyTotalAfterSub, rocky);

// Print the final grand total for each customer
console.log(`Timmy's grand total is $${timmyGrandTotal}.`);
console.log(`Sarah's grand total is $${sarahGrandTotal}.`);
console.log(`Rocky's grand total is $${rockyGrandTotal}.`);





