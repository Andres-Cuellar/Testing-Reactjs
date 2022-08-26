import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import Edad from "./Edad";

test("render contetn", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const somethingElse = render(<Edad />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  somethingElse.getByText("Febrero");
});

test("mayor de edad", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const somethingElse = render(<Edad />);

  const dayInput = screen.getByTestId("day");
  fireEvent.change(dayInput, { target: { value: 10 } });

  const yearInput = screen.getByTestId("year");
  fireEvent.change(yearInput, { target: { value: 1991 } });

  const button = somethingElse.getByText("Enviar");
  fireEvent.click(button);

  somethingElse.getByText("Bienvenido");
});

test("menor de edad", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const somethingElse = render(<Edad />);

  const dayInput = screen.getByTestId("day");
  fireEvent.change(dayInput, { target: { value: 10 } });

  const yearInput = screen.getByTestId("year");
  fireEvent.change(yearInput, { target: { value: 2010 } });

  const button = somethingElse.getByText("Enviar");
  fireEvent.click(button);

  somethingElse.getByText("Lo sentimos pero eres menor de edad");
});

test("error dia", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const somethingElse = render(<Edad />);

  const dayInput = screen.getByTestId("day");
  fireEvent.change(dayInput, { target: { value: 40 } });

  somethingElse.getByText("Lo sentimos pero ese dia no existe");
});
