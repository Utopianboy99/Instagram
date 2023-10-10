import fs from "fs";
async function getData() {
    try {
      fs.readFile("./app/layout.js", (err, data) => {
        console.log(data.buffer,err);
      });
      fs.writeFile("john.txt", "John is cool", (err, data) => {
        console.log(data);
      });
      const res = await fetch("https://fakestoreapi.com/products");
      return await res.json();
    } catch (error) {
      throw error;
    }
}
export default getData