# Kawuma Latiif — portfolio

A complete Next.js / TypeScript portfolio adapted from the supplied original navy design. Tailwind CSS, Framer Motion and Lucide icons. Static export; no backend required.

## Run locally

Use Node.js 20.9 or newer (Node 22 LTS recommended).

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js. For checks and deployment:

```bash
npm run typecheck
npm run build
```

The build creates `out/`. On Vercel select Next.js, install with `npm ci`, build with `npm run build`, and let Vercel detect the output. No environment variables are needed. Do not put `node_modules`, `.next`, or `out` in Git.

## Structure

- `app/page.tsx`: section composition.
- `app/layout.tsx`: page metadata, layout and motion preferences.
- `app/globals.css`: original navy palette, utilities, responsive and dark-mode adjustments.
- `components/Layout`: navigation, footer and theme switch.
- `components/Sections`: hero, five projects, skills, experience, awards and contact.
- `public/Kawuma_Latiif_CV.pdf`: supplied CV, unchanged.

## Content decisions and remaining client inputs

Content is based on the supplied Kawuma Latiif CV. It has not been independently verified.

- Name spelling follows the CV: **Kawuma Latiif**.
- The hero has a KL monogram because no client portrait was provided. Replace the panel in Hero.tsx when his approved photograph is available; never use Shanon's photo.
- Project repository/demo links and social profiles are omitted because none were provided in the CV. Add the client's actual links once supplied.
- Contact details are kawumalatiif5@gmail.com and +256 701 010285. The form validates locally and opens a mailto draft. Visitors must send it in their email client. No automatic email delivery, Web3Forms account, database or analytics is configured.
- No numerical skill proficiency scores are invented.
- Soliton's December 2025–Present employment and the 2022–2025 First Class Honors degree follow the CV. The client's status should be reviewed before public launch.
- The CV lists UACE twice with overlapping dates (2018–2021 and 2015–2021). Secondary education is omitted from the website pending correction, while the supplied downloadable PDF remains unchanged.
- Referees' contacts are not rendered on the portfolio page, but ARE included in the original downloadable CV. Replace that PDF with an approved public CV if those details should not be downloadable.
- The electricity-sharing project describes collaborative contributions; the academic sickle-cell model carries no clinical validation claim.
- The site created for review is private. The project files can be moved to the client's own repository and Vercel account.

## Verification

Production build and TypeScript passed. The built export was inspected in a desktop browser, including dark mode and required-field validation. Mobile layouts were inspected in 390px and 320px embedded viewports; the mobile menu expanded successfully. A small horizontal overflow caused by the inherited timeline's entrance animation was identified and changed to vertical motion.

