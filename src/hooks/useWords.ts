import { paragraph } from "@ndaidong/txtgen";
import { useCallback, useState } from "react";

const generateWords = (count: number) => {
  return paragraph(count);
};

const useWords = (count: number) => {
  const [words, setWords] = useState<string>(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(paragraph(count));
  }, [count]);
  return { words, updateWords };
};

export default useWords;
