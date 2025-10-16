# Exercise 5

Create a Profile Page using only React components (no routing, API, or external CSS frameworks).

Requirements:

1. Build individual functional components.
2. Header – shows the page title.
3. ProfileCard – displays user name, role, and profile image.
4. AboutSection – displays a short bio paragraph.
5. SkillsList – renders a list of skills passed as props.
6. Footer – shows a simple copyright message.
7. Compose all components together in App.jsx.
8. Pass data through props, and display it dynamically.
9. Use React state if needed for interactivity (e.g., toggle dark/light mode).
10. Keep everything on a single page and focus on component creation, composition, and props.



## Components

- `Header` — page title and theme toggle. The dark/light toggle was moved into the header and updates app state.
- `ProfileCard` — displays avatar, name, and role.
- `AboutSection` — short bio paragraph.
- `SkillsList` — renders a list of skill chips passed as props.
- `Footer` — simple copyright notice.

All components live under `src/components` and are composed in `src/App.jsx`.


