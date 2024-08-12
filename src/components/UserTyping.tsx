import Caret from "./Caret";

const UserTyping = ({
  userInput,
  className,
}: {
  userInput: string;
  className?: string;
}) => {
  const typedCharacters = userInput.split("");
  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />;
      })}
      <Caret />
    </div>
  );
};

const Character = ({ char }: { char: string }) => {
  return <span className="text-primary">{char}</span>;
};

export default UserTyping;
