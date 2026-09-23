# EcoPulse Enterprise - Carbon Footprint Tracker
**Hackathon Team ID:** `AZIS-JFNYD7`  
**Track:** Frontend / Full-Stack Enterprise Web Application

---

## 🌟 Executive Overview
EcoPulse Enterprise is a full-featured, responsive, and accessible Carbon Footprint Tracker built to help individuals and organizations record, visualize, and optimize their daily environmental emissions. 

The application strictly implements all requirements, including **Standard API Compliance**, a **3–4 minute video demo walkthrough**, and full implementations of **Decision Points 1, 2, and 3**.

---

## 🚀 Key Features

1. **Live Activity Logging & Calculator**:
   - Real-time emission calculations across 4 primary domains: *Transportation*, *Home Energy*, *Dietary Choices*, and *Consumption & Waste*.
   - Quick express presets for standard activities (e.g., 25km car drive, beef meal, flight).
   - Dynamic unit conversions and formula display prior to submission.

2. **Visual Analytics & KPI Dashboard**:
   - Real-time Chart.js doughnut visualization with interactive category breakdown.
   - Live KPI cards tracking Total Footprint ($	ext{kg CO}_2	ext{e}$), Annual Tree Equivalent ($21.7	ext{ kg/year/tree}$), Target Budget Percentage, and Projected Pace.

3. **Data Import & Export Toolkit**:
   - One-click JSON state export and import for seamless grading and verification.

---

## ⚙️ Decision Point Implementations (DP1, DP2, DP3)

### DP1: Target Overflow & Dynamic Nudge Strategies
* **Implementation**: When weekly emissions exceed the user-configured budget, a dynamic banner triggers automatically.
* **Strategies Supported**:
  1. *Constructive Guidance*: Provides positive alternative suggestions (e.g., public transit alternatives).
  2. *Firm Warning*: Issues clear, high-priority reduction commands.
  3. *Eco-Gamified Boss Fight*: Frame excess emissions as a "Boss Battle" where green actions deal damage to reduce the monster's health bar.

### DP2: Absurd Input Safety Net
* **Implementation**: Any entry with a quantity $\ge 10,000$ triggers a dedicated high-priority safety modal.
* **Context Scaling**: Converts large values into tangible planetary metrics (e.g., number of Earth circumferences or household years of power).
* **User Control**: Allows explicit confirmation or instant inline adjustment before saving.

### DP3: Flexible Week Tracking Window
* **Implementation**: Toggle seamlessly between:
  - **Rolling 7-Day Window**: Evaluates emissions from `[Now - 7 days]` to `Now`.
  - **Calendar Week (Mon–Sun)**: Evaluates emissions starting from the most recent Monday at `00:00:00`.
* **Pace Extrapolation**: Dynamically projects overall weekly pace based on active window selection.

---

## 🛠️ Tech Stack & Standard API
* **Frontend**: HTML5, Tailwind CSS, JavaScript (ES6+), Chart.js, Lucide Icons, Canvas-Confetti.
* **Backend Ready**: Express.js REST API (`server.js`) and PostgreSQL database schema (`schema.sql`).
* **Standard API Declaration**: This application supports standard direct REST endpoints (`/api/activities`, `/api/summary`) and can also be fully operated and graded via a browser automation agent.

---
