const fs = require("fs");
const path = require("path");
const { getPath } = require("./stream");

fs.readFile(getPath("starter.txt"), "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

console.log(__filename);

fs.writeFile(getPath("reply.txt"), "New file", (err) => {
  if (err) throw err;
  console.log("written");

  fs.appendFile(
    getPath("reply.txt"),
    "\nTesting append to existing file",
    (err) => {
      if (err) throw err;
      console.log("appended to file");

      fs.rename(getPath("reply.txt"), getPath("newReply.txt"), (err) => {
        if (err) throw err;
        console.log("renamed");
      });
    }
  );
});

fs.appendFile(getPath("test.txt"), "Testing append to new file", (err) => {
  if (err) throw err;
  console.log("appended to new file");
});

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
