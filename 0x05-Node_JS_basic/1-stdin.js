process.stdout.write('Welcome to Holberton School, what is your name?\n');

let inputName = '';

const onData = (data) => {
  inputName += data;
  process.exit();
};

process.stdin.on('data', onData);

process.on('exit', () => {
  const trimmedName = inputName.trim();
  process.stdout.write(`Your name is: ${trimmedName}\n`);
  process.stdout.write('This important software is now closing\n');
});

process.stdin.resume();

