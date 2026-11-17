# Smart College Website Portal

A simple, responsive single-page application (SPA) developed as the
CCE-5 mini project for **Web Technology 1 (AD124PE507.1)**, Semester V,
Academic Year 2026--2027, Department of Artificial Intelligence and Data
Science, D. Y. Patil College of Engineering, Akurdi, Pune.

## Project Overview

The Smart College Website Portal brings important college information
together in one website. Visitors can explore the home page,
departments, faculty information, admissions details, notices and an
enquiry form.

This project is developed using HTML, CSS and JavaScript. It
demonstrates SPA navigation, client-side routing, dynamic JSON data
loading and client-side form validation.

## Objectives

-   Present college information in a simple and organized interface.
-   Allow navigation between sections without reloading the page.
-   Load department, faculty and notice information from JSON files.
-   Provide a responsive interface for desktop and mobile screens.
-   Validate enquiry form input on the client side.

## Features

-   **Home:** College introduction and key information.
-   **Departments:** Department information loaded from JSON.
-   **Faculty:** Faculty details displayed from JSON.
-   **Notices:** Notice information displayed on the website.
-   **Admissions:** Admission-related information.
-   **Enquiry form:** Client-side validation and local browser storage
    for submitted enquiry details.
-   **SPA navigation:** JavaScript hash-based routing, including browser
    back and forward navigation.
-   **Responsive UI:** Layout adapts to different screen sizes.
-   **Loading and error handling:** Basic states for data loading and
    failures.

> This is an academic demonstration project. The displayed college
> content and sample records should be verified and replaced with
> official information before real-world use. The enquiry form stores
> data in the user's browser; it does not send enquiries to a college
> server.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript (ES6)
-   JSON
-   Browser Local Storage
-   Git and GitHub

## Project Structure

``` text
smart-college-website/
├── index.html
├── README.md
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
        ├── admissions.js
        ├── contact.js
        ├── departments.js
        ├── faculty.js
        ├── home.js
        └── notfound.js
```

## How to Run the Project

Because the project loads JSON files using `fetch()`, run it through a
local development server. Do not open `index.html` directly by
double-clicking it.

### Option 1: VS Code Live Server

1.  Open the project folder in Visual Studio Code.
2.  Install the **Live Server** extension if it is not already
    installed.
3.  Right-click `index.html`.
4.  Select **Open with Live Server**.
5.  The website will open in your browser.

### Option 2: Python local server

1.  Open a terminal in the project root folder (the folder containing
    `index.html`).

2.  Run:

    ``` bash
    python -m http.server 8000
    ```

3.  Open `http://localhost:8000` in your browser.

4.  Stop the server with `Ctrl + C` in the terminal.

## Testing Checklist

-   [ ] Home page loads.
-   [ ] Navigation changes sections without a full page reload.
-   [ ] Browser Back and Forward buttons work.
-   [ ] Department, faculty and notice data load from JSON.
-   [ ] Enquiry form shows validation messages for invalid input.
-   [ ] A valid enquiry can be submitted.
-   [ ] Layout works at desktop and mobile widths.
-   [ ] Website is opened through a local server.

## GitHub Repository

This project is maintained in GitHub:

**Repository:** https://github.com/HemangiMahajan/smart-college-website

To upload future changes from the project folder:

``` bash
git add .
git commit -m "Update project documentation"
git push
```

## Academic Context

-   **Subject:** Web Technology 1 (AD124PE507.1)
-   **Assessment:** CCE-5 -- Unit V SPA Concepts & Mini Project (GitHub
    Submission)
-   **Academic Year:** 2026--2027
-   **Semester:** V
-   **Class:** T.Y. AI & DS
-   **Institution:** D. Y. Patil College of Engineering, Akurdi, Pune
-   **Department:** Artificial Intelligence and Data Science

The CCE-5 brief specifies a Smart College Website Portal with
departments, courses, faculty, notices and an enquiry form. It also
requires SPA-style navigation without page reload, JavaScript
client-side routing, responsive UI, dynamic JSON loading and client-side
validation.

## Author

**Hemangi Mahajan**\
Third-year B.Tech -- Artificial Intelligence and Data Science\
D. Y. Patil College of Engineering, Akurdi, Pune

------------------------------------------------------------------------
