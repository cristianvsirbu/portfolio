<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this Next.js 15 App Router portfolio site. Here's a summary of all changes made:

- **`posthog-js` installed** as a new dependency via npm.
- **`instrumentation-client.ts`** created at the project root — this is the recommended initialization pattern for Next.js 15.3+. It initializes PostHog with exception capture and debug mode in development.
- **`.env.local`** created with `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` — all tokens are stored as environment variables, never hardcoded.
- **`src/components/Contact.tsx`** — added PostHog capture calls for four contact-related actions.
- **`src/components/Navigation.tsx`** — added PostHog capture for nav section clicks (desktop and mobile) and resume downloads (desktop and mobile).
- **`src/components/Project.tsx`** — supplemented existing Vercel Analytics `track()` calls with PostHog `capture()` for project site and repo clicks.
- **`src/components/ThemeSelector.tsx`** — added PostHog capture when a user selects a theme (both desktop dropdown and mobile sheet).

| Event Name | Description | File |
|---|---|---|
| `email_send_clicked` | User clicks the "Send Email" mailto link | `src/components/Contact.tsx` |
| `email_copied` | User clicks the "Copy Email" button | `src/components/Contact.tsx` |
| `github_profile_clicked` | User clicks the GitHub social link | `src/components/Contact.tsx` |
| `linkedin_profile_clicked` | User clicks the LinkedIn social link | `src/components/Contact.tsx` |
| `nav_section_clicked` | User clicks a nav link to scroll to a section (property: `section`) | `src/components/Navigation.tsx` |
| `resume_downloaded` | User clicks the Resume download button | `src/components/Navigation.tsx` |
| `project_site_click` | User clicks "Visit Site" for a project (properties: `project_name`, `site_url`) | `src/components/Project.tsx` |
| `project_repo_click` | User clicks "GitHub Repo" for a project (properties: `project_name`, `repo_url`) | `src/components/Project.tsx` |
| `theme_changed` | User selects a new color theme (properties: `theme_id`, `theme_name`) | `src/components/ThemeSelector.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/138960/dashboard/563125
- **Contact Engagement Trends** (line chart — email, GitHub, LinkedIn clicks over time): https://eu.posthog.com/project/138960/insights/4faf6SGY
- **Resume Downloads Over Time** (line chart — daily resume download count): https://eu.posthog.com/project/138960/insights/PINjwulO
- **Project Engagement Funnel** (funnel — site visit → repo view conversion): https://eu.posthog.com/project/138960/insights/Fjkfjllh
- **Project Clicks by Project Name** (bar chart — which projects get the most clicks): https://eu.posthog.com/project/138960/insights/liuNIT52
- **Theme Changes by Theme** (pie chart — visitor theme preferences): https://eu.posthog.com/project/138960/insights/IqgYpp8B

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
