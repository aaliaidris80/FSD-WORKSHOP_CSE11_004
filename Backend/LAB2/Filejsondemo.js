const fs = require("node:fs/promises");

const filePath = "students.json";

async function createFile() {
    try {
        const students = [
            { id: 1, name: "Aalia", course: "CSE", year: 2 },
            { id: 2, name: "Riya", course: "IT", year: 2 }
        ];
        await fs.writeFile(filePath, JSON.stringify(students, null, 2), "utf8");
        console.log("JSON File Created");
    } catch (error) {
        console.log("Error:", error);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        const students = JSON.parse(data);
        console.log("File Data:", students);
    } catch (error) {
        console.log("Error:", error);
    }
}

async function updateFile() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        const students = JSON.parse(data);
        const newStudent = { id: 3, name: "Rue", course: "CSE", year: 1 };
        students.push(newStudent);
        await fs.writeFile(filePath, JSON.stringify(students, null, 2), "utf8");
        console.log("New student added");
    } catch (error) {
        console.log("Error:", error);
    }
}

async function deleteData() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        let students = JSON.parse(data);
        students = students.filter(s => s.id !== 2);
        await fs.writeFile(filePath, JSON.stringify(students, null, 2), "utf8");
        console.log("Student with id 2 deleted");
    } catch (error) {
        console.log("Error:", error);
    }
}

async function main() {
    await createFile();
    await readFile();
    await updateFile();
    await readFile();
    await deleteData();
    await readFile();
}

main();