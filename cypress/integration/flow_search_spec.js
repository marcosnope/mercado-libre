describe('Test App Mercado Libre', () => {
  it('Render dashboard', () => {
    cy.visit('https://mercado-libre.vercel.app');
  });

  it('Validate search', () => {
    const search = 'Apple ipod';
    cy.visit('https://mercado-libre.vercel.app');
    cy.get('#input-search').type(search);
    cy.get('button').click();
    cy.url().should('include', '/items');
  });

  it('Validate data for detail product', () => {
    const search = 'Carros';
    cy.visit('https://mercado-libre.vercel.app');
    cy.get('#input-search').type(search);
    cy.get('button').click();
    cy.url().should('include', `/items?search=${search}`);
    cy.get('#product-0').click();
    cy.url().should('include', '/items');
  });

  it('Validate render detail product for ID', () => {
    cy.visit('https://mercado-libre.vercel.app/items/MLA910714010');
    cy.url().should('include', '/items/MLA910714010');
  });

  it('Validate ID product invalid', () => {
    cy.visit('https://mercado-libre.vercel.app/items/asdasda');
    cy.get('h4').should(
      'contain',
      'No hay publicaciones que coincidan con tu búsqueda'
    );
  });

  it('Validate route invalid', () => {
    cy.visit('https://mercado-libre.vercel.app/prueba');
    cy.url().should('include', '/prueba');
  });

  it('Validate search empty', () => {
    cy.visit('https://mercado-libre.vercel.app/items?search=');
    cy.get('h4').should(
      'contain',
      'Escribe en el buscador lo que quieres encontrar.'
    );
  });
});
