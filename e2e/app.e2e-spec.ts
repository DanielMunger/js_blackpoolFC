import { BlackpoolFCPage } from './app.po';

describe('blackpool-fc App', function() {
  let page: BlackpoolFCPage;

  beforeEach(() => {
    page = new BlackpoolFCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
