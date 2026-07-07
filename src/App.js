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
    authors: [
      'George Pu',
      'Michael S. Lee',
      'Udari Madhushani Sehwag',
      'David J. Lee',
      'Bryan Zhu',
      'Yash Maurya',
      'Mohit Raghavendra',
      'Yuan Xue',
      'Samuel Marc Denton',
    ],
    equalContribution: ['George Pu', 'Michael S. Lee'],
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2602.10525' },
      { label: 'code', href: 'https://github.com/scaleapi/lhaw' },
      { label: 'blog', href: 'https://labs.scale.com/blog/LHAW' },
      { label: 'tweet', href: 'https://x.com/samueldenton/status/2023878235214536912' },
    ],
    summary:
      'LHAW is a modular, dataset-agnostic pipeline for turning well-specified agent tasks into controllably underspecified variants and measuring how agents reason through ambiguity.',
  },
  {
    title: 'Assessing Robustness to Spurious Correlations in Post-Training Language Models',
    meta: 'Workshop on Spurious Correlation and Shortcut Learning: Foundations and Solutions at ICLR 2025 (Oral)',
    authors: [
      'Julia Shuieh',
      'Prasann Singhal',
      'Apaar Shanker',
      'John Heyer',
      'George Pu',
      'Samuel Denton',
    ],
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2505.05704' },
      { label: 'workshop', href: 'https://iclr.cc/virtual/2025/35109' },
    ],
    summary:
      'Studies how post-training algorithms (SFT, DPO, and KTO) behave under synthetic spurious correlations across math, instruction-following, and document-grounded QA.',
  },
  {
    title: 'Balancing Cost and Effectiveness of Synthetic Data Generation Strategies for LLMs',
    meta: 'Workshop on Fine-Tuning in Modern Machine Learning: Principles and Scalability at NeurIPS 2024',
    authors: [
      'Yung-Chieh Chan',
      'George Pu',
      'Apaar Shanker',
      'Parth Suresh',
      'Penn Jenks',
      'John Heyer',
      'Sam Denton',
    ],
    equalContribution: ['Yung-Chieh Chan', 'George Pu'],
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2409.19759' },
      { label: 'blog', href: 'https://scale.com/blog/synthetic-data-fine-tuning-llms' },
    ],
    summary:
      'Compares synthetic-data strategies for fine-tuning, showing how the best choice shifts with seed-data quality and teacher-model query budget.',
  },
  {
    title: '"Kelly is a Warm Person, Joseph is a Role Model": Gender Biases in LLM-Generated Reference Letters',
    meta: 'EMNLP Findings, 2023',
    authors: [
      'Yixin Wan',
      'George Pu',
      'Jiao Sun',
      'Aparna Garimella',
      'Kai-Wei Chang',
      'Nanyun Peng',
    ],
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2310.09219' },
      { label: 'code', href: 'https://github.com/uclanlp/biases-llm-reference-letters' },
      { label: 'tweet', href: 'https://x.com/yixin_wan_/status/1721261056478306792' },
    ],
    summary:
      'Studies bias in LLM-generated reference letters, measuring differences in language, content, hallucinations, and potential downstream socioeconomic impacts.',
  },
  {
    title: 'Empirical Analysis of the Strengths and Weaknesses of PEFT Techniques for LLMs',
    meta: 'Workshop on Mathematical and Empirical Understanding of Foundation Models at ICLR 2023',
    authors: ['George Pu', 'Anirudh Jain', 'Jihan Yin', 'Russell Kaplan'],
    links: [
      { label: 'paper', href: 'https://arxiv.org/abs/2304.14999' },
      { label: 'tweet', href: 'https://x.com/_akhaliq/status/1652870295928053760' },
    ],
    summary:
      'Benchmarks PEFT methods for LLM fine-tuning across tasks and data scales, highlighting tradeoffs in convergence, performance, and trainable parameters.',
  },
  {
    title: 'Interactive Information Capture and Retrieval with Prompts',
    meta: 'US Patent, 2021',
    authors: ['Albert Pu', 'George Pu'],
    links: [
      { label: 'patent', href: 'https://patents.justia.com/patent/20210042662' },
    ],
    summary:
      'Patent work on prompt-driven interfaces for capturing, organizing, and retrieving information.',
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

function Authors({ names, equalContribution = [] }) {
  return (
    <p className="authors">
      {names.map((name, index) => (
        <React.Fragment key={name}>
          {index > 0 && ', '}
          {name === 'George Pu' ? <strong>{name}</strong> : name}
          {equalContribution.includes(name) && '*'}
        </React.Fragment>
      ))}
    </p>
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
              I am a research engineer at{' '}
              <ExternalLink href="https://scale.com/">Scale AI</ExternalLink>, where I build
              specialized agents for enterprises through post-training and human/synthetic data pipelines.
              Previously, I completed my MSCS at UCLA, researching AI safety and representation learning with the{' '}
              <ExternalLink href="http://web.cs.ucla.edu/~kwchang/publications_area/">
                UCLA-NLP
              </ExternalLink>{' '}
              lab under{' '}
              <ExternalLink href="http://web.cs.ucla.edu/~kwchang/">
                Prof. Kai-Wei Chang
              </ExternalLink>, and worked with the{' '}
              <ExternalLink href="https://shangjingbo1226.github.io/lab/">SDLab</ExternalLink>{' '}
              under{' '}
              <ExternalLink href="https://shangjingbo1226.github.io/">
                Prof. Jingbo Shang
              </ExternalLink>{' '}
              during undergrad at UCSD. My research interests center on building reliable agents for
              economically useful long-horizon tasks, especially RL environments for knowledge work and
              LLM post-training dynamics. Outside work, I enjoy national parks, the gym, and tennis.
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
                <Authors names={item.authors} equalContribution={item.equalContribution} />
                <p className="meta">{item.meta}</p>
                <div className="artifact-links">
                  {item.links.map((link, index) => (
                    <React.Fragment key={link.label}>
                      {index > 0 && <span aria-hidden="true">/</span>}
                      <ExternalLink href={link.href}>{link.label}</ExternalLink>
                    </React.Fragment>
                  ))}
                </div>
                <p className="summary">{item.summary}</p>
              </div>
            </article>
          ))}
          <p className="contribution-note">* denotes equal contribution.</p>
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
