import { IQuestion } from "../interfaces/interfaces";

export const Progress = ({
  index,
  questions,
  points,
  answer,
}: {
  index: number;
  questions: IQuestion[];
  points: number;
  answer: number;
}) => {
  // let maxPossiblePoints = 0;
  // maxPossiblePoints = maxPossiblePoints + points;
  // or we can use reducer in JavaScript:
  const maxPossiblePoints = questions.reduce((cur, acc) => cur + acc.points, 0);

  return (
    <>
      <header className="progress">
        {/* <progress max={questions.length} value={index} /> */}
        {/* {Number(answer !== null)} when answer is not null, it means we have an answer, and Number will convert it to the 1 and it will add to the index, when we don't answer a question yet, answer will be null and Number convert it to the 0 and 0 add to index and will not add the progress value! */}
        <progress
          max={questions.length}
          value={index + Number(answer !== null)}
        />
        <p>
          Question <strong>{index + 1}</strong> / {questions.length}
        </p>

        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </>
  );
};
