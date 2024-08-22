import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/sauce-login';
import { InventoryPage } from '../Pages/sauce-inventory';

test('should login and display inventory items', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const itemCount = await inventoryPage.getInventoryItems();
  expect(itemCount).toBeGreaterThan(0);
});

test('should login and display filtered inventory items', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.selectFilterOption('az')

  const itemCount = await inventoryPage.getInventoryItems();
  expect(itemCount).toBeGreaterThan(0);
  await inventoryPage.filterTestAZ()
});
