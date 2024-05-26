// Array containing greetings
const greetingsArr = ["Hello", "Hi", "Greetings", "Nice to see you", "Hey"];

export function GreetingsText({ name }) {
  // Function to generate a random greeting from the greetingsArr
  function randomGreeting() {
    const maxNum = greetingsArr.length - 1;
    const minNum = 0;
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum; // Generate a random number between minNum and maxNum

    return greetingsArr[randomNumber]; // Return a random greeting from greetingsArr
  }

  // Call the randomGreeting function to get a random greeting
  const greeting = randomGreeting();

  return (
    <h1 className="text-center my-10 text-3xl font-semibold 2xl:text-5xl 2xl:my-16">
      {greeting}, {name}
    </h1>
  );
}
