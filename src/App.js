import React from 'react';
import './App.css';

const links = [
  { label: 'Email', href: 'mailto:gnpu@g.ucla.edu' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=z09bBoMAAAAJ&hl=en' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/georgenpu/' },
  { label: 'GitHub', href: 'https://github.com/georgepu1' },
];

const research = [
  {
    title: 'LHAW: Controllable Underspecification for Long-Horizon Tasks',
    meta: 'Preprint, 2026',
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2602.10525' },
      { label: 'code', href: 'https://github.com/scaleapi/lhaw' },
      { label: 'blog', href: 'https://labs.scale.com/blog/LHAW' },
      { label: 'tweet', href: 'https://x.com/samueldenton/status/2023878235214536912' },
    ],
    summary:
      'A dataset-agnostic pipeline for generating underspecified variants of long-horizon agent tasks and empirically validating the resulting ambiguity through agent execution.',
    takeaways: [
      'Applied to MCP-Atlas, TheAgentCompany, and SWE-Bench Pro, releasing 285 benchmark-ready tasks.',
      'Evaluates whether agents can strategically seek clarification when critical information is missing, and analyzes the value, cost, and failure modes of clarification across frontier models.',
    ],
  },
  {
    title: 'Assessing Robustness to Spurious Correlations in Post-Training Language Models',
    meta: 'ICLR Spurious Correlation and Shortcut Learning Workshop, Oral, 2025',
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2505.05704' },
      { label: 'workshop', href: 'https://iclr.cc/virtual/2025/35109' },
    ],
    summary:
      'A systematic evaluation of SFT, DPO, and KTO under synthetic spurious-correlation conditions across math reasoning, constrained instruction-following, and document-grounded QA.',
    takeaways: [
      'Models often degrade as spuriousness increases, but robustness depends on both task type and artifact type.',
      'Preference-based methods can be more robust for math reasoning, while SFT can remain stronger for context-intensive tasks.',
    ],
  },
  {
    title: 'Balancing Cost and Effectiveness of Synthetic Data Generation Strategies for LLMs',
    meta: 'NeurIPS FITML Workshop, 2024',
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2409.19759' },
      { label: 'blog', href: 'https://scale.com/blog/synthetic-data-fine-tuning-llms' },
    ],
    summary:
      'A framework for choosing synthetic data generation strategies for fine-tuning under different seed-data and query-budget constraints.',
    takeaways: [
      'When budgets are tight, better answers to existing prompts can matter more than more prompts.',
      'As query budgets grow, new prompt generation often becomes the stronger lever.',
    ],
  },
  {
    title: '"Kelly is a Warm Person, Joseph is a Role Model"',
    meta: 'EMNLP Findings, 2023',
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2310.09219' },
      { label: 'code', href: 'https://github.com/uclanlp/biases-llm-reference-letters' },
      { label: 'tweet', href: 'https://x.com/yixin_wan_/status/1721261056478306792' },
    ],
    summary:
      'Investigating biases in LLM-generated professional documents and downstream socioeconomic impacts.',
    takeaways: [
      'LLM-generated professional writing can encode subtle but consequential fairness harms.',
      'Bias evaluation should reflect realistic downstream use cases, not only generic benchmark prompts.',
    ],
  },
  {
    title: 'Empirical Analysis of the Strengths and Weaknesses of PEFT Techniques for LLMs',
    meta: 'ICLR ME-FoMo Workshop, 2023',
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2304.14999' },
      { label: 'tweet', href: 'https://x.com/_akhaliq/status/1652870295928053760' },
    ],
    summary:
      'A benchmark comparing parameter-efficient fine-tuning methods across task types and data scales, with a focus on convergence and trainable-parameter tradeoffs.',
    takeaways: [
      'The best PEFT method depends heavily on task type and data availability.',
      'PEFT can converge slower than full fine-tuning in low-data settings, even when it is more parameter-efficient.',
    ],
  },
  {
    title: 'Interactive Information Capture and Retrieval with Prompts',
    meta: 'US Patent, 2021',
    links: [
      { label: 'patent', href: 'https://patents.justia.com/patent/20210042662' },
    ],
    summary:
      'Patent work on collecting, organizing, and retrieving information through prompt-driven interfaces.',
    takeaways: [
      'Explores prompt-based interfaces for capturing information at the moment it is generated.',
      'Connects early information retrieval ideas with later work on agents and tool-assisted workflows.',
    ],
  },
];

const blogs = [
  {
    title: 'Scaling Enterprise Agent Performance with Reinforcement Learning via Verifiable Feedback Loops',
    outlet: 'Scale Labs',
    date: 'Nov 17, 2025',
    href: 'https://labs.scale.com/blog/scaling-enterprise-agent-performance-with-reinforcement-learning-via-verifiable-feedback-loops',
  },
  {
    title: 'Efficient and Effective Fine-Tuning Using Mixture-of-Experts PEFT',
    outlet: 'Scale AI, archived',
    date: 'Dec 12, 2023',
    href: 'https://web.archive.org/web/20250616204906/https://scale.com/blog/fine-tuning-mixture-of-experts-peft',
  },
  {
    title: 'Integrating Slack with Amundsen for Ease of Data Discovery',
    outlet: 'Convoy Tech',
    date: 'Sep 1, 2021',
    href: 'https://medium.com/convoy-tech/integrating-slack-with-amundsen-for-ease-of-data-discovery-ef3b54834da5',
  },
];

function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <main className="site">
      <header className="intro">
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#blogs">Blogs</a>
        </nav>

        <div className="intro-grid">
          <div className="intro-copy">
            <h1>George Pu</h1>
            <p className="lede">
              I am currently a research engineer at Scale AI building specialized agents for
              enterprises through post-training and human/synthetic data pipelines. Previously, I
              completed my MSCS at UCLA, where I researched AI safety and representation learning with the{' '}
              <ExternalLink href="http://web.cs.ucla.edu/~kwchang/publications_area/">
                UCLA-NLP
              </ExternalLink>{' '}
              lab under{' '}
              <ExternalLink href="http://web.cs.ucla.edu/~kwchang/">
                Prof. Kai-Wei Chang
              </ExternalLink>
              , and worked with the{' '}
              <ExternalLink href="https://shangjingbo1226.github.io/lab/">SDLab</ExternalLink>{' '}
              under{' '}
              <ExternalLink href="https://shangjingbo1226.github.io/">
                Prof. Jingbo Shang
              </ExternalLink>{' '}
              during undergrad at UCSD. My research interests are in building reliable agents for
              economically useful long-horizon tasks, including RL environment creation and
              LLM post-training dynamics. Outside work, I enjoy hiking around national parks, going to
              the gym, and playing tennis.
            </p>

            <p className="fun-fact">
              Fun fact: my first initial and last name spell{' '}
              <ExternalLink href="https://en.wikipedia.org/wiki/Graphics_processing_unit">
                GPU
              </ExternalLink>
              .
            </p>

            <div className="link-row" aria-label="Profile links">
              {links.map((link) => (
                <ExternalLink key={link.label} href={link.href}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>

          <img
            className="portrait"
            src="/images/george-ucla.jpg"
            alt="George Pu at UCLA graduation"
          />
        </div>
      </header>

      <Section id="research" title="Research">
        <div className="research-list">
          {research.map((item) => (
            <article className="research-item" key={item.title}>
              <div>
                <h3>
                  {item.title}
                </h3>
                <p className="meta">{item.meta}</p>
                <p>{item.summary}</p>
                <div className="artifact-links">
                  {item.links.map((link) => (
                    <ExternalLink key={link.label} href={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </div>
              <ul>
                {item.takeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="blogs" title="Blogs">
        <div className="blog-list">
          {blogs.map((item) => (
            <article className="blog-item" key={item.title}>
              <ExternalLink href={item.href}>{item.title}</ExternalLink>
              <span>{item.date}</span>
              <span>{item.outlet}</span>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}

export default App;
