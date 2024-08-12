// import { faker } from "@faker-js/faker";
// const words = faker.random.words(10);
import RestartButton from "./components/RestartButton";
import Result from "./components/Result";
import UserTyping from "./components/UserTyping";
import useEngine from "./hooks/useEngine";

const App = () => {
  const { state, words } = useEngine();
  return (
    <div className="p-16 mx-auto">
      <CoundownTimer timeleft={60} />
      <WordsContainer>
        <GeneratesWords words={words} />
        <UserTyping userInput={words} className="absolute inset-0" />
      </WordsContainer>
      <RestartButton
        onRestart={() => console.log("Restarted")}
        className={"mx-auto mt-10 text-slate-500"}
      />
      <Result
        errors={10}
        accuracyPercentage={90}
        total={100}
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
