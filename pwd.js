//Outputs a prompt in the terminal
process.stdout.write('prompt > ');
//the stdin 'data' event fires(on) after a user types in a line
let getPwd = process.stdin.on('data', (data) => {
  const entry = data.toString().trim();//removes a line
  const location = process.cwd();  //prints out the full path to the current working directory
//if the user types 'pwd' command
  if(entry === 'pwd') { 
      //output a path
    process.stdout.write(location);
    process.stdout.write('\nprompt > ');
  }
});

module.exports = getPwd;