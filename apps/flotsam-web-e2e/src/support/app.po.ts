export const getGreeting = () => cy.get('h1');
export const getElementByTestId = (testId: string) => cy.get(`[data-test-id="${testId}"]`);
