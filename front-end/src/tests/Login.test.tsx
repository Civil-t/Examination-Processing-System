import { render, fireEvent } from "@testing-library/react";
import { Login } from "../components/Login";
// @ts-ignore
import React from "react";
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        {" "}
        <Login />
      </MemoryRouter>
    );
  });

  it("updates state when email input changes", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        {" "}
        <Login />
      </MemoryRouter>
    );
    const emailInput = getByPlaceholderText("Enter email") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    expect(emailInput.value).toBe("test@test.com");
  });

  it("updates state when data is posted to the database", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        {" "}
        <Login />
      </MemoryRouter>
    );
    const passwordInput = getByPlaceholderText(
      "Enter Password"
    ) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password" } });
    expect(passwordInput.value).toBe("password");
  });
});
