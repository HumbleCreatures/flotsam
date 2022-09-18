import { fireEvent, render, screen } from '@testing-library/react';
import {ComponentToTest } from './componentToTest'

describe('ComponentToTest without error message', () => {

  it('should show default value', () => {
    const funcToGetCalled = jest.fn();
    const {getByRole} = render(<ComponentToTest message='hej2' doStuff={funcToGetCalled} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(funcToGetCalled).toBeCalled();
    expect(funcToGetCalled).toBeCalledWith('hej');
  });
});

/*
const button = screen.getByRole('button')

    fireEvent.click(button)
  */
