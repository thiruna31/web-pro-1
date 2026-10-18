# FlavorCanvas Responsive QA Report

## Project
FlavorCanvas - CSC 6370 Project 1

## Desktop Test

**Width Tested:** 1440px

### Checked
- Navigation
- Hero section
- Recipe cards
- Recipe images
- Recipe details
- About page
- Team page
- Footer

### Result
The desktop layout displayed correctly with readable text, consistent spacing, and multiple-column recipe cards.

**Status:** PASS

---

## Tablet Test

**Width Tested:** 768px

### Checked
- Navigation
- Recipe card layout
- Images
- Text spacing
- Recipe details
- Team page
- Footer

### Result
The layout adjusted correctly for tablet size. Cards reduced into fewer columns and content stayed readable without overlapping.

**Status:** PASS

---

## Mobile Test

**Width Tested:** 390px

### Checked
- Navigation
- Single-column layout
- Recipe cards
- Images
- Buttons and links
- Text readability
- Horizontal scrolling
- Footer

### Result
The page content stacked vertically and remained readable on mobile. No major horizontal scrolling problems were found.

**Status:** PASS

---

## Keyboard Accessibility Test

### Checked
- Navigation links
- Recipe links
- Buttons
- Interactive elements

### Result
Keyboard focus remained visible while moving through the page with the Tab key.

**Status:** PASS

---

## Image Test

### Checked
- Recipe images load correctly
- Images remain inside containers
- Images resize correctly
- Images contain alt text

### Result
Images displayed correctly across the tested screen sizes.

**Status:** PASS

---

## Responsive Issue Found

### Problem
Some recipe cards originally displayed the same recipe details content instead of the selected recipe.

### Before
Tomato Soup could open the Creamy Garlic Pasta content.

### Fix
Separate recipe pages were created and the links were updated.

### After
Tomato Soup now opens:

`tomato-soup.html`

Veggie Wrap now opens:

`veggie-wrap.html`

### Result
Recipe navigation became clearer and each recipe can display its own information.

---

## Final QA Summary

| Test | Result |
|---|---|
| Desktop | PASS |
| Tablet | PASS |
| Mobile | PASS |
| Navigation | PASS |
| Images | PASS |
| Keyboard Focus | PASS |
| Recipe Links | PASS |

## Final Result

FlavorCanvas works correctly across the tested desktop, tablet, and mobile layouts.
