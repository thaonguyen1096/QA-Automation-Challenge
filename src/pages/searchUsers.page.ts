import { expect, type Locator, type Page } from '@playwright/test';

export class SearchUsersPage {
  private readonly page: Page;
  private readonly username: Locator;
  private readonly searchButton: Locator;
  private readonly usernames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('.oxd-table-filter-area .oxd-input');
    this.searchButton = page.locator('button[type=submit]');
    this.usernames = page.locator("xpath=//*[@class='oxd-table-body']//div[@role='row']/div[@role='cell'][2]");
  }

  async goto() {
    await this.page.goto('/web/index.php/admin/viewSystemUsers');
  }

  async inputSearchConditons(username?: string, userrole?: string, employeeName?: string, status?: string)
  {
    await this.username.fill(username != undefined ? username : "");    
    await this.searchButton.click();
  }

    async clickSearch()
  {    
    await this.searchButton.click();
  }

  async verifySearchResultContainUsername(username: string)
  {
    await this.usernames.first().waitFor({ state: 'visible', timeout: 5000 });
    const usernameList = await this.usernames.allTextContents();
    expect(usernameList).toContain(username);
  }
}