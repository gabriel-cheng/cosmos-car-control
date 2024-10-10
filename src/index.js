import app from "./app.js";
const port = process.env.PORT || 5500;

function main() {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

main();