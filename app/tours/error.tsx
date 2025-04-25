"use client";
import React from "react";

function error({ error }: { error: Error }) {
  console.log(error);
  return <div>there was an issue...</div>;
}

export default error;
