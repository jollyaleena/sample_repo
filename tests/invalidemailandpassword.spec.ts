import { test, expect } from '@playwright/test';
import {Loginpage} from '../pages/login'

test('test', async ({ page }) => {

  const Login = new Loginpage(page)
  await Login.gotoLoginpage();
  await Login.login('user001@goquant.io','60Re3G9K4Ihegxpi');
  await expect(page.locator('text=The user was not found in the system')).toBeVisible();
  await expect(page).toHaveScreenshot()
  
  
  
});