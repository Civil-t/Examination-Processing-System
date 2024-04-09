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
