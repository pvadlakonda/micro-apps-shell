# Micro Apps — Git Submodules Platform

## Repositories

| Repo | Route | Purpose |
|------|-------|---------|
| `micro-apps-shell` | `/` | Home launcher + router (host) |
| `micro-apps-app-learning` | `/learning` | Learning micro-app |
| `micro-apps-app-poker-calculator` | `/poker-calculator` | Poker calculator micro-app |
| `micro-apps-app-kids` | `/kids` | Kids micro-app |

---

## How It Works

The shell repo contains the three app repos as **git submodules** under `/packages`.
Vite imports them directly via filesystem paths — no registry, no publishing step.

```
micro-apps-shell/
└── packages/
    ├── app-learning/          ← git submodule
    ├── app-poker-calculator/  ← git submodule
    └── app-kids/              ← git submodule
```

---

## First-Time Setup

### Step 1 — Create GitHub repos

Create these 4 repos on GitHub (private):
- `micro-apps-shell`
- `micro-apps-app-learning`
- `micro-apps-app-poker-calculator`
- `micro-apps-app-kids`

### Step 2 — Push each app repo first

```bash
cd micro-apps-app-learning
git init && git add . && git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/pvadlakonda/micro-apps-app-learning.git
git push -u origin main
```

Repeat for `micro-apps-app-poker-calculator` and `micro-apps-app-kids`.

### Step 3 — Update .gitmodules with your GitHub username

In `micro-apps-shell/.gitmodules`, replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4 — Push the shell repo with submodules

```bash
cd micro-apps-shell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/pvadlakonda/micro-apps-shell.git
git push -u origin main
```

### Step 5 — Register submodules

```bash
# From inside micro-apps-shell
git submodule add https://github.com/pvadlakonda/micro-apps-app-learning.git packages/app-learning
git submodule add https://github.com/pvadlakonda/micro-apps-app-poker-calculator.git packages/app-poker-calculator
git submodule add https://github.com/pvadlakonda/micro-apps-app-kids.git packages/app-kids

git add .
git commit -m "Add submodules"
git push
```

### Step 6 — Install and run

```bash
npm install
npm run dev
```

---

## Daily Workflow

### Cloning the shell fresh (new developer)

```bash
git clone --recurse-submodules https://github.com/pvadlakonda/micro-apps-shell.git
cd micro-apps-shell
npm install
npm run dev
```

### Pulling latest changes from all app teams

```bash
# From micro-apps-shell
npm run submodule:update    # shortcut for: git submodule update --remote --merge
git add .
git commit -m "Update submodules to latest"
git push
```

### App team pushing changes

```bash
# App teams work entirely in their own repo — no shell knowledge needed
cd micro-apps-app-learning
# ... make changes ...
git add . && git commit -m "Add flashcard feature"
git push origin main
# Shell team then runs submodule:update to pick up the changes
```

---

## Adding a New App

1. Create a new repo `micro-apps-app-<name>`
2. Add submodule to shell: `git submodule add <repo-url> packages/app-<name>`
3. Add route in `src/App.jsx`
4. Add card in `src/pages/Home.jsx`
5. Commit and push shell

---

## Tech Stack

- **React 18** + **React Router v6**
- **Vite** (standard app mode — no library build needed)
- **Git Submodules** (no registry required)
- **GitHub Actions** (auto-deploy shell on push to main)
