// import { faker } from "@faker-js/faker";
// const words = faker.random.words(10);
import RestartButton from "./components/RestartButton";
import { paragraph } from "@ndaidong/txtgen";
const value = paragraph(2);


const App = () => {
  return (
    <>
      <CoundownTimer timeleft={60} />
      <GeneratesWords words={value} />
      <RestartButton 
        onRestart={() => console.log("Restarted")} 
        className={"mx-auto mt-10 text-slate-500"}
      />
    </>
  );
};

const GeneratesWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-400">{words}</div>;
};

const CoundownTimer = ({ timeleft }: { timeleft: number }) => {
  return <h2 className="font-medium text-yellow-400">Time : {timeleft}</h2>;
};

export default App;
