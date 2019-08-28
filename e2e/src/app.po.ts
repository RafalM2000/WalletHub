import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  
  getSubmitBtn() {
    return element(by.css('app-login button'));
  }

  getValidationMsg() {
    return element(by.css('app-login p.alert')).getText();
  }

}
