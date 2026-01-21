---
title: "Senior Data Scientist"
company: "AgileAssets Inc."
dates: "Apr 2018 – Feb 2020"
pitch: "Built a SageMaker-based computer vision system that detects highway guardrails in vehicle-captured imagery and routes damaged vs OK cases (plus damage type/severity) for human review—reducing manual road inspections while improving coverage and consistency."
tags: ["Computer Vision", "YOLO", "Anomaly Detection", "Active Learning", "AWS SageMaker", "SageMaker Ground Truth", "Human-in-the-Loop", "Data Egress Economics", "Oracle", "Linear Referencing Systems (LRS)"]
order: 2
---

## CARD EX-04 — Senior Data Scientist @ AgileAssets Inc. (Apr 2018–Feb 2020)

**1-line pitch:** Built a **SageMaker-based computer vision system** that detects highway **guardrails** in vehicle-captured imagery and routes **damaged vs OK** cases (plus damage type/severity) for human review—reducing manual road inspections while improving coverage and consistency.

**Tags:** Computer Vision · YOLO · Anomaly Detection · Active Learning · AWS SageMaker · SageMaker Ground Truth · Human-in-the-Loop · Data Egress Economics · Oracle · Linear Referencing Systems (LRS)

### AI Context (expandable)

Situation: State DOTs needed efficient detection of damaged highway guardrails; manual inspection by driving roads was time-intensive, expensive, and inconsistent. 

Constraints: Severely imbalanced data (damaged cases <1% of training data), long-tail guardrail variants, Oracle-to-AWS data egress costs, and Oracle licensing constraints affecting Linear Referencing System (LRS) precision. 

Action: Built YOLO-based computer vision pipeline on AWS SageMaker with iterative error-driven labeling; designed anomaly detection framing to handle class imbalance; implemented retraining loops that capture every mistake to learn context-specific normal configurations. 

Result: Prototype in ~2 weeks, production-ready in ~1 month. Achieved extremely high recall on true damaged guardrails; false positives were minor damage, making review workload acceptable. System enables broader, more consistent coverage than manual spot-checks. 

Lesson learned: The biggest lever wasn't "label everything"—it was use the model to find what it doesn't understand, ask humans for targeted help, then retrain. This same loop translates directly to LLM systems: route uncertain outputs to humans, harvest corrections, and continuously improve.

---

### What I built (system overview)

**Input:** Images captured from cameras mounted on government vehicles (not only highway department vehicles; also other fleets like school buses), across diverse cameras and conditions.

**Output:** A reviewable workflow that:

* Detects guardrails.
* Determines if the guardrail is **OK vs anomalous/damaged**.
* If anomalous: labels **type of damage and severity** and saves it for human review/triage.

---

### Pipeline (roughly)

1. **Detect guardrails** in the image (draw bounding box).
2. If **no guardrail detected** → *next image*.
3. If **guardrail detected** → **classify guardrail type**.
4. For that type, run **OK vs Anomaly** decision.

   * If **OK** → *next image*.
5. If **Anomaly** → classify **damage category/severity**:

   * **Missing**
   * **Damage level 3**
   * **Damage level 2**
   * **Damage level 1**
     → **save for human review**

**Model framing note:** "Damaged" was treated effectively as an **anomaly detection** problem: show the model examples of *good and broken* across many types, with damaged cases being **<1%** of training data.

---

### Data + labeling workflow

* **Labeling tool:** **SageMaker Ground Truth**
* **Label volume:** ~**1,000 images**
* **Training loop:** iterative / error-driven:

  * Hand-check outputs
  * Every time the model made a mistake, **label that example**
  * **Retrain** and redeploy the improved pipeline
    This let us move quickly and focus labeling effort on the highest-value corrections.

---

### What was hard (and what actually mattered)

* **Not camera variety** (that wasn't the main bottleneck).
* The sticking point was **strange/rare guardrail configurations** and long-tail variants:

  * Dozens of guardrail types exist.
  * Rare types and unusual installations are hard to label exhaustively upfront.

**Practical solution:** repeated retraining + "capture every mistake" meant the system could learn that certain unusual configurations were *actually normal* in specific contexts (e.g., a known weird configuration at a particular mile marker).

**Operational performance:** Achieved extremely high recall on true damaged/broken guardrails; most "false positives" were minor damage not requiring repair, making review workload acceptable.

**Long tail reality:** Long tail was finite (limited unusual guardrail types across the state network) and was handled effectively via error-driven labeling + retraining.

---

### Engineering constraints (Oracle → AWS + precision)

* Source data lived on **Oracle** systems, but we needed to run the ML pipeline on **AWS (SageMaker)**.
* **Egressing data back** to Oracle got **expensive quickly**, so architecture choices had to account for real cost.
* We also hit **Oracle licensing constraints**:

  * Exporting data at **full precision** required paying extra.
  * Full precision matters for **Linear Referencing System (LRS)** data; without it, workflows could still function but with more tedious downstream steps (and in some other projects, precision limitations were a blocker until Oracle licensing was addressed).

---

### Timeline / delivery

* **~2 weeks** to produce a working prototype.
* **~1 additional month** to harden into something marketable.

---

### Model family (historical + today's mapping)

* At the time: built around **YOLO**, combined with other CV models/techniques as needed.
* Today: the exact legacy architecture matters less than the pattern; you could do this more robustly with a modern pipeline using current-gen models (e.g., newer YOLO variants + strong VLMs for classification/verification).

---

### Key takeaway (transferable to today's AI + LLM work)

Automation can **improve the job**, not just reduce cost:

* The system enables **broader, more consistent coverage** than manual spot-checks.
* The biggest lever wasn't "label everything," it was:

  * **Use the model to find what it doesn't understand** (low-confidence / unknown / long-tail cases),
  * then ask humans for targeted help,
  * then retrain.

That same loop translates directly to LLM systems: route "uncertain/unknown" outputs to humans, harvest those corrections, and continuously improve the system.
