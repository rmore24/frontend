import { TrialTemplateTemplatePage } from './app.po';

describe('TrialTemplate App', function() {
  let page: TrialTemplateTemplatePage;

  beforeEach(() => {
    page = new TrialTemplateTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
