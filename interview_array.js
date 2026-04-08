//// Group Array Items by Property 
///Interview Question from Capgemini

/**
 * 
 * const users = [
 *  { name: "Mohit", city: "Delhi" },
 * { name: "Amit", city: "Delhi" },
 * {name: "Rohit", city: "Noida" },
 * ];
 */

const users = [
   { name: "Mohit", city: "Delhi" },
  { name: "Amit", city: "Delhi" },
  {name: "Rohit", city: "Noida" },
  ];

const grouped = users.reduce((acc, user) => {
    (acc[user.city]=acc[user.city] || []).push(user);
    return acc;
}, {});

console.log(grouped);

////acc = accumulator
///{} blank object
