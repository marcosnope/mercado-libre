describe('My First Test', () => {
  it('Validate filter', () => {
    const search = 'apple';
    cy.visit('https://mercado-libre.vercel.app');
    cy.get('.FormControl_form-control__3Alpg').type(search);
    cy.get('button').click();
    cy.url().should('include', `/items?search=${search}`);
    cy.get(':nth-child(1) > .col-md-10').click();
    cy.url().should('include', '/items');
  });

  it('Validate data for detail product', () => {
    cy.visit('https://mercado-libre.vercel.app/items/MLA910714010');
  });
});
