export const FinishScreen = ({
  points,
  maxPossiblePoints,
}: {
  points: number;
  maxPossiblePoints: number;
}) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
};
