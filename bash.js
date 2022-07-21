const pwd = require("./pwd");
const date = require("./date");
const ls = require("./ls");

const done = (data) => {
  process.stdout.write(data);
  process.stdout.write("\nprompt > ");
};

//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === "pwd") {
    pwd(done);
  }
  if (cmd === "date") {
    date(done);
  }
  if (cmd === "ls") {
    ls(done);
  }
});
