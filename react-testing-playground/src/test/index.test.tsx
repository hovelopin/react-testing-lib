import { render, screen } from "@testing-library/react"
import Home from "../pages"

describe('test', () => {
  it('render test' , () => {
    render(<Home />);

    const findText = screen.getByAltText('Vercel');
    expect(findText).toBeInTheDocument();
  })
})