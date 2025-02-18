const express = require(`express`);
const employees = require("./db/employees.cjs");
let idNumber = 13;
const path = require('path');

console.log(employees);

const app = express();

// no need to run the route every time
app.use(express.json());
app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/dist/index.html`);
// });


app.get('/employees', (req, res) => {
  const filePath = path.resolve(__dirname, './db/employees.cjs')
  res.sendFile(filePath);
});


app.get('/employees/random', (req, res) => {
  
  // get a random num
  const randomNum = Math.round(Math.random() * (employees.length - 1));
  // use random number to access the element based on the index
  const randomEmployee = employees[randomNum];
  res.send(randomEmployee);
  
});


app.get(`/employees/:employeeId`, (req, res) => {
  const {employeeId} = req.params;

  const foundEmployee = employees.find((eachEmployee) => {
    return eachEmployee.id === Number(employeeId);
  });
    res.send(foundEmployee);
});

app.post(`/employees/post`, (req, res, next) => {
  const {name} = req.body;

  if (!name) {
    const error = new Error (`OOOOOOps, name NOT found`);
    next(error);
  } else {
    employees.push({
      id: idNumber,
      name
    });

    idNumber++;
    res.send(employees);
  }
});

// Error Message
app.use((error, req, res, next) => {
  console.log(`ERROR MESSAGE`, err.message);
  res.status(400).send(err.message);
});


// 404 page not found
app.use((res, req) => {
  res.status(404).send(`Page not found`)
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {  
  console.log(`listening on PORT ${PORT}`);
});