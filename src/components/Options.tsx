export const Options = ({ question }: any) => {
  return (
    <div className="options">
      {question.options.map((option: string) => (
        <button key={option} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
};
