import express from "express";

const app = express();
const port = 7000;

app.use(express.json());

const arr = [
    {
        id: 111,
        name: "A",
        dept: "Cse",
        classs: "Cse11",
    },
    {
        id: 102,
        name: "Ab",
        dept: "Cse",
        classs: "Cse11",
    },
    {
        id: 101,
        name: "alizeh",
        dept: "Cse",
        classs: "Cse11",
    },
];

const registeredData = [];

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Server",
        arr
    });
});

app.get("/user", (req, res) => {
    try {
        res.status(200).json({
            message: "Welcome to Server",
            arr
        });
    }
    catch (error) {
        console.log(`error found: ${error}`);
    }
});

app.post("/create", (req, res) => {
    try {
        const { id, name, dept, classs } = req.body;

        const newUser = {
            id,
            name,
            dept,
            classs,
        };

        arr.push(newUser);

        res.status(200).json({
            message: "user created successfully",
            newUser
        });
    }
    catch (error) {
        console.log(`Error message ${error}`);
    }
});

app.get("/registered", (req, res) => {
    res.status(200).json({
        users: registeredData,
    });
});


// GET USER BY ID
app.get("/user/:id", (req, res) => {
    try {
        const id = req.params.id;

        const search = arr.findIndex((u) => u.id == id);

        if (search === -1) {
            return res.status(404).json({
                message: "Not found in array"
            });
        }

        return res.status(200).json({
            message: "User found",
            user: arr[search]
        });
    }
    catch (error) {
        console.log(`Message : ${error}`);
    }
});


// EDIT USER
app.put("/edit/:id", (req, res) => {
    try {
        const id = req.params.id;

        const { name, dept, classs } = req.body;

        const search = arr.findIndex((u) => u.id == id);

        if (search === -1) {
            return res.status(404).json({
                message: "Not found in array"
            });
        }

        arr[search] = {
            id: arr[search].id,
            name,
            dept,
            classs
        };

        return res.status(200).json({
            message: "User updated successfully",
            user: arr[search]
        });
    }
    catch (error) {
        console.log(`Message : ${error}`);
    }
});


app.listen(port, () => {
    console.log(`running on server ${port}`);
});