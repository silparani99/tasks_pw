import { Locator, Page, expect } from '@playwright/test';

export class FreeTrialPage {
  private readonly page: Page;
  private readonly businessEmailField: Locator;
  private readonly domainError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.businessEmailField = page.getByRole('textbox', { name: 'Business Email' });
    this.domainError = page.getByText("gmail.com doesn't look like a business domain. Please use your business email.");
  }

  async goto(): Promise<void> {
    await this.page.goto('/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');
  }

  async enterBusinessEmail(email: string): Promise<void> {
    await this.businessEmailField.fill(email, { timeout: 5000 });
  }

  async assertConsumerEmailRejected(): Promise<void> {
    await expect(this.domainError).toBeVisible();
  }
}
