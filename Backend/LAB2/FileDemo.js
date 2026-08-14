import fs from "node:fs/promises";

const filePath = "Userdata.txt";

async function createFile(content) {
    try {
        await fs.writeFile(filePath, content, "utf8");
        console.log("File created successfully");
    } catch (error) {
        console.log("Error creating file:", error);
    }
}

async function readFile() {
    try {
        const content = await fs.readFile(filePath, "utf8");
        console.log("File content:", content);
    } catch (error) {
        console.log("Error reading file:", error);
    }
}

// Function calls
await createFile("Hello, this is a sample content for the file.");
await readFile();