# DECISIONS.md - Architectural & Behavioral Choices
**Hackathon Team ID:** `AZIS-JFNYD7`

This document details the architectural choices, user experience strategies, and technical rationales behind Decision Points 1, 2, and 3 in the **EcoPulse Enterprise Carbon Footprint Tracker**.

---

## Decision Point 1 (DP1): Target Overflow Nudge Strategy

* **Chosen Strategy**: Multi-tier Dynamic Nudge System (*Constructive*, *Firm Warning*, and *Eco-Gamified Boss Fight*).
* **Rationale**: 
  Behavioral psychology demonstrates that different user segments respond uniquely to negative feedback. A single warning message often leads to user fatigue or disengagement. By offering three configurable strategies—constructive guidance for standard users, firm warnings for corporate compliance, and gamified boss battles for younger/gamified demographics—the application maximizes retention while encouraging actionable carbon reduction.

---

## Decision Point 2 (DP2): Absurd Input Safety Net

* **Chosen Threshold**: Quantities $\ge 10,000$ units.
* **Rationale**:
  Extremely large inputs (such as entering 50,000 km instead of 50 km) distort visual analytics, ruin KPI accuracy, and trigger false target breaches. Instead of silently blocking or capping the input, DP2 opens an informative modal that translates abstract numbers into intuitive real-world comparisons (e.g., "equivalent to driving around Earth 1.2 times"). This educates the user on emission scale while preventing accidental data corruption.

---

## Decision Point 3 (DP3): Weekly Budget Definition

* **Chosen Implementation**: Dual-Mode Toggle (**Rolling 7-Day** vs. **Calendar Week Mon–Sun**).
* **Rationale**:
  Calendar-week tracking (Monday to Sunday) is preferred for corporate reporting and structured goal-setting, whereas a Rolling 7-Day window provides continuous feedback without artificial "resets" every Monday morning. Offering an instant UI toggle allows users to analyze short-term habit shifts without altering underlying activity logs.
