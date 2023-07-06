import WordResult from "@/components/Word";
import React from "react";
import Header from "@/components/Header";

async function getWord(word: string) {
  const result = await (
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  ).json();

  return result[0];
}

export default async function Page(props: any) {
  const word = await getWord(props.params.word);

  if (!word) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className={"p-4"}>
        <WordResult word={word} />
      </div>
    </>
  );
}
