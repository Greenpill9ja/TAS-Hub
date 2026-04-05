import { expect, test } from "@playwright/test";

test("homepage renders core sections without runtime errors", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.locator("main")).toBeVisible();
  await expect(page.getByRole("heading", { name: /Tech and Sun powering future generations/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /The TAS Solution/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Our Hubs/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /The Stack/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /2026 Roadmap/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Meet the team/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Hub Activities/i })).toHaveCount(0);
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Message")).toBeVisible();
  await expect(page.getByText(/Built on Ethereum/i)).toHaveCount(0);
  await expect(page.getByTestId("team-member-anthony-amio").getByLabel(/Anthony Amio on LinkedIn/i)).toHaveCount(0);

  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("mobile navigation opens and closes without runtime errors", async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto("/", { waitUntil: "networkidle" });

  const openButton = page.getByTestId("mobile-menu-button");
  await openButton.click();
  await expect(page.getByRole("link", { name: "About TAS" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Our Hubs" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();

  await page.locator("div.fixed.inset-0 button").first().click();
  await expect(page.getByRole("link", { name: "About TAS" })).not.toBeVisible();

  const roadmapMobile = page.getByTestId("roadmap-mobile");
  await roadmapMobile.scrollIntoViewIfNeeded();
  await expect(roadmapMobile).toContainText("Q1 2026");
  await expect(roadmapMobile).toContainText("Q2 2026");
  await expect(roadmapMobile).toContainText("Q3 2026");
  await expect(roadmapMobile).toContainText("Q4 2026");

  const horizontalOverflow = await roadmapMobile.evaluate((element) => ({
    scrollWidth: element.scrollWidth,
    clientWidth: element.clientWidth,
  }));
  expect(horizontalOverflow.scrollWidth).toBeLessThanOrEqual(horizontalOverflow.clientWidth + 1);
});
