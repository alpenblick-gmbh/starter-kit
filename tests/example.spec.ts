import { test, expect } from '@playwright/test'

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/')

  // Pruefe dass die Seite geladen wird
  await expect(page.locator('h1')).toContainText('Starter Kit')
})

test('health endpoint responds', async ({ request }) => {
  const response = await request.get('/api/health')

  expect(response.ok()).toBeTruthy()

  const data = await response.json()
  expect(data.status).toBe('ok')
})
