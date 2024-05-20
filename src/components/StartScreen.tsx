export const StartScreen = ({ questions }: any) => {
  // console.log(questions);

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questions.length} question to test your React mastery!</h3>
      <button>Let's start!</button>
    </div>
  );
};
