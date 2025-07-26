import {expect, test} from '@playwright/test';

test.describe("PHP Travels", () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://app.phptravels.com/dashboard")
    })
//🍪//
    test("Login", async ({page}) => {
        await page.fill("#email" , "jeanmarcus52@gmail.com")
        await page.fill("#password" , "92507567")
        await page.click("#submit")//🍪//
        await expect(page.getByText("Dashboard").nth(1)).toBeVisible()
    })

    test.afterEach(async ({page}) => {
        console.log("Teste finalizado")
    })
})