# Client review and final launch

## Christyn's decisions

- [ ] Confirm the existing 7+ years experience claim and rewritten personal copy.
- [ ] Approve the booking process and Kayla and Ben's testimonial excerpt.
- [ ] Define handover timing, meetings, hours, rehearsal support, setup/cleanup limits, and staffing.
- [ ] Confirm detailed deliverables and package boundaries for Initial Consultation, Comprehensive Event Planning, and Day-of Coordination; the service overviews include venue selection, decor design, and vendor coordination from the existing Services page.
- [ ] Approve packages, pricing, booking terms, travel fees, and other event availability.
- [ ] Approve photo reuse, photographer credits, and business social profile links.

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
- [ ] Remove review banners, unapproved claims, and public review links/pages.
- [ ] Remove review noindex metadata and the `X-Robots-Tag` header in `netlify.toml`; keep unfinished previews excluded from search.
- [ ] Add final-domain canonical URLs, sharing metadata, sitemap, and approved privacy policy.
- [ ] Verify old-URL redirects, HTTPS, form delivery, and mobile layout on the final domain.

This checklist does not authorize launch or test email. This handoff is a client-review build.
