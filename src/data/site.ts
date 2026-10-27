export const profile = {
	name: 'Caio H. Andrade Lima',
	title: 'AI Engineer',
	tagline:
		'RAG, agentic systems, and production engineering—balancing quality, latency, and cost.',
	bio: `I'm focused on retrieval-augmented generation, agent orchestration, and the practices that ship reliable AI products. Current work spans hybrid retrieval and reranking, evaluation with golden datasets, and verification in multi-step agent workflows.`,
	linkedin: 'https://www.linkedin.com/in/caiohandradelima/',
	github: 'https://github.com/CaioHAndradeLima',
	email: '', // optional: caio@example.com
};

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

export type Project = {
	name: string;
	summary: string;
	href: string;
	tags: string[];
	highlight?: boolean;
};

export const projects: Project[] = [
	{
		name: 'genai-eval-harness',
		summary:
			'Evaluation harness for RAG pipelines—retrieval layer, prompts, and agent outputs with repeatable golden datasets.',
		href: 'https://github.com/CaioHAndradeLima/genai-eval-harness',
		tags: ['Python', 'RAG', 'OpenAI', 'Pydantic', 'pytest', 'GitHub Actions'],
		highlight: true,
	},
	{
		name: 'AI-data-engineer-tech-roles',
		summary:
			'Automated collection and visualization of AI & data engineering job market trends.',
		href: 'https://github.com/CaioHAndradeLima/AI-data-engineer-tech-roles',
		tags: ['Gemini', 'Airflow', 'AWS Glue', 'Athena', 'Streamlit', 'Terraform'],
		highlight: true,
	},
	{
		name: 'crypto-real-time-pipeline',
		summary: 'Low-latency crypto market ingestion with Kafka, streaming connectors, and Snowflake.',
		href: 'https://github.com/CaioHAndradeLima/crypto-real-time-pipeline',
		tags: ['Kafka', 'Airflow', 'WebSocket', 'Snowflake', 'PostgreSQL'],
	},
	{
		name: 'new-york-rainy-data-pipeline',
		summary: 'Batch ETL on NYC weather history—Airbyte, dbt, CDC, and cloud infrastructure as code.',
		href: 'https://github.com/CaioHAndradeLima/new-york-rainy-data-pipeline',
		tags: ['Airflow', 'Airbyte', 'dbt', 'Snowflake', 'AWS'],
	},
	{
		name: 'nasa-api',
		summary: 'NestJS NASA imagery API with Docker, AWS EC2, and clean architecture.',
		href: 'https://github.com/CaioHAndradeLima/nasa-api',
		tags: ['NestJS', 'TypeScript', 'Docker', 'AWS EC2'],
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
	{ id: 'about', label: 'About' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'media', label: 'Demos' },
	{ id: 'contact', label: 'Contact' },
];
