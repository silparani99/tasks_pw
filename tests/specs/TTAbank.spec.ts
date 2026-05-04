import { test, expect } from '@playwright/test';

test('TTAbankproject',async({page})=>{
    await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
    await page.getByRole('button', { name: 'Sign In' }).isVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByRole('textbox', { name: 'John Doe' }).fill('silpa');
    await page.getByRole('textbox', { name: 'you@example.com' }).fill('silpa@example.com');
    await page.getByRole('textbox', { name: '••••••••' }).fill('silpa123');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await page.getByRole('button', { name: 'Dashboard' }).click();
   const Balance= page.getByRole('heading', { name: '$50,000.00' });
    await expect(Balance).toBeVisible();
    await page.getByRole('button', { name: 'Transfer Funds' }).click();
      await page.getByPlaceholder('0.00', { exact: true }).click
   await page.getByPlaceholder('0.00', { exact: true }).fill('5000');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();
    await page.getByRole('button', { name: 'Dashboard' }).click();
   const FinalBalance= page.getByRole('heading', { name: '$45,000.00' });
    await expect(FinalBalance).toBeVisible();
    page.close();

})