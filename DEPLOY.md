# AqdLens deployment

All six additions are included: Gregorian service dates with contract-calendar confirmation, overtime calculator, live formula explanations, WhatsApp sharing with a preview and financial opt-in, per-tool translation feedback, and an installable offline web app.

## Update GitHub and Vercel

1. Extract this ZIP on your computer.
2. Open your existing `aqdlens` GitHub repository.
3. Choose **Add file → Upload files**.
4. Upload these files directly to the repository root, alongside your README:
   - `index.html` (replace the previous file)
   - `sw.js`
   - `manifest.webmanifest`
   - `icon.svg`
   - `icon-192.png`
   - `icon-512.png`
   - `vercel.json`
5. Commit the changes. Your linked Vercel project deploys them automatically.

If creating a new Vercel project, choose Framework Preset **Other**, repository root, an empty overridden Build Command, and Output Directory `.`. No environment variables or backend are needed.

Do not upload the ZIP itself or place these files inside an extra folder.

## Install and offline check

Visit the deployed HTTPS site online once. Wait for **Offline tools ready**. On supported browsers use the Install button or browser menu. On iPhone use Safari → Share → Add to Home Screen. Browser installation behavior varies.

Close the app, switch to airplane mode, and reopen it. The calculators, language selector, audit, checklist and PDF preparation should work. WhatsApp, official links, and sending feedback still need internet. PDF saving depends on the device/browser.

Later app versions show **Update app (reloads page)** when a new worker is waiting. Applying the update reloads the page and clears unsaved form entries. Inputs are never saved by AqdLens.

## Assumptions

Gregorian date mode counts both entered working dates. It estimates partial years using days between Gregorian anniversaries and clips leap-day anniversaries to February's last day. It does not deduct excluded service periods or convert Hijri dates. Article 10 defaults to Hijri unless the contract or work regulations specify otherwise; date mode requires confirmation that Gregorian applies. Manual years/months remain available.

Overtime estimates cash compensation under Article 107, using monthly wage divided by 30 × entered normal daily hours. Verify the relevant wage and hour basis. The tool does not determine eligible hours or model agreed compensatory paid leave.

Financial figures and service dates stay out of WhatsApp drafts unless explicitly selected. Review the preview before choosing a recipient and sending. HR questions can disclose contract concerns. Feedback buttons prepare a categorized message; they do not send it.

## Validation

JavaScript logic and DOM simulation checks passed for eight-language coverage, calendar confirmation, invalid dates, leap dates, resignation thresholds, overtime and invalid divisors, sharing opt-in, checklist/audit updates, PDF report content, logo and bold disclaimer. A worker harness using real HTTP asset responses passed offline navigation, cache isolation, explicit update handling, and manifest/icon checks.

Full browser rendering, real phone installation and device PDF output could not be tested in the build environment. Review all translations with fluent speakers and legal wording with a qualified Saudi adviser.

© 2026 Joe Manu Thomas · AqdLens. All Rights Reserved.
