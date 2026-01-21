export type FitExample = {
  jobDescription: string;
  outputMarkdown: string;
};

export const fitExamples: Record<'good' | 'bad', FitExample> = {
  good: {
    jobDescription: `AI / LLM Agent Engineer
About the Company
We are a venture-backed technology startup developing agent-driven AI systems designed to automate complex, real-world workflows. We believe the next generation of enterprise software will be powered by autonomous and semi-autonomous AI agents capable of reasoning, planning, and executing tasks.

Our founding team has a proven track record of scaling and exiting successful technology companies. We are currently assembling a small, high-caliber engineering team to build a new class of AI-native products from the ground up.

The Role
We are seeking an AI / LLM Agent Engineer to design, build, and deploy production-grade, LLM-powered agents. This role sits at the intersection of machine learning, software engineering, and product. You will have end-to-end ownership of agent architectures—spanning prompt engineering, tool design, evaluation, and real-world optimization.

This is a hands-on role with significant technical ownership and direct influence over our core technology.

What You’ll Do
Agent Design: Implement LLM-based agents capable of reasoning, planning, tool use, and multi-step execution.

System Architecture: Build and maintain agent frameworks, including both single-agent and multi-agent systems.

Tooling & Integration: Develop robust prompting strategies, tool schemas, and function-calling interfaces; integrate agents with internal APIs, databases, and external services.

Optimization: Implement evaluation, monitoring, and feedback loops to continuously improve performance.

Scale: Optimize systems for latency, accuracy, reliability, and cost across various models and providers.

What We’re Looking For
LLM Expertise: Strong experience building with leading models (e.g., OpenAI, Anthropic, Gemini, or open-source alternatives).

Engineering Foundation: Proficiency in Python (TypeScript is a plus) with production-grade software engineering practices.

Agentic Workflows: Experience with tool-calling, RAG (Retrieval-Augmented Generation), or autonomous systems.

Data Handling: Experience working with complex unstructured data (PDFs, technical diagrams, etc.).

Technical Depth: Solid understanding of prompt engineering, embeddings, and vector databases.

Nice to Have
Prior experience in an early-stage startup environment.

Familiarity with agent frameworks such as LangGraph, AutoGen, or CrewAI.

Background in ML systems, applied NLP, or MLOps.

Experience building evaluation harnesses or LLM observability tooling.

Why This Role?
Frontier Tech: Build deep agentic AI systems, not just surface-level API wrappers.

Ownership: High impact on a core, revenue-driving product within a small technical team.

Equity: Competitive compensation package with meaningful early-stage equity.

Innovation: Help define the standards for how AI agents operate in production environments.`,
    outputMarkdown: `**Verdict: Qualified — the provided materials explicitly demonstrate production-grade LLM/agent system design, Python-based engineering, agentic workflows (tooling, RAG, evaluation), and handling of complex unstructured data.**

---

## Blocking requirements (explicit)

* **None.**
  All explicit requirements in the job description are supported by the provided materials.

---

## Likely blockers (role-class heuristics)

* **None identified.**
  This is an LLM/agent engineering role without implicit clearance, on-site, or regulatory constraints.

---

## Relevant evidence (grounded in provided materials)

* **Production LLM / agent systems:** Architected and deployed a GraphRAG-based agentic system (“Knowledge Crystal”) with tool execution, provenance, confidence tracking, and human-in-the-loop review—well beyond simple prompt wrappers.
* **Agent architectures & workflows:** Designed multi-step, iterative agent workflows with separation of orchestration vs. domain knowledge, strict vs. inferred claims, and validation gates—directly aligned with reasoning, planning, and tool use.
* **LLM ecosystem experience:** Hands-on work with OpenAI-class models and other frontier models, including cost/latency tradeoffs, iterative passes, and model selection for reliability.
* **Engineering foundation:** Extensive Python ownership across ML systems, data pipelines, distributed workflows, and production deployments; TypeScript/JS used where appropriate for demos and tooling.
* **RAG, embeddings, vector search:** Deep experience with embeddings, vector databases, similarity search, clustering, and retrieval-augmented generation across multiple domains.
* **Evaluation, monitoring, optimization:** Built explicit evaluation loops, drift monitoring, confidence/uncertainty handling, and retraining or iteration triggers—matching the JD’s emphasis on real-world optimization.
* **Unstructured data:** Proven work ingesting and reasoning over large, messy corpora (documents, transcripts, scientific text), including PDFs and technical material.

---

## Overall assessment

This role closely matches Denson’s demonstrated strengths: end-to-end ownership of agentic AI systems, strong software engineering discipline, practical LLM reliability work, and experience shipping real products rather than experimental demos. The evidence supports a **Qualified** screening outcome.`,
  },
  bad: {
    jobDescription: `About the Job
About the Company
We are a mission-driven financial technology company dedicated to growing the small business economy. We handle the complexities of business operations—including payroll, health insurance, 401(k)s, and HR—so owners can focus on their craft and customers. With major hubs across North America, we are proud to support more than 400,000 small businesses, building a workplace that represents and celebrates the diverse customers we serve.

About The Role
Our AI/ML Engineering team leverages a rich dataset to guide product direction and decision-making by building scalable solutions. We're looking for a Senior Technical Leader (Individual Contributor) who will design robust AI/ML systems and services through close partnership with seasoned leaders across Engineering, Product, Design, Data Science, Marketing, and Customer Excellence. In this role, you will define strategy while shipping impactful models and services to evolve our AI/ML capabilities and practices.

Open Roles Across Two Embedded Areas
Unified Service Platform: Optimizes the customer experience, creates personalized engagement, and drives automated or AI-enhanced assistance. We develop AI tools and platform components (e.g., embedding algorithms) to improve performance and satisfaction.

Growth: Builds AI/ML-powered experiences that drive relevant, timely product adoption. Our team enables contextual customer interactions through growth-oriented capabilities like propensity modeling and recommendations.

Compensation & Location
Targeted Cash Compensation:

San Francisco, New York, and Seattle: $230k–$280k

Los Angeles: $205k–$255k

Denver: $185k–$234k

Toronto: $200k–$250k CAD

Final offer amounts are determined by multiple factors including candidate experience and expertise.

Work Environment: The company maintains physical office spaces in Denver, San Francisco, and New York City. Employees in these locations are expected to work from the office on designated days (approximately 2–3 days per week). For roles approved for remote work, a secure and reliable internet connection is required.

Diversity & Inclusion
Our customers come from all walks of life and so do we. We hire great people from a wide variety of backgrounds because it makes our company stronger. If you share our values and our enthusiasm for supporting small businesses, you will find a home here.

We are an equal opportunity employer and do not discriminate based on race, color, religion, national origin, age, sex, disability, or any other protected characteristic. We are committed to providing reasonable accommodations for qualified individuals during the application process.`,
    outputMarkdown: `**Verdict: Adjacent — strong applied ML/AI leadership signals, but the JD’s senior IC “technical leader” scope for production AI/ML systems is only partially proven from the provided materials.**

---

## Blocking requirements (explicit)

* **End-to-end ownership of production AI/ML systems at senior IC scope** — **Not proven.**
  The materials demonstrate multiple production-adjacent systems (NLP pipelines, CV workflows, decision systems, GraphRAG architecture), but do not explicitly establish senior-IC-level ownership of *large-scale, continuously operated AI/ML services* comparable to a fintech platform’s core ML stack.

* **Direct alignment with fintech / growth / personalization use cases** — **Not proven.**
  The experience spans insurance, enterprise NLP, CV, scientific ML, and GraphRAG reliability; explicit fintech growth, recommendations, or propensity modeling in a customer-facing product is not stated.

---

## Likely blockers (role-class heuristics)

* **Enterprise Applied ML / AI Platform Leader:**
  The role implies long-lived model services, org-wide ML practices, and tight coupling to product growth metrics. Evidence shows strong system design and reliability thinking, but limited explicit proof of owning ML platforms embedded in revenue-driving fintech products.

---

## Relevant evidence (supported strengths)

* **Applied ML systems shipped:** Production NLP pipelines at an enterprise SaaS company (Genesys), including embeddings, clustering, ETL, governance, and drift monitoring.
* **Decision-focused ML:** Patented cost-sensitive decisioning system for early total-loss settlement, emphasizing asymmetric costs, uncertainty, monitoring, and human-in-the-loop workflows.
* **AI reliability & architecture:** Designed and implemented a GraphRAG (“Knowledge Crystal”) system with provenance, confidence triangulation, human review gates, and guardrails against hallucination.
* **Embeddings-first workflows:** Demonstrated cross-domain embedding use (NLP transcripts, scientific spectra) for clustering, discovery, and similarity search without retraining.
* **Senior technical judgment:** Recurrent theme of uncertainty handling, monitoring, and operational tradeoffs rather than model-only optimization.

---

## Better-matching role directions (if Adjacent)

* **Senior Applied ML Engineer / Staff ML Engineer** focused on NLP, embeddings, decision systems, and reliability.
* **AI Platform / ML Systems Engineer** emphasizing governance, monitoring, human-in-the-loop design, and trust.
* **LLM / RAG Reliability Engineer** owning evaluation, provenance, and production guardrails.
* **Principal Data Scientist (Decision Systems)** in cost-sensitive or risk-aware domains.

---

*This assessment follows a deny-by-default screening posture: strengths are clear and substantial, but explicit proof of senior-IC ownership of fintech growth/personalization ML platforms is not established in the provided materials.*`,
  },
};

