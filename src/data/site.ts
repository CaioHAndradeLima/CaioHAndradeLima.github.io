export const profile = {
	name: 'Caio H. Andrade Lima',
	title: 'AI Engineer',
	tagline:
		'Different approaches and trade-offs across AI engineering practices—each backed by runnable reference labs.',
	bio: `Parallel implementations of the same production problems—retrieval through deployment—so you can see the trade-offs, when each pattern wins, and how to prove quality with golden datasets, regression gates, and CI scorecards—not slides, runnable repos.`,
	linkedin: 'https://www.linkedin.com/in/caiohandradelima/',
	github: 'https://github.com/CaioHAndradeLima',
	email: '', // optional: caio@example.com
};

export type Company = {
	name: string;
	note?: string;
};

/** Employers and clients from career highlights — extend in one place. */
export const companies: Company[] = [
	{ name: 'Itaú Unibanco', note: 'Software Manager — engineering organization of 350+' },
	{ name: 'PayPal (Venmo)', note: 'Production mobile & backend systems' },
	{ name: 'Amazon Shipping', note: 'Large-scale delivery platform engineering' },
	{ name: 'Globo', note: 'Broadcast & digital product engineering' },
	{ name: 'Sephora', note: 'Retail digital & engineering' },
	{ name: 'Airbnb', note: 'Production software engineering' },
	{ name: 'Hospital Albert Einstein', note: 'Healthcare digital systems' },
];

export const highlights = [
	'Led 350+ engineers as Software Manager at Latin America’s largest financial institution',
	'Production systems for PayPal (Venmo), Itaú Unibanco, Amazon Shipping, Globo, and more',
	'10+ years across mobile, backend, and AI engineering',
];

export const skills = [
	{
		category: 'AI & LLM',
		items: ['RAG', 'Hybrid retrieval', 'Reranking', 'Agents', 'LangGraph', 'LangFuse', 'Eval harnesses'],
	},
	{
		category: 'Languages',
		items: ['Python', 'TypeScript', 'Java', 'Kotlin'],
	},
	{
		category: 'Backend & cloud',
		items: ['NestJS', 'Firebase Functions', 'AWS', 'Azure', 'GCP'],
	},
	{
		category: 'Data & pipelines',
		items: ['Airflow', 'Kafka', 'Snowflake', 'dbt', 'Terraform', 'Docker'],
	},
	{
		category: 'Engineering',
		items: ['Clean Architecture', 'SOLID', 'pytest', 'CI/CD', 'GitHub Actions'],
	},
];

/** Filter chips on the Projects section — one project can belong to multiple categories. */
export const projectCategories = [
	{ id: 'ai-engineering', label: 'AI Engineering' },
	{ id: 'data-engineering', label: 'Data Engineering' },
	{ id: 'api', label: 'APIs & Backend' },
] as const;

export type ProjectCategoryId = (typeof projectCategories)[number]['id'];

export type Project = {
	name: string;
	summary: string;
	href: string;
	tags: string[];
	/** IDs from `projectCategories` — drives the Projects section filter bar. */
	categories: ProjectCategoryId[];
	highlight?: boolean;
};

export const projects: Project[] = [
	{
		name: 'AI-System-Architecturing-Engineering',
		summary:
			'Markdown architecture guides for RAG, agents, guard-rails, observability, and deployment—with linked reference implementations.',
		href: 'https://github.com/CaioHAndradeLima/AI-System-Architecturing-Engineering',
		tags: ['RAG', 'Agents', 'Architecture', 'Production'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'contexting-strategies',
		summary:
			'Reference lab for context assembly under token budgets—scoring, multi-hop, history, abstention, with CI measure gates.',
		href: 'https://github.com/CaioHAndradeLima/contexting-strategies',
		tags: ['Python', 'RAG', 'LangGraph', 'Eval', 'pytest'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'output-strategies',
		summary:
			'Post-LLM validation pipeline—schema, citations, tool policy, failure routing, and regression gates.',
		href: 'https://github.com/CaioHAndradeLima/output-strategies',
		tags: ['Python', 'Validation', 'LangGraph', 'CI'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'reranking-strategies',
		summary:
			'Compare cross-encoder, listwise, and heuristic rerank paths with calibration and contexting export bridge.',
		href: 'https://github.com/CaioHAndradeLima/reranking-strategies',
		tags: ['Python', 'Reranking', 'Retrieval', 'Eval'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'observability-strategies',
		summary:
			'Golden eval, tracing metrics, LLM-as-judge patterns, incident investigation, and canary regression gates.',
		href: 'https://github.com/CaioHAndradeLima/observability-strategies',
		tags: ['Python', 'Tracing', 'Eval', 'LangFuse'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'guardrails-strategies',
		summary:
			'Layered guard-rails—tenant isolation, tool scope, retrieval filters, and adversarial test-use-case gates.',
		href: 'https://github.com/CaioHAndradeLima/guardrails-strategies',
		tags: ['Python', 'Safety', 'Multi-tenant', 'CI'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'prompting-strategies',
		summary:
			'Prompt templates, versioned policies, curated few-shot, and injection-hardened assembly with CI regression gates.',
		href: 'https://github.com/CaioHAndradeLima/prompting-strategies',
		tags: ['Python', 'Prompting', 'RAG', 'Eval', 'pytest'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'llm-strategies',
		summary:
			'Single-model, task routing, fallback chains, and cost-capped degradation with synthetic latency and CI llm-eval gates.',
		href: 'https://github.com/CaioHAndradeLima/llm-strategies',
		tags: ['Python', 'LLM', 'Routing', 'Eval', 'pytest'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'agents-strategies',
		summary:
			'Multi-agent orchestration patterns—sequential pipelines, supervisor routing, parallel fan-out, and MCP hybrid tools with authz gates.',
		href: 'https://github.com/CaioHAndradeLima/agents-strategies',
		tags: ['Python', 'Agents', 'MCP', 'Eval'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'retrieval-strategies',
		summary:
			'RAG retrieval lab—chunking strategies, dense/hybrid search, metadata filters, and tenant-partitioned storage simulation.',
		href: 'https://github.com/CaioHAndradeLima/retrieval-strategies',
		tags: ['Python', 'RAG', 'Retrieval', 'Eval'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'deployment-strategies',
		summary:
			'Release engineering for AI—manual promote, CI quality gates, canary golden regression, and live feedback loop simulation.',
		href: 'https://github.com/CaioHAndradeLima/deployment-strategies',
		tags: ['Python', 'CI/CD', 'Canary', 'Eval'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'design-strategies',
		summary:
			'Architecture decision scoring for startup, enterprise multi-tenant, and fintech high-stakes agent deployments.',
		href: 'https://github.com/CaioHAndradeLima/design-strategies',
		tags: ['Python', 'Architecture', 'AWS', 'GCP'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'genai-eval-harness',
		summary:
			'Evaluation harness for RAG pipelines—retrieval layer, prompts, and agent outputs with repeatable golden datasets.',
		href: 'https://github.com/CaioHAndradeLima/genai-eval-harness',
		tags: ['Python', 'RAG', 'OpenAI', 'Pydantic', 'pytest', 'GitHub Actions'],
		categories: ['ai-engineering'],
		highlight: true,
	},
	{
		name: 'AI-data-engineer-tech-roles',
		summary:
			'Automated collection and visualization of AI & data engineering job market trends.',
		href: 'https://github.com/CaioHAndradeLima/AI-data-engineer-tech-roles',
		tags: ['Gemini', 'Airflow', 'AWS Glue', 'Athena', 'Streamlit', 'Terraform'],
		categories: ['ai-engineering', 'data-engineering'],
		highlight: true,
	},
	{
		name: 'crypto-real-time-pipeline',
		summary: 'Low-latency crypto market ingestion with Kafka, streaming connectors, and Snowflake.',
		href: 'https://github.com/CaioHAndradeLima/crypto-real-time-pipeline',
		tags: ['Kafka', 'Airflow', 'WebSocket', 'Snowflake', 'PostgreSQL'],
		categories: ['data-engineering'],
	},
	{
		name: 'new-york-rainy-data-pipeline',
		summary: 'Batch ETL on NYC weather history—Airbyte, dbt, CDC, and cloud infrastructure as code.',
		href: 'https://github.com/CaioHAndradeLima/new-york-rainy-data-pipeline',
		tags: ['Airflow', 'Airbyte', 'dbt', 'Snowflake', 'AWS'],
		categories: ['data-engineering'],
	},
	{
		name: 'nasa-api',
		summary: 'NestJS NASA imagery API with Docker, AWS EC2, and clean architecture.',
		href: 'https://github.com/CaioHAndradeLima/nasa-api',
		tags: ['NestJS', 'TypeScript', 'Docker', 'AWS EC2'],
		categories: ['api'],
	},
];

/** Add YouTube/Vimeo IDs or direct links when you have demo videos ready. */
export type MediaItem = {
	title: string;
	description: string;
	/** YouTube video ID, e.g. dQw4w9WgXcQ from youtube.com/watch?v=... */
	youtubeId?: string;
	/** External link (Loom, Google Drive preview, etc.) */
	href?: string;
	thumbnail?: string;
};

export const media: MediaItem[] = [
	{
		title: 'GenAI eval harness — walkthrough',
		description: 'Add a Loom or YouTube demo of your RAG evaluation flow.',
		href: 'https://github.com/CaioHAndradeLima/genai-eval-harness',
	},
	{
		title: 'Data pipeline architecture',
		description: 'Screen recording of Airflow DAGs, Kafka flow, or agent orchestration.',
	},
	{
		title: 'Talk or interview clip',
		description: 'Paste a youtubeId in src/data/site.ts to embed here.',
	},
];

export const nav = [
	{ id: 'projects', label: 'Projects' },
	{ id: 'companies', label: 'Companies' },
	{ id: 'achievements', label: 'Achievements' },
];
