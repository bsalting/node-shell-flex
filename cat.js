const fs = require("fs");
//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const [cmd file] = data.toString().trim().split(" "); //remove the newline

  if (cmd[0] === "cat") {
    fs.read;
  } else if (cmd === "ls") {
    ls();
  }
  process.stdout.write("\nprompt > ");
});
