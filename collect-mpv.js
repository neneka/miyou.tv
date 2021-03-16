const path = require("path");
const fs = require("fs");
const tar = require("tar");
const { execSync } = require("child_process");

const arg = process.argv[2];
const prebuildsDir =
  arg || path.join(path.dirname(require.resolve("mpv.js")), "prebuilds");
const prebuilds = fs.readdirSync(prebuildsDir);

for (const filename of prebuilds) {
  if (filename.startsWith(".")) continue;
  const basename = path.basename(filename, ".tar.gz");
  const [platform, arch] = basename.split("-").slice(-2);
  const os = platform.replace("win32", "win");
  const file = path.join(prebuildsDir, filename);
  const cwd = `mpv/${os}-${arch}`;
  try {
    fs.mkdirSync(cwd, { recursive: true });
  } catch (e) {
    if (e.code !== "EEXIST") {
      throw e;
    }
  }
  tar.x({ cwd, file, strip: 2, sync: true });
}

if (fs.existsSync("mpv/libmpv/x64/mpv-1.dll") && fs.existsSync("mpv/win-x64")) {
  fs.copyFileSync("mpv/libmpv/x64/mpv-1.dll", "mpv/win-x64/mpv-1.dll");
}

if (
  fs.existsSync("mpv/libmpv/ia32/mpv-1.dll") &&
  fs.existsSync("mpv/win-ia32/")
) {
  fs.copyFileSync("mpv/libmpv/ia32/mpv-1.dll", "mpv/win-ia32/mpv-1.dll");
}

if (process.platform === "win32") {
  const src = path.join(__dirname, `mpv/libmpv/${process.arch}/mpv-1.dll`);
  const dest = path.join(
    __dirname,
    "node_modules/mpv.js/build/Release/mpv-1.dll"
  );
  fs.copyFileSync(src, dest);
}

if (process.platform === "darwin") {
  execSync("./collect-dylib-deps.sh");
}
