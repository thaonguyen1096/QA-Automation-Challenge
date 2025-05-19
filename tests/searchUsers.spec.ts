import { test } from '@playwright/test';
import { SearchUsersPage } from '../src/pages/searchUsers.page';

test('Search users by username', async ({ page }) => {
  const searchUsersPage = await new SearchUsersPage(page);
  await searchUsersPage.goto();
  const username = "Admin";
  await searchUsersPage.inputSearchConditons(username);
  await searchUsersPage.verifySearchResultContainUsername(username);
});



