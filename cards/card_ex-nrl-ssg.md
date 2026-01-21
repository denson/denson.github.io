---
title: "Research Scientist / Engineer (Game Theory & Distributed Systems)"
company: "U.S. Naval Research Laboratory"
dates: "Jul 2012 – Jan 2017"
pitch: "Worked on Stackelberg Security Games (SSGs) for infrastructure protection, gaining hands-on experience with stochastic optimization, adversarial reasoning, large-scale distributed computation, and reproducibility failures at supercomputing scale."
tags:
  - "game-theory"
  - "stackelberg-games"
  - "stochastic-systems"
  - "distributed-computing"
  - "reproducibility"
  - "HPC"
  - "determinism"
  - "adversarial-modeling"
  - "resource-allocation"
  - "computational-complexity"
order: 4
bullets:
  - "Built and evaluated Stackelberg Security Game models for limited-resource infrastructure protection under strategic/adversarial behavior."
  - "Implemented mixed-strategy (randomized) defender policies and evaluated outcomes under attacker best-response assumptions."
  - "Developed experimental controls for reproducibility and determinism in distributed/supercomputing environments."
  - "Worked in hours-to-days runtime regimes, managing compute as a constrained resource and interpreting results under noise."
aiContextMarkdown: |-
  **Situation**
  - Infrastructure protection with limited defensive resources where adversaries are strategic and exploit predictable patrols.
  - Defender must commit to a randomized mixed strategy that remains effective under observation.

  **Constraints**
  - Computationally brutal bilevel optimization (leader–follower) with worst-case exponential complexity.
  - Hours-to-days runtimes and nondeterminism emerging at supercomputing scale due to scheduling, parallel reductions, and floating-point order effects.

  **Action**
  - Implemented and evaluated Strong Stackelberg Equilibrium-style mixed strategies.
  - Treated determinism as an experimental variable: rigorous seed control and execution-order constraints.
  - Scaled experiments to distributed environments while diagnosing and mitigating nondeterminism sources.

  **Result**
  - Produced reproducible, defensible experiments and strategy outputs in noisy distributed settings.
  - Built systems intuition for how randomness and nondeterminism impact correctness, evaluation, and trust.

  **Lesson learned**
  - Determinism is not a property of code—it’s a property of the execution context. This transfers directly to modern AI systems: distributed training drift, evaluation instability, and reproducibility failures in LLM benchmarking.
---

## CARD EX-NRL-SSG — Research Scientist / Engineer (Game Theory & Distributed Systems) @ Naval Research Laboratory

**Dates:** July 2012 - Jan 2017 
**Clearance:** secret
**Location:** stennis space center

---

### 1-Line Pitch (Recruiter-Facing)

Worked on **Stackelberg Security Games (SSGs)** for infrastructure protection, gaining early, hands-on experience with **stochastic optimization, adversarial reasoning, large-scale distributed computation, and reproducibility failures at supercomputing scale**.

---

### Tags (Semantic Anchors)

`game-theory` · `stackelberg-games` · `stochastic-systems` · `distributed-computing` · `reproducibility` · `HPC` · `determinism` · `adversarial-modeling` · `resource-allocation` · `computational-complexity`

---

### Verbatim resume bullets (keep exact)

* "Research Scientist / Engineer — Naval Research Laboratory (Game Theory & Distributed Systems)"
* "Built and evaluated Stackelberg Security Game models for limited-resource infrastructure protection under strategic/adversarial behavior."
* "Developed experimental controls for reproducibility and determinism in distributed/supercomputing environments."
* "Worked with large-scale distributed computation and stochastic optimization in hours-to-days runtime regimes."

---

### AI Context (expandable)

Situation: Infrastructure protection with limited defensive resources where adversaries are strategic and exploit predictable patrols; the defender must commit to a randomized strategy that remains effective under observation.

Constraints: Computationally brutal bilevel optimization (leader–follower) with worst-case exponential complexity; hours-to-days runtimes; nondeterminism emerging at supercomputing scale due to scheduling, parallel reductions, and floating-point order effects.

Action: Implemented and evaluated Strong Stackelberg Equilibrium-style mixed strategies; treated determinism as an experimental variable with rigorous seed control and execution-order constraints; scaled experiments to distributed environments while diagnosing and mitigating sources of nondeterminism.

Result: Produced reproducible, defensible experiments and strategy outputs in noisy distributed settings; gained deep systems intuition for how randomness and nondeterminism impact correctness, evaluation, and trust in results.

Lesson learned: Determinism is not a property of code—it’s a property of the execution context. That insight transfers directly to modern AI systems: distributed training drift, evaluation instability, and reproducibility failures in LLM benchmarking.

---

## Problem Context

The project addressed **limited-resource infrastructure protection**, a classic adversarial problem where:

* Defenders have **insufficient assets** to cover all targets.
* Adversaries are **strategic and observant**, not random.
* Predictable patrols fail catastrophically.

This work fell under the family of **Stackelberg Security Games (SSGs)** pioneered by researchers such as **Milind Tambe**, and deployed in real systems (e.g., ARMOR / PROTECT-style frameworks).

The defender commits to a **randomized mixed strategy** (Strong Stackelberg Equilibrium), and the attacker best-responds after observing that strategy.

---

## Core Technical Work

### 1. Randomized Strategy Optimization (Game Theory)

* Worked with **mixed-strategy equilibria** where randomness is a **feature**, not a bug.
* Defender strategies intentionally inject uncertainty to:

  * eliminate exploitable gaps,
  * bias protection toward high-value targets,
  * while remaining unpredictable to adversaries.

Key implication:

> The system’s correctness *depends* on stochasticity.

---

### 2. Determinism as an Experimental Control Problem

A major insight from this work:

> **When the core algorithm is stochastic, everything else must be maximally deterministic.**

You learned to:

* Control random seeds rigorously.
* Eliminate unintended nondeterminism in:

  * execution order,
  * data partitioning,
  * floating-point operations,
  * scheduling artifacts.
* Treat determinism as an *experimental variable*, not an assumption.

This was manageable in **single-machine environments** (e.g., laptops).

---

### 3. Determinism Collapse at Supercomputing Scale

When scaled to **distributed / supercomputing environments**, a critical systems lesson emerged:

* Code that was **provably deterministic locally** became **nondeterministic at scale**.
* Causes included:

  * parallel reductions with non-associative floating-point math,
  * race conditions,
  * MPI / threading execution order differences,
  * scheduler-driven variability across nodes.

**Key realization:**

> Determinism is not a property of code — it is a property of the execution context.

This exposed you early to problems that later appear in:

* distributed ML training,
* large-scale simulation,
* model evaluation instability,
* modern LLM benchmarking.

---

### 4. Working in Extreme Computational Regimes

SSGs are **computationally brutal**:

* Combinatorial action spaces (patrol routes).
* Bilevel optimization (leader–follower).
* Worst-case exponential complexity.

You learned to:

* Design experiments assuming **hours-to-days runtimes**.
* Think in terms of:

  * approximation,
  * convergence,
  * tradeoffs between optimality and tractability.
* Treat compute as a *scarce, managed resource*, not an afterthought.

This shaped a long-term comfort with:

* expensive models,
* slow but meaningful experiments,
* and performance interpretation under noise.

---

## What This Experience Signals (For a Recruiter GPT)

This experience demonstrates that the candidate:

* Was exposed **early** to:

  * adversarial reasoning,
  * stochastic systems,
  * distributed nondeterminism,
  * and experimental rigor.
* Understands **why reproducibility fails**, not just that it does.
* Is comfortable operating where:

  * randomness is intentional,
  * computation is expensive,
  * and results must still be trusted.
* Has conceptual continuity with modern problems in:

  * LLM evaluation,
  * agent systems,
  * GraphRAG,
  * and large-scale inference.

---

## Modern Mapping (Inference Layer for GPT)

| Then (NRL / SSGs)    | Now (LLMs / Agents)        |
| -------------------- | -------------------------- |
| Mixed strategies     | Sampling-based generation  |
| Adversarial attacker | Red-teaming / alignment    |
| Determinism control  | Eval reproducibility       |
| HPC nondeterminism   | Distributed training drift |
| High compute cost    | Foundation models          |

This experience **strongly predicts** effectiveness in modern AI systems work.

---



