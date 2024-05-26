const greetingsArr = ["Hello", "Hi", "Greetings", "Nice to see you", "Hey"];

export function GreetingsText({ name }) {
  function randomGreeting() {
    const maxNum = greetingsArr.length - 1;
    const minNum = 0;
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

    return greetingsArr[randomNumber];
  }

  const greeting = randomGreeting();

  return (
    <h1 className="text-center my-10 text-3xl font-semibold 2xl:text-5xl 2xl:my-16">
      {greeting}, {name}
    </h1>
  );
}
