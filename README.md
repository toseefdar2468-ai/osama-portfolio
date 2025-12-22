# Portfolio (Next.js)

This is a minimal Next.js (app router) portfolio scaffold tailored for an Angular developer with ~4 years experience.

Quick start:

```bash
cd portfolio
npm install
npm run dev
```

Files of interest:
- `app/` — pages and layout
- `components/` — `Header`, `Footer`, `ProjectCard`
- `lib/projects.ts` — sample projects list
Customize the content (name, email, projects) to match your details.

Additional actions added:
- Resume placeholder: `public/resume.txt` — replace with your real `resume.pdf`.
- Contact form: client form at `app/contact/ContactForm.tsx` and API placeholder at `app/api/contact/route.ts`.
- CI workflow: `.github/workflows/ci.yml` builds on push to `main`.

-- Contact and resume: `osamahashrafcwork@gmail.com`, phone `+923054628733`, GitHub `github.com/Osamah3`, LinkedIn `linkedin.com/in/Osamah-ashraf`.
-- Resume file updated: `public/resume.txt` contains full CV for Osamah Ashraf.
- Integrate the contact API with an email provider (SendGrid, Mailgun, or a serverless function) — the endpoint currently logs submissions.
- If you want Tailwind CSS applied site-wide, reply and I'll convert styles and add the Tailwind config.
