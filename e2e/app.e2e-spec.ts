import { KwetterAngularPage } from './app.po';

describe('kwetter-angular App', () => {
  let page: KwetterAngularPage;

  beforeEach(() => {
    page = new KwetterAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
