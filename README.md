# I Do Coordination & Events

Static website for Christyn Martin, hosted from GitHub on Netlify. No framework, dependencies, API keys, or output generation required.

**Client review revision incorporates Christyn's feedback on layout, colors, buttons, full testimonials, and team voice.** Public review notes and approval disclaimers have been removed. The live Wix site is untouched. The inquiry form submits to Netlify Forms with a honeypot, inline success/failure messages, and native POST support without JavaScript. Search indexing is disabled in HTML and Netlify headers.

## Local preview

Use Node.js 22 or newer. No dependency installation is needed.

```sh
npm run check
npm run dev
```

Open http://127.0.0.1:4173 and stop with Ctrl+C. Netlify runs the same checks during deployment.

## Push to GitHub

The existing remote is https://github.com/kyroscoe/ido.git. Review changes, then:

```sh
git add .gitignore .gitattributes .editorconfig README.md package.json package-lock.json netlify.toml public scripts docs
git commit -m "Prepare I Do website for Netlify client review"
git push origin HEAD
```

The earlier `preview/` folder contains its own Git repository and is ignored. Research captures, archives, contact sheets, and Sites metadata are also ignored. Edit **public/** from now on; Netlify publishes that folder.

## Connect Netlify

1. Create a **new** Netlify project by importing `kyroscoe/ido` from GitHub.
2. Choose the branch you pushed. Leave the base directory at the repository root.
3. `netlify.toml` sets build command `npm run check`, publish directory `public`, and Node version 22. No secrets or environment variables are required.
4. Deploy and share the resulting `https://<project-name>.netlify.app` URL with Christyn. Do not change the live website's DNS or connect its domain for review.
5. Use pull requests for subsequent revisions; Netlify can create Deploy Previews after the repository is connected.

Netlify URLs are publicly reachable by default. `noindex` discourages search indexing; it does not restrict access.

Official docs: [file-based configuration](https://docs.netlify.com/build/configure-builds/file-based-configuration/) and [Deploy Previews](https://docs.netlify.com/deploy/deploy-types/deploy-previews/).

## Editing

- `public/index.html`: Homepage and Netlify inquiry form.
- `public/about.html`, `public/services.html`: Supporting pages.
- `public/styles.css`: Responsive layout and typography.
- `public/app.js`: Netlify Forms submission and status messages.
- `public/assets/`: Local photography and logo.
- `public/404.html`: Custom missing-page response.
- `netlify.toml`: Deployment and review headers.
- `docs/LAUNCH-CHECKLIST.md`: Requirements before domain launch.
- `docs/ASSET-SOURCES.md`: Photo provenance and credit decisions.

Keep source files UTF-8. Page punctuation uses HTML entities to prevent the earlier question-mark conversion. Google Fonts supplies EB Garamond and DM Sans; system fallbacks remain available.

## Final launch requirements

Netlify Forms is enabled by the site owner. Deploy this revision so Netlify detects the static `wedding-inquiry` form. Verify it appears in the Forms dashboard and configure email notifications there if needed. A real submission and notification delivery have not yet been verified. Local development does not process Netlify submissions.

Official setup: https://docs.netlify.com/manage/forms/setup/

The current revision passed page/asset checks and browser layout checks at 320, 768, and 1440px across Home, About, and Services. Desktop and phone screenshots were inspected. The inquiry link, native required-field validation, and name-to-email keyboard focus were checked. Complete the remaining launch checklist, including the full keyboard walkthrough and delivery verification, before final approval.
