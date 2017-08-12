import { AviotaAssetManagerPage } from './app.po';

describe('aviota-asset-manager App', () => {
  let page: AviotaAssetManagerPage;

  beforeEach(() => {
    page = new AviotaAssetManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
