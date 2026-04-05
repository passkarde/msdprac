const math =require('./math');

console.log("Addition:", math.add(10,20));
console.log("Multiplication:", math.multiply(5,6));
console.log("Substraction:", math.sub(20,10));

// const express = require('express');
// // const math = require('./math');

// const app = express();

// app.get('/', (req, res) => {
//     const sum = math.add(10, 20);
//     const product = math.multiply(5, 6);
//     const sub = math.sub(20,10);

//     res.send(`
//         <h2>Results</h2>
//         <p>Addition: ${sum}</p>
//         <p>Multiplication: ${product}</p>
//          <p>Substraction: ${sub}</p>
//     `);
// });

// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });
