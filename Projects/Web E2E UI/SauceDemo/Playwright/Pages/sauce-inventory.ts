import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private inventoryItems: Locator
  private filter: Locator
  private InventoryItemList = [
   'Sauce Labs Backpack' ,
   'Sauce Labs Bike Light' ,
   'Sauce Labs Bolt T-Shirt' ,
   'Sauce Labs Fleece Jacket' ,
   'Sauce Labs Onesie' ,
   'Test.allTheThings() T-Shirt (Red)' ];


  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.filter = page.locator('[data-test="product-sort-container"]');
  }

  async getInventoryItems() {
    return this.inventoryItems.count();
  }

  async selectFilterOption(a){
    return this.filter.selectOption(a)
  }

  async filterTestAZ(){
    const count = this.inventoryItems.count()
    const names = await this.page.$$eval('.inventory_item', elements => elements.map(el => el.textContent.trim().split('\n')[0]))
    console.log(names)
    console.log(this.InventoryItemList)
    if (names[0].includes(this.InventoryItemList[1
        
    ])){
        return console.log('This is true')
    } return console.log('This is false')
}
  }

