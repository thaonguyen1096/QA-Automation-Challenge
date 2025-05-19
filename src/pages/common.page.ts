import { expect, type Locator, type Page } from '@playwright/test';

export class CommonPage {
  private readonly page: Page;
  private readonly userDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userDropdown = page.locator('.oxd-userdropdown');
  }

  async verifyUserDropdownDisplay()
  {
    await expect(this.userDropdown).toBeVisible();
  }
}
