# BubbleTeaOrdering

An interactive web application for customizing and ordering bubble tea drinks. Built with vanilla HTML, CSS, and JavaScript, it lets users select tea types, add toppings, choose milk preferences, and build an order with real-time cost calculation.

## Features

- **Tea selection** — Choose from Red, Green, or Black tea (radio buttons)
- **Toppings management** — Add/remove toppings: Pearls, Mango Stars, Grass Jelly, Coconut Jelly (checkboxes)
- **Current toppings display** — Shows selected toppings in a live list
- **Milk option** — Dropdown to add milk (Yes/No)
- **Order management** — Add drinks to the order, remove the last drink, or empty the entire order
- **Real-time cost calculation** — Price updates automatically based on selections:
  - Black tea: $2.00 | Green tea: $2.50 | Red tea: $3.00
  - Pearls: +$0.25 | Mango Stars: +$1.00 | Coconut Jelly: +$0.75 | Grass Jelly: +$0.50
  - Milk: +$1.00
- **Order table** — Formatted table showing Tea, Milk, Toppings, and Cost for each drink

## Tech Stack

- **HTML5** — Structure and form elements
- **CSS3** — Styling with bordered table
- **JavaScript (ES6)** — All ordering logic, DOM manipulation, cost calculation

## Project Structure

```
BubbleTeaOrdering/
├── a10.html   # Main HTML page with form controls and order table
├── a10.js     # JavaScript logic: BubbleTea constructor, cost calculation, DOM updates
└── README.md
```

## How to Run

Simply open `a10.html` in any modern web browser:

```bash
# On Linux
xdg-open a10.html

# On macOS
open a10.html

# On Windows
start a10.html
```

No server or build tools required — this is a fully client-side application.

## Usage

1. Select a tea type (Red, Green, or Black)
2. Check desired toppings and click **Add Topping** (use **Remove Topping** to undo)
3. Select milk preference from the dropdown
4. Click **Add Drink** to add the customized drink to your order
5. Use **Remove Drink** to remove the last added drink or **Empty Order** to clear all
6. View your order with calculated costs in the table at the bottom

## Author

**Aaryan Gupta**
