import { AngularRoutesPage } from './app.po';

describe('angular-routes App', () => {
  let page: AngularRoutesPage;

  beforeEach(() => {
    page = new AngularRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
