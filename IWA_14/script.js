firstName = 'John';
 age = 35;
 programming = 'Coding';

const logTwice = (message) => {
  console.log(message);
  console.log(message)
};


function showmessage() {
  let message = (`Hello, ${firstName} (${age}). I love ${programming}!`);

  alert(message);
}

showmessage();



