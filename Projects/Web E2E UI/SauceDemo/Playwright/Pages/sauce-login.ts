import {expect,type Locator, type Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameField: Locator;
    readonly PasswordField: Locator;
    readonly LoginButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.userNameField = page.locator('[data-test="username"]')
    this.PasswordField = page.locator('[data-test="password"]')
    this.LoginButton = page.locator('[data-test="login-button"]')
}

async goto(){
    await this.page.goto('https://www.saucedemo.com/')
}

async login(username: string, password: string) {
    await this.userNameField.fill(username);
    await this.PasswordField.fill(password);
    await this.LoginButton.click();
  }

}