import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";

const htmlPath = path.resolve(process.cwd(), "..", "glenburn-website-mockup.html");
const outDir = path.resolve(process.cwd(), "public", "images");

const html = readFileSync(htmlPath, "utf8");

const re = /data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)/g;
const seen = new Map();
let index = 0;
let match;

while ((match = re.exec(html)) !== null) {
  const ext = match[1] === "jpeg" ? "jpg" : match[1];
  const buf = Buffer.from(match[2], "base64");
  const hash = createHash("sha1").update(buf).digest("hex").slice(0, 10);
  if (!seen.has(hash)) {
    const name = `img-${String(index).padStart(2, "0")}-${hash}.${ext}`;
    writeFileSync(path.join(outDir, name), buf);
    seen.set(hash, { name, bytes: buf.length });
    index += 1;
  }
  console.log(`occurrence @${match.index} -> ${seen.get(hash).name}`);
}

console.log("---");
for (const [hash, info] of seen) {
  console.log(`${info.name}  ${(info.bytes / 1024).toFixed(1)} KB`);
}
