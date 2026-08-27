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
async function appendFile(content){
    try{
        await fs.appendFile(filePath,content,"utf8");
        console.log("Content appended successfully");
    } catch (error) {
        console.log("Error appending to file:", error);
    }
}
async function deleteFile(){
    try{
        await fs.unlink(filePath);
        console.log("File deleted successfully");
    } catch (error) {
        console.log("Error deleting file:", error);
}
}
// Function calls
await createFile("Hello, this is a sample content for the file.");
await readFile();
await appendFile("\nThis is an appended line.");
await readFile();
// await deleteFile();