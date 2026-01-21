---
title: "Data Scientist"
company: "State Farm"
dates: "Jan 2017 – Feb 2020"
pitch: "Built cost-sensitive ML decision support for auto claims—early total-loss identification + settlement acceleration (co-inventor on a patented approach)."
tags:
  - "Insurance"
  - "Auto Claims"
  - "Cost-sensitive ML"
  - "Decision Support"
  - "Model Governance"
  - "Experimentation / Rollout"
order: 3
bullets:
  - "Framed early total-loss identification as cost-sensitive decisioning (expected value) rather than maximizing AUC; defined FP/FN economics with claims and finance partners."
  - "Built and validated leakage-aware scoring using only data available at the decision point; translated scores into operational actions with thresholds, rules/overrides, and review queues."
  - "Supported controlled rollout measurement, drift signals, and safe fallback behavior; integrated the model into existing claims workflows as decision support."
  - "Co-invented a patented approach for early identification and settlement of total-loss claims, improving cycle time and downstream cost drivers."
aiContextMarkdown: |-
  **Situation**
  - High-volume auto claims where “total loss” decisions can happen late in the lifecycle.
  - Late identification increases downstream costs (rental days, storage/towing) and extends cycle time.

  **Constraints**
  - Enterprise accountability: auditability, reproducibility, and change control.
  - Asymmetric error costs:
    - **False positive:** unnecessary early total-loss escalation/settlement work.
    - **False negative:** missed early total-loss → avoidable cost + slower settlement.
  - Must integrate with existing claims workflows and business rules (decision support, not uncontrolled automation).

  **Action**
  - Modeled the problem as **cost-sensitive decisioning** (expected value) and set operating thresholds based on an FP/FN cost model.
  - Built leakage-aware scoring using only data available at the decision point.
  - Converted scores into operational actions with guardrails (rules/overrides, review queues) and supported controlled rollout measurement.
  - Defined drift/monitoring signals and operational fallback behavior.

  **Result**
  - Co-invented a **patented system** for early identification and settlement of total-loss claims.
  - Delivered measurable improvement via faster decisions and lower downstream cost drivers.

  **Lesson learned**
  - In real decision systems, the model is only one part: you need explicit economics (cost matrix), explainability/guardrails, and a safe rollout + monitoring plan.
---

## CARD EX-05 — Data Scientist @ State Farm (Jan 2017–Feb 2020)

**Owner / framing:** Denson — *AI Engineer* mindset applied to enterprise insurance decisioning (model **+** policy **+** rollout).  
**1-line pitch:** Built cost‑sensitive ML decision support for auto claims—**early total‑loss identification + settlement acceleration** (co‑inventor on a patented approach).  
**Tags:** Insurance · Auto Claims · Cost-sensitive ML · Decision Support · Model Governance · Experimentation / Rollout

---

### Verbatim resume bullets (keep exact)

* "State Farm (Data Scientist)"

---

### AI Context (expandable)

**Situation**
- High-volume auto claims where “total loss” decisions can happen **late** in the lifecycle.
- Late identification can increase downstream costs (e.g., rental days, storage/towing) and extend cycle time.

**Constraints**
- Enterprise accountability: auditability, reproducibility, and change control.
- Asymmetric error costs:
  - **False positive:** unnecessary early total-loss escalation/settlement work.
  - **False negative:** missed early total-loss → avoidable cost + slower settlement.
- Must integrate with existing claims workflows and business rules (decision support, not uncontrolled automation).

**Action**
- Framed the problem as **cost-sensitive decisioning** (expected value) rather than “maximize AUC.”
- Partnered with claims SMEs + finance to define an FP/FN **cost model** and threshold policy.
- Built and validated an ML scoring approach using only data available at the decision point (leakage-aware).
- Converted scores into operational actions with guardrails (rules/overrides, review queues).
- Supported controlled rollout measurement, drift monitoring signals, and operational fallback behavior.

**Result**
- Co‑invented a **patented system** for early identification and settlement of total‑loss claims.
- Delivered measurable operational improvement via faster decisions and lower downstream cost **[add exact metrics]**.

**Lesson learned**
- In real decision systems, the model is only one part: you need explicit economics (cost matrix), explainability/guardrails, and a safe rollout + monitoring plan.

---

### What this project was (headline)

A decision-support system that **scores new auto claims early** and recommends an **“early total-loss review / settlement”** path **when it’s economically justified**—not just when probability is high.

---

### Scope / scale (fill in with your numbers)

The exact numbers are proprietary but state farm is the largest auto insurer.

- Claims volume scored: **[N claims/day or month]**
- Training data window: **[e.g., 12–36 months]**
- Deployment surface: **[batch scoring / near-real-time / where it was embedded]**
- Geography / lines: **[states / coverage types]**
- Decision timing: **[intake / FNOL / post-estimate]**
- Label definition: **[operational definition of total loss]**

---

### Deep dive: Cost-sensitive decisioning (early total-loss)

Use these bullets when interviewers probe.

**1) Cost matrix: where FP/FN costs came from**
- Enumerated cost drivers with claims + finance (rental days, storage/towing, adjuster touches, rework, salvage impacts, leakage risk, CX risk).
- Decided what was constant vs conditional (e.g., varies by vehicle value band, region, severity).
- Documented assumptions + got stakeholder sign-off.

**2) Threshold tuning**
- Treated the model output as an input to an **expected-cost / expected-value** decision.
- Tuned thresholds to minimize expected cost while meeting operational constraints (e.g., cap on FP rate / max queue load).
- Layered guardrails: hard exclusions, overrides, “borderline review” queue.

**3) Proof of impact**
Offline:
- Confusion matrix at the chosen operating point (precision/recall where it matters).
- Calibration checks (reliability curve / Brier score).
- Expected-value simulation across thresholds.

Pilot / field:
- Controlled rollout (by team/queue/region) and measured cycle time + cost metrics with guardrails.

**4) Drift + retraining**
- Tracked drift signals (feature distribution shifts, base-rate changes, decision-volume shifts).
- Retraining triggers included seasonality, policy/definition changes, and drift thresholds.

**5) Operational fallback**
- Defined “safe mode” behavior when scoring is unavailable (rules-only routing or conservative defaults).
- Alerting + logging when fallback activates.

---

### Deep dive: Enterprise experimentation / rollout (positioning)

If asked about A/B tests or controlled rollouts:
Agent adoption of new model:

- **Experiment unit:** Selected front line agents.
- **What changed:** Adoption of new model increased.
- **Primary metrics:** How often the agent decided to take the model's advice vs altnative model.
- **Guardrails:** Human in the loop is the guardrail.
- **Rollout strategy:** staged regions
- **Decision changed by results:** Deploy the model to full production, include in new agent training.

---

### What I personally did (make ownership unambiguous)

- Partnered with claims SMEs + finance to define **FP/FN costs** and an expected-value policy.
- Built the **modeling + calibration** workflow and translated scores into an action thresholding policy.
- Designed evaluation to avoid leakage and reflect real decision points.
- Supported rollout measurement with guardrails, drift signals, and fallback behavior.
- Contributed to invention/patent artifacts (problem framing, design, evaluation).



---

### 60–90 second talk track (practice-ready)

“At State Farm I worked on auto claims decision support. One painful spot was total‑loss claims: if you identify them late, you rack up rental days, storage/towing costs, and handling time, and the customer experience suffers. The challenge wasn’t just building a classifier—it was making the right decision under asymmetric costs.

I partnered with claims leadership and finance to define a cost matrix for false positives versus false negatives, then trained and calibrated a model using only the data available at the decision point. We translated the score into an expected‑value policy with guardrails and business‑rule overrides, and validated it with time‑based backtests and a controlled rollout. The work contributed to a patented approach for early identification and settlement of total‑loss claims—speeding decisions and reducing downstream costs while keeping accountability through monitoring and a safe fallback mode.”

---

### Tech / Tools (fill in your exact stack)

**Core**
- Python
- PySpark + claims data warehouse: 
- Modeling: logistic regression / tree ensembles (GBM/XGBoost) 
- Explainability: SHAP / reason codes 

**Production / ops**
- Batch scoring & orchestration: proprietary
- Model governance artifacts: [model card / validation docs / approvals]
- Monitoring & dashboards: Sophisticated model monitoring and data drift system.

---

### Artifacts to mention (if asked)

- Patent citation: Method and system for early identification and settlement of total loss claims + US12045893B2 + 2023-02-07
- A simple decision table: probability → expected cost → action
- A one-page “model card” summary: intended use, limitations, monitoring plan, escalation path
