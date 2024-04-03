import { render, fireEvent } from "@testing-library/react";
import { Login } from "../src/components/Login";
// @ts-ignore
import React from "react";

describe("Login", () => {
  it("renders without crashing", () => {
    render(<Login />);
  });

  it("updates state when email input changes", () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText("Enter email") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    expect(emailInput.value).toBe("test@test.com");
  });

  it("updates state when password input changes", () => {
    const { getByPlaceholderText } = render(<Login />);
    const passwordInput = getByPlaceholderText(
      "Enter Password"
    ) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password" } });
    expect(passwordInput.value).toBe("password");
  });

  // Note: Testing form submission resulting in an API call is more complex and typically requires a mocking library like jest-mock-axios
});
