import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tasks for WebDev');
  });

  it('should display Submit button', () => {
    page.navigateTo();
    expect(page.getSubmitBtn().getText()).toEqual('Submit');
  });

  it('should display validation required', () => {
    page.navigateTo();
    page.getSubmitBtn().click();
    expect(page.getValidationMsg()).toEqual('Login and password should be filled in');
  });

});
