---
title: "Research Scientist / Engineer"
company: "U.S. Naval Research Laboratory"
dates: "Jul 2012 – Jan 2017"
pitch: "Worked on Stackelberg Security Games (SSGs) for infrastructure protection, gaining early, hands-on experience with stochastic optimization, adversarial reasoning, large-scale distributed computation, and reproducibility failures at supercomputing scale."
tags: ["game-theory", "stackelberg-games", "stochastic-systems", "distributed-computing", "reproducibility", "HPC", "determinism", "adversarial-modeling", "resource-allocation", "computational-complexity"]
order: 4
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

### AI Context (expandable)

Situation: Limited-resource infrastructure protection using Stackelberg Security Games (SSGs) where defenders have insufficient assets to cover all targets, adversaries are strategic and observant, and predictable patrols fail catastrophically. 

Constraints: Computationally brutal bilevel optimization with worst-case exponential complexity; hours-to-days experiment runtimes; supercomputing nondeterminism where code that's provably deterministic locally becomes nondeterministic at scale. 

Action: Designed and implemented randomized mixed-strategy equilibria (Strong Stackelberg Equilibrium); established rigorous determinism control for experimental reproducibility; scaled to distributed/supercomputing environments handling HPC nondeterminism as a first-class challenge. 

Result: Early exposure to adversarial reasoning, stochastic systems, and distributed nondeterminism; gained deep understanding of why reproducibility fails; developed comfort operating where randomness is intentional, computation is expensive, and results must still be trusted. 

Lesson learned: Determinism is not a property of code—it is a property of the execution context. This insight directly maps to modern AI challenges: distributed ML training drift, model evaluation instability, and LLM benchmarking reproducibility.

---

### 1. Randomized Strategy Optimization (Game Theory)

* Worked with **mixed-strategy equilibria** where randomness is a **feature**, not a bug.
* Defender strategies intentionally inject uncertainty to:

  * eliminate exploitable gaps,
  * bias protection toward high-value targets,
  * while remaining unpredictable to adversaries.

Key implication:

> The system's correctness *depends* on stochasticity.

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
