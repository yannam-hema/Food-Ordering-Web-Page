import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact"; 
import "@testing-library/jest-dom"; 

test("does the page render or not", async () => {
  render(<Contact />);
  const result = await screen.findByRole("button"); 
  expect(result).toBeInTheDocument(); 
});
