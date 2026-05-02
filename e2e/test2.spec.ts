import { test, expect } from '@playwright/test';

test('My First Project', async ({ page }) => {
  await test.step('Navigate to URL', async () => {
    await page.goto('https://tenantqa1.clinicalone.oraclecloud.com/its/eclinical-portal/');
    await page.getByRole('button', { name: 'Sign In with Oracle Life' }).click();
  });
});
