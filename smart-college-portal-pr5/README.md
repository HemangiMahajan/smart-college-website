# Smart College Website Portal — PR5

A simple, responsive single-page application (SPA) for the Web Technology I Lab practical.

## Technologies
- HTML5
- CSS3 (Grid, Flexbox, responsive media queries)
- JavaScript (DOM, events, hash routing, fetch, async/await)
- JSON data files
- localStorage for saved enquiries

## Folder structure
```text
smart-college-portal-pr5/
├── index.html
├── css/
│   └── style.css
├── data/
│   ├── departments.json
│   ├── faculty.json
│   └── notices.json
├── images/
│   └── logo.svg
└── js/
    ├── app.js
    ├── components.js
    ├── data.js
    ├── enquiry.js
    ├── router.js
    └── views/
        ├── home.js
        ├── departments.js
        ├── faculty.js
        ├── admissions.js
        ├── contact.js
        └── notfound.js
```

## Run with VS Code
1. Open this folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **Open with Live Server**.

## Run with Python
Open a terminal in this folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000/`.

Do not open `index.html` by double-clicking it: JSON `fetch()` requests need a local web server.

## SPA routes
- `#/` — Home
- `#/departments` — Departments
- `#/departments/comp` — Departments route with a department ID
- `#/faculty` — Faculty
- `#/admissions` — Admissions
- `#/contact` — Contact and enquiry form

The browser Back and Forward buttons work because navigation uses the URL hash.

## Demonstration modes
- `http://localhost:8000/?demo=slow#/faculty` — simulates a 2-second data delay.
- `http://localhost:8000/?demo=error#/faculty` — demonstrates a JSON loading error and Try again button.

Enquiry records are stored only in the current browser using localStorage. This is a front-end academic demonstration, not a live college admissions system.
