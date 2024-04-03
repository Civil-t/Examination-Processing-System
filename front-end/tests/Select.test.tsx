import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import Select from "../src/components/Select";

jest.mock("axios");

describe("Select component", () => {
  it("renders without crashing", () => {
    render(<Select />);
  });

  it("updates state when course input changes", async () => {
    render(<Select />);
    const courseSelect = screen.getByLabelText(
      "Select Course you are teaching"
    ) as HTMLSelectElement;

    fireEvent.change(courseSelect, { target: { value: "IST" } });

    await waitFor(() => {
      expect(courseSelect.value).toBe("IST");
    });
  });

  it("updates state when student input changes", async () => {
    render(<Select />);
    const studentSelect = screen.getByLabelText(
      "Select Student"
    ) as HTMLSelectElement;

    fireEvent.change(studentSelect, { target: { value: "student123" } });

    await waitFor(() => {
      expect(studentSelect.value).toBe("student123");
    });
  });

  it("updates state when semester input changes", async () => {
    render(<Select />);
    const semesterSelect = screen.getByLabelText(
      "Select Semester"
    ) as HTMLSelectElement;

    fireEvent.change(semesterSelect, { target: { value: "Sem 1" } });

    await waitFor(() => {
      expect(semesterSelect.value).toBe("Sem 1");
    });
  });

  /* it('submits form data when submitted', async () => {
    render(<Select />);
    const mockResponse = { data: 'Submission successful' };
    axios.post.mockResolvedValueOnce(mockResponse);

    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3001/updateStudents',
        expect.any(Array),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
    });
  }); */
});
