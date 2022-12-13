const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
//app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
//app.use(express.json());


//app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

//addition

            app.post("/add", (req, res) => {
                try {
                    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
                        return res.json({
                            status: "Failure",
                            message: "Invalid data types"
                        })
                    }
                    if ((req.body.num1 > 1000000) || (req.body.num2 > 1000000)) {
                        return res.json({
                            status: "Failure",
                            message: "Overflow"
                        })
                    }

                    if ((req.body.num1 < -1000000) || (req.body.num2 < -1000000)) {
                        return res.json({
                            status: "Failure",
                            message: "Underflow"
                        })
                    }


                    let sum = Number(req.body.num1) + Number(req.body.num2)
                    res.json({
                        status: "Success",
                        message: `the sum of given two numbers is ${sum}`
                    })
                }
                catch (e) {
                    res.status(400).json({
                        status: "Error",
                        message: e.message
                    })
                }


            })

// substraction

            app.post("/sub", (req, res) => {
                try {
                    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
                        return res.json({
                            status: "Failure",
                            message: "Invalid data types"
                        })
                    }
                    if ((req.body.num1 > 1000000) || (req.body.num2 > 1000000)) {
                        return res.json({
                            status: "Failure",
                            message: "Overflow"
                        })
                    }

                    if ((req.body.num1 < -1000000) || (req.body.num2 < -1000000)) {
                        return res.json({
                            status: "Failure",
                            message: "Underflow"
                        })
                    }


                    let sub = Number(req.body.num1) - Number(req.body.num2)
                    res.json({
                        status: "Success",
                        message: `the difference of given two numbers is ${sub}`
                    })
                }
                catch (e) {
                    res.status(400).json({
                        status: "Error",
                        message: e.message
                    })
                }


            })


// Multiplication

            app.post("/multiply", (req, res) => {
                try {
                    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
                        return res.json({
                            status: "Failure",
                            message: "Invalid data types"
                        })
                    }
                    if ((req.body.num1 > 1000000) || (req.body.num2 > 1000000)) {
                        return res.json({
                            status: "Failure",
                            message: "Overflow"
                        })
                    }

                    if ((req.body.num1 < -1000000) || (req.body.num2 < -1000000)) {
                        return res.json({
                            status: "Failure",
                            message: "Underflow"
                        })
                    }


                    let mult = Number(req.body.num1) * Number(req.body.num2)
                    res.json({
                        status: "Success",
                        message: `the Multiplication of given two numbers is ${mult}`
                    })
                }
                catch (e) {
                    res.status(400).json({
                        status: "Error",
                        message: e.message
                    })
                }


            })



// division

            app.post("/divide", (req, res) => {
                try {
                    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
                        return res.json({
                            status: "Failure",
                            message: "Invalid data types"
                        })
                    }
                    if ((req.body.num1 > 1000000) || (req.body.num2 > 1000000)) {
                        return res.json({
                            status: "Failure",
                            message: "Overflow"
                        })
                    }

                    if ((req.body.num1 < -1000000) || (req.body.num2 < -1000000)) {
                        return res.json({
                            status: "Failure",
                            message: "Underflow"
                        })
                    }

                    if(req.body.num2 == 0){
                        res.json({
                            status: "Failure",
                            message: "Cannot divide by zero"
                        })
                    }


                    let div = Number(req.body.num1) / Number(req.body.num2)
                    res.json({
                        status: "Success",
                        message: `the division of given two numbers is ${div}`
                    })
                }
                catch (e) {
                    res.status(400).json({
                        status: "Error",
                        message: e.message
                    })
                }


            })



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;