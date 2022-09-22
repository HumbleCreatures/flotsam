import { fireEvent, render } from '@testing-library/react';
import { EventComponentToTest, PropLogicComponentToTest } from './componentsToTest'


describe('Test a component that has different logic depending on a prop', () => {
  it('should display message if set', () => {
    const {getByText} = render(<PropLogicComponentToTest message='new message' />);
    const element = getByText('new message');
    expect(element).toBeTruthy();
  });

  it('should display default message if message is not set', () => {
    const {getByText} = render(<PropLogicComponentToTest />);
    const element = getByText('There is no message again');
    const thirdElement = getByText('Third message');
    expect(thirdElement).toBeTruthy();
    expect(element).toBeTruthy();
  });

  it('should display default message if message is not set with snapshot', () => {
    const {baseElement} = render(<PropLogicComponentToTest />);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Test a component with a click event', () => {
  it('should have an a function that has been called with a value', () => {
    const funcToGetCalled = jest.fn();
    const {getByRole} = render(<EventComponentToTest message='a message' doStuff={funcToGetCalled} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(funcToGetCalled).toBeCalled();
    expect(funcToGetCalled).toBeCalledWith('a message');
  });
});


