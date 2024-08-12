import RestartButton from "./components/RestartButton";
import Result from "./components/Result";
import UserTyping from "./components/UserTyping";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

const App = () => {
  const { state, words, timeLeft, typed, restart, errors, totalTyped, wpm } =
    useEngine();
  return (
    <div className="p-16 mx-auto">
      <CoundownTimer timeleft={timeLeft} />
      <WordsContainer>
        <GeneratesWords words={words} />
        <UserTyping
          words={words}
          userInput={typed}
          className="absolute inset-0"
        />
      </WordsContainer>
      <RestartButton
        onRestart={restart}
        className={"mx-auto mt-10 text-slate-500"}
      />
      <Result
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
        wpms={wpm}
        className={"mt-10"}
      />
    </div>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mt-3 text-4xl leading-relaxed break-all">
      {children}
    </div>
  );
};

const GeneratesWords = ({ words }: { words: string }) => {
  return <div className=" text-slate-400">{words}</div>;
};

const CoundownTimer = ({ timeleft }: { timeleft: number }) => {
  return <h2 className="font-medium text-yellow-400">Time : {timeleft}</h2>;
};

export default App;
