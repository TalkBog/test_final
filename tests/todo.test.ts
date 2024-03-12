import {expect, test} from '@playwright/test'

test('todo', async ({page})=> {
    await page.goto("http://localhost:3000/todo")
    const input1 =await page.getByPlaceholder('nom de la tache') 
    await input1.fill("Playwright test")
    const input2 = await page.getByRole('checkbox')
    await input2.check()
    await page.getByRole('button', { name: 'Créer' }).click()
    await expect(page).toHaveURL(/http:\/\/localhost:3000\/todo\/\w+/g)
    await page.getByRole('link', { name: 'Retour a l\'accueil' }).click()
    await expect(page).toHaveURL("http://localhost:3000")
    await expect(page.getByRole('link', { name: 'Playwright test' }).first()).toBeVisible()
    await expect(page.locator('input[name="checkboxPlaywright test"]').first()).toBeChecked()
})