#!/usr/bin/env node
/**
 * Asset verification for MH Group LLC.
 * Read-only: never modifies or deletes files.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = process.cwd();
const PUBLIC_DIR = join(ROOT, "public");
const SCAN_DIRS = ["src", "public"];
const SCAN_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".html", ".json", ".svg"]);
const FORBIDDEN = ["lovable-uploads", "/__l5e/", "blob:", "lovable-api.com", "lovableproject.com"];

const errors = [];
let filesScanned = 0;
const referenced = new Set();

function walk(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry.startsWith(".")) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const sourceFiles = SCAN_DIRS.flatMap((d) => walk(join(ROOT, d))).filter((f) =>
  SCAN_EXT.has(extname(f)),
);

for (const file of sourceFiles) {
  const text = readFileSync(file, "utf8");
  filesScanned++;
  const rel = file.slice(ROOT.length + 1);

  for (const bad of FORBIDDEN) {
    if (text.includes(bad)) errors.push(`Forbidden reference "${bad}" in ${rel}`);
  }
  if (/data:image\//.test(text) && !rel.startsWith("public/")) {
    errors.push(`Inline data:image reference in ${rel}`);
  }

  for (const match of text.matchAll(/["'`(](\/(?:images\/[^"'`)\s]+|favicon[^"'`)\s]*))/g)) {
    referenced.add(match[1]);
  }
}

for (const ref of referenced) {
  const target = join(PUBLIC_DIR, ref);
  if (!existsSync(target)) errors.push(`Missing public asset: ${ref}`);
  if (ref.startsWith("/images/projects/") && extname(ref) !== ".webp") {
    errors.push(`Project photograph is not WebP: ${ref}`);
  }
}

if (!existsSync(join(PUBLIC_DIR, "images/og-image.webp"))) {
  errors.push("Missing public/images/og-image.webp");
}

const imageCount = walk(join(PUBLIC_DIR, "images")).length;

if (errors.length) {
  console.error("\nAsset verification FAILED:\n");
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error("");
  process.exit(1);
}

console.log("\nAsset verification passed");
console.log(`  Source files scanned:      ${filesScanned}`);
console.log(`  Local asset references:    ${referenced.size}`);
console.log(`  Files in public/images:    ${imageCount}`);
console.log("  No lovable-uploads / __l5e / blob: references");
console.log("  All project photographs are .webp");
console.log("  public/images/og-image.webp present\n");
