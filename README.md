# Bento Grid

A fully responsive bento-style social media dashboard built with React and Tailwind CSS. This project is a solution to the Frontend Mentor Bento Grid challenge and focuses on recreating a complex editorial-style layout using modern CSS Grid techniques and reusable React components.

The layout adapts seamlessly across desktop, tablet, and mobile devices while maintaining the visual hierarchy and spacing of the original design. Throughout the project, I emphasized component reusability, clean project organization, and responsive typography to create an interface that closely matches the provided design.

## Table of Contents

- [Overview](#overview)
- [The Challenge](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built With](#built-with)
- [Features](#features)
- [Project Structure](#project-structure)
- [Development Process](#development-process)
- [What I Learned](#what-i-learned)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements)
- [Author](#author)

## Overview

This project recreates a modern bento grid interface featuring multiple content cards arranged in a visually engaging layout. Each section of the interface was developed as an independent React component, making the application easier to maintain and scale.

Rather than relying solely on utility classes, I combined Tailwind CSS with custom CSS Grid layouts and responsive typography to achieve a pixel-accurate implementation across different screen sizes.

## The Challenge

Users should be able to:

- View an optimized layout on desktop, tablet, and mobile devices.
- Experience fluid typography and spacing across different viewport sizes.
- Navigate a clean and visually balanced dashboard that closely matches the provided design.

## Screenshot

![Grid](./screenshots/bento-grid.png)

## Links

- Live Site: https://phenomenal-peony-da291f.netlify.app/
- Repository: https://github.com/mmuneeb1000/bento-grid-responsive

## Built With

- React
- Vite
- Tailwind CSS v4
- CSS Grid
- Responsive Design
- CSS Clamp
- Semantic HTML

## Features

- Fully responsive bento grid layout
- Modular React component architecture
- Responsive typography using `clamp()`
- Complex CSS Grid positioning
- Mobile-first responsive workflow
- Modern spacing and typography
- Custom color theme
- Accessible semantic markup

## Project Structure

```text
src
├── assets
├── components
│   ├── Account.jsx
│   ├── AiContent.jsx
│   ├── Create.jsx
│   ├── Follower.jsx
│   ├── Growth.jsx
│   ├── Posting.jsx
│   ├── Rating.jsx
│   └── Schedule.jsx
├── App.jsx
└── main.jsx
```

## Development Process

I started by dividing the design into reusable React components rather than building the page as one large component. This made the project easier to manage and allowed each section of the layout to be styled independently.

Once the component structure was complete, I implemented the desktop layout using CSS Grid before progressively adapting it for tablet and mobile breakpoints. Considerable time was spent refining the positioning of each card so that the layout remained visually balanced at every screen size.

Typography was then updated using the `clamp()` function, allowing text to scale naturally across different devices without requiring multiple breakpoint-specific font sizes.

Finally, spacing, alignment, and component sizing were refined to closely match the original design while keeping the codebase clean and maintainable.

## What I Learned

This project strengthened my understanding of responsive layout design and modern CSS Grid techniques.

Some of the most valuable lessons included:

- Breaking complex interfaces into reusable React components.
- Structuring projects for maintainability and scalability.
- Creating advanced layouts using CSS Grid.
- Positioning elements with `grid-template-areas`.
- Understanding the limitations of CSS Grid, such as the inability to span fractional rows.
- Implementing fluid typography with `clamp()`.
- Combining Tailwind utilities with custom CSS where appropriate.
- Building layouts that remain consistent across multiple screen sizes.

## Challenges

The most challenging aspect of the project was recreating the exact layout from the design while ensuring it remained fully responsive.

Some specific challenges included:

- Planning the overall grid structure before implementation.
- Learning when to use `grid-template-areas` instead of column and row spans.
- Balancing card heights while preserving the original visual hierarchy.
- Making typography scale smoothly without introducing awkward jumps between breakpoints.
- Maintaining reusable React components without sacrificing layout flexibility.

Working through these problems gave me a much deeper understanding of CSS Grid and responsive interface design.

## Future Improvements

Although the project fulfills the challenge requirements, there are several areas I would like to improve:

- Refactor repeated styling into reusable utilities.
- Add subtle animations and hover interactions.
- Improve accessibility through enhanced keyboard navigation.
- Optimize images for improved performance.
- Continue refining spacing and typography for even closer design accuracy.
- Explore container queries for more adaptive layouts.

## Author

**Muneeb**

- GitHub: https://github.com/mmuneeb1000
- Portfolio: https://portfolio-developer-muneeb.netlify.app/
- Linkedin: https://www.linkedin.com/in/m-muneeb-a9984633b/
