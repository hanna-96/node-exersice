process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const entry = data.toString().trim();
  const location = process.cwd().toString();

  if(entry === 'pwd') {
    process.stdout.write(location);
    process.stdout.write('\nprompt > ');
  }
});
