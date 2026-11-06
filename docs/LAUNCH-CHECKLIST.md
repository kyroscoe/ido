# Client review and final launch

## Content approval

The client confirmed the content and design on November 5, 2026. Public review notes, banners, and confirmation disclaimers have been removed.

## Inquiry delivery (currently disconnected)

- [ ] Confirm receiving email and expected response time.
- [ ] Approve a test destination and select the form service.
- [ ] Implement delivery, spam protection, reply routing, and success/failure messages.
- [ ] Approve privacy wording and data retention before collecting inquiries.
- [ ] Verify delivery to the approved destination and test failure handling.
- [ ] Remove demo messaging and the preview handler only when the live integration works.

## Review the Netlify deployment

- [ ] Inspect all pages at 320, 390, 768, 1024, and 1440px for overflow, clipping, photo crops, and button readability.
- [ ] Use keyboard only: skip link, navigation, inquiry anchors, fields, validation, submit, and status focus.
- [ ] Test the native date picker, email validation, dropdown, and touch controls on a phone.
- [ ] Check 200% zoom and reduced motion.
- [ ] Check contact links and a nonexistent nested URL for the custom 404.
- [ ] Run `npm run check` and verify deployed pages/assets load.

## Only after client approval

- [ ] Authorize the final domain switch; keep the live site intact until then.
- [x] Remove public review banners, confirmation disclaimers, and review links/pages.
- [ ] Remove review noindex metadata and the `X-Robots-Tag` header in `netlify.toml`; keep unfinished previews excluded from search.
- [ ] Add final-domain canonical URLs, sharing metadata, sitemap, and approved privacy policy.
- [ ] Verify old-URL redirects, HTTPS, form delivery, and mobile layout on the final domain.

This checklist does not authorize launch or test email. This handoff is a client-review build.
