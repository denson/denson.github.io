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

What You'll Do
Agent Design: Implement LLM-based agents capable of reasoning, planning, tool use, and multi-step execution.

System Architecture: Build and maintain agent frameworks, including both single-agent and multi-agent systems.

Tooling & Integration: Develop robust prompting strategies, tool schemas, and function-calling interfaces; integrate agents with internal APIs, databases, and external services.

Optimization: Implement evaluation, monitoring, and feedback loops to continuously improve performance.

Scale: Optimize systems for latency, accuracy, reliability, and cost across various models and providers.

What We're Looking For
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

* **Production LLM / agent systems:** Architected and deployed a GraphRAG-based agentic system ("Knowledge Crystal") with tool execution, provenance, confidence tracking, and human-in-the-loop review—well beyond simple prompt wrappers.
* **Agent architectures & workflows:** Designed multi-step, iterative agent workflows with separation of orchestration vs. domain knowledge, strict vs. inferred claims, and validation gates—directly aligned with reasoning, planning, and tool use.
* **LLM ecosystem experience:** Hands-on work with OpenAI-class models and other frontier models, including cost/latency tradeoffs, iterative passes, and model selection for reliability.
* **Engineering foundation:** Extensive Python ownership across ML systems, data pipelines, distributed workflows, and production deployments; TypeScript/JS used where appropriate for demos and tooling.
* **RAG, embeddings, vector search:** Deep experience with embeddings, vector databases, similarity search, clustering, and retrieval-augmented generation across multiple domains.
* **Evaluation, monitoring, optimization:** Built explicit evaluation loops, drift monitoring, confidence/uncertainty handling, and retraining or iteration triggers—matching the JD's emphasis on real-world optimization.
* **Unstructured data:** Proven work ingesting and reasoning over large, messy corpora (documents, transcripts, scientific text), including PDFs and technical material.

---

## Overall assessment

This role closely matches Denson's demonstrated strengths: end-to-end ownership of agentic AI systems, strong software engineering discipline, practical LLM reliability work, and experience shipping real products rather than experimental demos. The evidence supports a **Qualified** screening outcome.`,
  },
  bad: {
    jobDescription: `## About the Role

**Job Title:** Software Technical Lead / Architect – SaaS
**Location:** Santa Clara, CA
**Reports To:** Director of Software Engineering

### Role Overview

We are seeking a highly skilled **Software Technical Lead / Architect** to drive the technical design, modernization, and cloud transformation of core legacy enterprise applications. You will play a key architectural role in re-engineering a complex, homegrown system into a secure, scalable, cloud-native SaaS platform on **Microsoft Azure**.

In this high-impact role, you will collaborate closely with engineering managers, product leaders, DevOps, cybersecurity, and business stakeholders across multiple functional domains. You will provide technical direction, design patterns, and hands-on architectural leadership for a large-scale digital transformation initiative.

This role requires deep expertise in modern application architecture, distributed systems, Azure cloud services, microservices, and secure API design—along with the ability to guide teams through legacy-to-cloud migration.

---

## Key Responsibilities

### Architecture & Technical Leadership

* Own end-to-end architecture (data and software) for legacy modernization, cloud migration, and database redesign.
* Define and implement API-first, microservices-based architectures on Azure using App Services, AKS, Azure Functions, and API Management.
* Decompose monolithic .NET applications into domain-driven, modular services; guide teams on modernization patterns (e.g., strangler fig, DDD).
* Establish architectural guardrails, reference architectures, design patterns, and technical standards.
* Design and champion enterprise-wide AI enablement strategies, including governance frameworks, best practices, and shared platforms for responsible ML adoption.

### Hands-On Technical Design & Development

* Produce high-quality architecture artifacts: sequence diagrams, service contracts, API definitions, data models, and deployment patterns.
* Review technical designs, pull requests, and solution approaches for scalability, security, and correctness; identify risks and guide mitigation.
* Lead modernization efforts from IIS-based deployments to NGINX and containerized platforms (Docker, Kubernetes).
* Implement secure, token-based authentication (OAuth 2.0, OIDC, SAML 2.0, Entra ID/AD) and policy-driven API security.

### Legacy Application Modernization

* Partner with subject-matter experts and engineering teams to stabilize and evolve legacy .NET systems during transition phases.
* Define migration paths for application modules, schemas, integrations, and reporting platforms (e.g., SQL Server → PostgreSQL).
* Ensure zero or minimal downtime through incremental cutovers, parallel runs, and rollback strategies.

### Cloud, DevOps, and Operational Excellence

* Collaborate with DevOps to design CI/CD pipelines, infrastructure-as-code (Terraform/Bicep/ARM), blue-green and canary deployments.
* Define performance, scalability, and security requirements; implement observability using modern monitoring and eventing platforms.
* Drive improvements in engineering KPIs: code quality, test automation, deployment frequency, reliability, and architectural compliance.

### Cross-Functional Collaboration

* Partner with product, engineering, cybersecurity, infrastructure, QA, and business stakeholders.
* Translate business requirements into technical designs that balance performance, security, and maintainability.
* Provide technical oversight for third-party integrations and enterprise workflows.

### Technical Mentorship & Governance

* Mentor developers and junior architects on cloud-native design, distributed systems, and secure coding practices.
* Define and enforce coding standards, architectural guidelines, and security best practices across teams.
* Lead technical reviews, deep dives, demos, and knowledge-sharing sessions to promote engineering excellence.

---

## Technical Skills & Experience

* Deep hands-on experience with Azure services: App Services, AKS, Functions, API Management, Key Vault, Azure SQL/PostgreSQL.
* Proven success modernizing legacy .NET systems into cloud-native microservices.
* Strong expertise in RESTful API design, schema evolution, event-driven systems, and distributed architectures.
* Proficiency with NGINX, Docker, Kubernetes, and large-scale service deployments.
* Strong database skills (SQL Server, PostgreSQL), including performance tuning and data modeling.
* Experience modernizing frontends using React, Angular, or Vue.
* Infrastructure-as-code and CI/CD experience (Terraform, Bicep, ARM, GitHub Actions, Azure DevOps).
* Strong understanding of security standards: OAuth 2.0, OIDC, SAML, identity integration, and API policy enforcement.
* Experience with automated testing (unit, integration, API, performance).

---

## Soft Skills & Leadership Attributes

* Excellent communication skills with the ability to explain complex technical concepts to technical and non-technical audiences.
* Collaborative mindset and experience working with globally distributed teams.
* High ownership, structured thinking, and strong problem-solving skills.
* Ability to drive clarity in ambiguity and lead technical decision-making.

---

## Minimum Qualifications

* Bachelor's or Master's degree in Computer Science, Engineering, or related field.
* 10+ years of software engineering experience, including 3+ years in an architectural or technical leadership role.
* Experience with real-time or large-scale distributed systems strongly preferred.
* Experience building KPI dashboards using BI tools a plus.
* Proven ability to engage effectively with both executives and engineering teams.

---

## Success Measures

* Delivery of secure, scalable, well-architected microservices on Azure.
* Successful incremental migration of legacy systems with minimal production disruption.
* Measurable improvements in engineering velocity, reliability, and observability.
* Strong technical alignment across engineering, DevOps, security, and business stakeholders.
* Creation of reusable architectural patterns and reference components that accelerate delivery.

---

## Why This Role

This is an opportunity to lead a large-scale, high-impact platform transformation using modern cloud and architectural practices. You'll have the autonomy to shape technical direction, influence engineering culture, and build foundational systems that support long-term growth and innovation.`,
    outputMarkdown: `**Verdict: Not Qualified — the provided materials do not prove core hard requirements for a .NET/Azure SaaS Technical Lead/Architect role (Azure-first architecture ownership, legacy .NET modernization, and long-term hands-on SWE leadership).**

---

### Blocking requirements (explicit)

* **Deep hands-on Azure architecture (App Services, AKS, Functions, API Management, Azure SQL/PostgreSQL)** — **Not proven**
  The materials describe AWS (SageMaker), Snowflake, GraphRAG platforms, and applied ML systems, but do not document hands-on Azure platform ownership or delivery.

* **Modernization of legacy .NET enterprise systems into cloud-native microservices** — **Not proven**
  No evidence of leading IIS/.NET monolith decomposition, DDD-based service extraction, or .NET-to-Azure migration.

* **10+ years of software engineering with 3+ years in an architectural/technical lead role for SaaS platforms** — **Not proven as specified**
  While there is extensive applied ML/DS experience and system design, the materials do not establish senior SWE/architect tenure in SaaS application platforms (as opposed to analytics/ML systems).

* **Hands-on leadership in .NET, NGINX, Docker/Kubernetes for enterprise app delivery** — **Not proven**
  Containerization and orchestration are discussed in ML/infra contexts, not in .NET SaaS application delivery.

---

### Likely blockers (role-class heuristics)

* **Platform SWE vs. Applied ML orientation** — This role is a platform/application architect centered on .NET and Azure SaaS modernization; the provided materials consistently position Denson as an applied ML / data systems engineer with adjacent infrastructure exposure rather than a primary application platform architect.

---

### Relevant evidence (strengths, but non-blocking)

* Proven **large-scale system design and reliability discipline** (monitoring, drift, human-in-the-loop, governance) across enterprise environments.
* Experience leading **complex, multi-stakeholder technical initiatives** and translating business constraints into engineered systems.
* Strong background in **distributed systems concepts**, uncertainty handling, and production pipelines—transferable at a principles level, but not sufficient to meet the explicit Azure/.NET SaaS requirements.

---

### Better-matching role directions (adjacent)

* **Principal / Staff Applied ML Engineer or AI Architect** (enterprise platforms, governance, reliability).
* **LLM / RAG Architect or AI Platform Engineer** (knowledge systems, validation-first AI).
* **Data/ML Platform Architect** (pipelines, monitoring, decision systems) rather than application SaaS architecture.`,
  },
};
