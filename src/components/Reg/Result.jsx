import React from "react";
import { useData } from "./DateContext";

export default function Result() {
  const { data } = useData();
  return (
    <div>
      <h1>done</h1>
    </div>
  );
}
