import React from "react";
import { getLetter } from "../cart.api";
import LetterDetailPage from "./letter-alone";

interface Props {
  params: {
    id: string;
  };
}

async function PageDetails({ params }: Props) {
  const letter = await getLetter(params.id);

  return (
    <div className="h-full my-24">
      <LetterDetailPage letter={letter} />
    </div>
  );
}

export default PageDetails;
