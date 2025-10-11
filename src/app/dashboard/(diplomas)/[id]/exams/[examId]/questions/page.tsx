import React from "react";

export default function page({ params }: { params: { examId: string } }) {
  return <div>{params.examId}</div>;
}
