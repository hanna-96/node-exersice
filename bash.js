// process.stdout.write('prompt>');
// process.stdin.on('data',(data)=>{
//     const cmd = data.toString().trim();
//     process.stdout.write('You typed:' + cmd);
//     process.stdout.write('\nprompmt>');
// })

// process.stdout.write('prompt>');
// process.stdin.cwd('data',(data)=>{
//     let cwd = process.cwd();
//     console.log('this is  data',data);
//     console.log('this is  cwd',cwd);
//     if(data.toString().trim() === 'pwd'){
//         process.stdout.write(cwd);
//     }
//     process.stdout.write('\nprompt>');
// })
process.cwd("data", (data) => {
  const cmd = data.toString().trim();
  let pwd = process.cwd().toString();
  
  process.stdout.write("You typed:" + cmd);

  process.stdout.write("\nprompt>");
});
