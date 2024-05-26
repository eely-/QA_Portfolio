import { test, expect } from '@playwright/test';
import { SauceLoginPage } from '../Pages/sauce-login';

test('has title', async ({ page }) => {
  const SauceLogin = new SauceLoginPage(page);
  await SauceLogin.goto();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Login', async ({ page }) => {
  const SauceLogin = new SauceLoginPage(page);
  await SauceLogin.goto();


});
