const fs = require("fs");
const path = require("path");

exports.getPath = function (filename) {
  return path.join(__dirname, "files", filename);
};

const rs = fs.createReadStream(exports.getPath("lorem.txt"), {
  encoding: "utf8",
});

const ws = fs.createWriteStream(exports.getPath("new-lorem.txt"));

rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});

rs.pipe(ws);

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
