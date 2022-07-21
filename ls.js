const fs = require("fs");
const ls = (done) => {
  fs.readdir(process.cwd(), (err, files) => {
    done(files.join("\n"));
  });
};

module.exports = ls;
