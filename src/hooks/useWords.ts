import { paragraph } from "@ndaidong/txtgen";
import { useCallback, useState } from "react";
// import { faker } from "@faker-js/faker";
// const words = faker.random.words(10);

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
