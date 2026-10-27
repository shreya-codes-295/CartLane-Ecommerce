# How to run Cartlane (Windows + VS Code)

Cartlane is a **frontend-only demo**. No database, Docker, `.env` file or account setup is needed.

1. Install **Node.js 22 LTS** (20.19 or newer also works) from https://nodejs.org. Check with `node -v` in a new terminal.
2. **Extract the ZIP** (right-click → Extract All).
3. Open **VS Code** → File → Open Folder → choose the extracted `cartlane` folder.
4. Open the terminal in VS Code (Ctrl+`) and run:

```bash
npm install
npm run dev
```

5. Open http://localhost:3000.

## Demo logins (no password)

- `user@cartlane.test` – Alex Morgan, has delivered orders (can leave reviews)
- `admin@cartlane.test` – admin area at `/admin`

Use the sign-in page's demo buttons / email field. This is a demo sign-in, **not secure authentication**.

## Demo coupons

`WELCOME10`, `SAVE5` (min $30), `BIGSPENDER` (min $100).

## Notes

- All data lives in your browser's localStorage (key `cartlane.demo.v1`). Account → Settings → **Reset demo data** restores the starting state.
- Checkout is simulated ("Pay on delivery" placeholder). No payment is taken.
- Other commands: `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.
- If port 3000 is busy: `npm run dev -- -p 3001`.
- Tested on Linux only (headless Chromium). Not tested on Windows.

## Troubleshooting (Windows)

**`Cannot find module ... src/config/image-hosts ... next.config.compiled.js`**
Fixed in this version: the image-host list is now `src/config/image-hosts.mjs` and `next.config.ts` imports it with the
explicit extension, which Node's loader requires. If you still see it, make sure you extracted the *latest* ZIP over a
fresh folder, then delete `node_modules` and `.next` and run `npm install` again.

**`An Application Control policy has blocked this file: @next/swc-win32-x64-msvc/next-swc.win32-x64-msvc.node`**
This is Windows (App Control / WDAC / Smart App Control / AppLocker, or antivirus) refusing to load Next.js's official
native compiler binary. It is not a bug in this project, and the package versions are consistent
(`next` 16.4.3 with `@next/swc-win32-x64-msvc` 16.4.3 in `package-lock.json`). Do not turn security off. Legitimate fixes:

1. Make sure the project is in a normal user folder (for example `C:\Users\<you>\Projects\cartlane`), not a temp, Downloads, or
   network/OneDrive-synced path, and that you run `npm install` there so the file is not "marked from the internet".
2. Run `npm ls next @next/swc-win32-x64-msvc` and `npm install` again to rule out a corrupted download
   (delete `node_modules` first).
3. Open Windows Security → Protection history (and, for managed PCs, Event Viewer → Applications and Services Logs →
   Microsoft → Windows → CodeIntegrity → Operational) to see which policy blocked the file.
4. On a work or school PC, send that log entry to your IT administrator and ask them to allow the signed Node.js and
   `next-swc.win32-x64-msvc.node` files in the App Control policy.
5. If you can't change the policy, run the project on a computer or environment where you are allowed to run Node.js
   native modules (such as another PC or a cloud dev environment).
