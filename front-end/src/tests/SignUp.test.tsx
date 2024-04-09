// import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignUp from "../components/SignUp";
import { MemoryRouter } from "react-router-dom";

describe("SignUp", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
  });

  it("updates name state when input changes", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    const nameInput = getByPlaceholderText("Enter name") as HTMLInputElement; // Type assertion

    fireEvent.change(nameInput, { target: { value: "John" } });

    expect(nameInput.value).toBe("John");
  });

  it("updates email state when input changes", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    const emailInput = getByPlaceholderText("Enter email") as HTMLInputElement; // Type assertion

    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    expect(emailInput.value).toBe("john@example.com");
  });

  it("updates password state when input changes", () => {
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
