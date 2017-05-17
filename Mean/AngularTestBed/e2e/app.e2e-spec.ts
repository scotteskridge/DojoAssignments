import { AngularTestBedPage } from './app.po';

describe('angular-test-bed App', () => {
  let page: AngularTestBedPage;

  beforeEach(() => {
    page = new AngularTestBedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
