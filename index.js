const fs = require('fs');

module.exports = function(fileName) {
  const subst = `$1const $2 = ($3) =>`
  const regex = /([\.]*)function\s*([\w]*)\(([^\)]+)\)/;
  const lineReader = require('readline').createInterface({
    input: fs.createReadStream(fileName)
  });
  
  lineReader.on('line', function (line) {
  const updatedLine = line.replace(regex ,subst)
  fs.appendFileSync("./output.txt", updatedLine + "\n");
  });
  console.log('Done please check output.txt');
}