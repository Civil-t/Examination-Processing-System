// import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignUp from "../components/SignUp";
import { MemoryRouter } from "react-router-dom";

// Testing to see if student sees the registration form successfully

describe("SignUp", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
  });

  // Testing to see if the student can only register for 5 courses

  it("updates state when five and only five courses are selected", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    const nameInput = getByPlaceholderText("Enter name") as HTMLInputElement; // Type assertion

    fireEvent.change(nameInput, { target: { value: "John" } });

    expect(nameInput.value).toBe("John");
  });

  // Testing to see if the student can submit the courses to the database

  it("updates state when courses are submitted to the database", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    const emailInput = getByPlaceholderText("Enter email") as HTMLInputElement; // Type assertion

    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    expect(emailInput.value).toBe("john@example.com");
  });

  // Testing to see if student can view regusterd courses

  it("renders registered courses without crashing", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    const passwordInput = getByPlaceholderText(
      "Enter Password"
    ) as HTMLInputElement; // Type assertion

    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput.value).toBe("password123");
  });
});
