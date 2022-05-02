import http from "http";
const port = 3005

const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     "Content-Type": "text/plain"
    // });
    // res.end("Vanakam World");
    const items = req.url.split("/");

    if (items[1] === "notes") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            id: 1,
            name: "Vankam da Mapula Notes url  la irudhu"
        }));
    }
    else if (items[1] === "books") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Vankam da Mapula books url la iruthu");
        res.write("</body>");
        res.write("</html>");
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, () => { console.log("Working Over") });