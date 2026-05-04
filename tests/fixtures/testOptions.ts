import { test as base, expect as baseExpect } from '@playwright/test';
import { FreeTrialPage } from '../pages/freeTrialPage';

type Fixtures = {
  freeTrialPage: FreeTrialPage;
};

export const test = base.extend<Fixtures>({
  freeTrialPage: async ({ page }, use) => {
    const pageObject = new FreeTrialPage(page);
    await use(pageObject);
  },
});

export const expect = baseExpect;
