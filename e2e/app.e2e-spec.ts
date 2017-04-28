import { DocumentationPage } from './app.po';

describe('documentation App', () => {
  let page: DocumentationPage;

  beforeEach(() => {
    page = new DocumentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
