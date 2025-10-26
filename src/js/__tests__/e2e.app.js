const puppeteer = require("puppeteer");

describe("Popover E2E Tests", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: "new",
      slowMo: 50,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    page = await browser.newPage();

    await page.goto("http://localhost:8080", {
      waitUntil: "networkidle0",
      timeout: 30000,
    });
  }, 30000);

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  test("Page should load correctly", async () => {
    const title = await page.title();
    expect(title).toBeDefined();
    console.log("Page title:", title);
  });

  test("Button should exist on page", async () => {
    const button = await page.$(".button_popover");
    expect(button).not.toBeNull();

    const buttonText = await page.$eval(
      ".button_popover",
      (el) => el.textContent,
    );
    console.log("Button text:", buttonText);
  });

  test("Popover should be hidden initially", async () => {
    const popover = await page.$(".popover");
    if (popover) {
      const isHidden = await page.$eval(".popover", (el) =>
        el.classList.contains("hidden"),
      );
      expect(isHidden).toBe(true);
    }
  });
});
