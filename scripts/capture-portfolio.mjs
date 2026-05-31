import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "src", "assets", "images", "portfolio");

const targets = [
  { id: "tata-carotte", url: "https://tata-carotte.fr/" },
  { id: "sainte-barbe", url: "https://sainte-barbe.netlify.app/" },
  { id: "atelier-lisa", url: "https://atelier-lisa.fr/" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const { id, url } of targets) {
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
    await page.waitForTimeout(1500);
    const filePath = path.join(outDir, `${id}.webp`);
    await page.screenshot({ path: filePath, type: "webp", quality: 82, fullPage: false });
    console.log(`OK ${id} -> ${filePath}`);
  } catch (err) {
    console.error(`FAIL ${id}:`, err instanceof Error ? err.message : err);
    process.exitCode = 1;
  }
}

await browser.close();
