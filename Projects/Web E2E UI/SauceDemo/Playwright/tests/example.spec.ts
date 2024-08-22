import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/sauce-login';

test('has title', async ({ page }) => {
  const SauceLogin = new LoginPage(page);
  await SauceLogin.goto();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Login', async ({ page }) => {
  const SauceLogin = new LoginPage(page);
  await SauceLogin.goto();


});
