import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    </header>
    <p className={styles.heroTitle}>
         Multiple Sidebars Using Docusaurus
      </p>
  </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn how to configure multiple sidebars in a Docusaurus project">
      <HomepageHeader />
      <p className={styles.heroSubtitle}>
          Learn how to configure multiple sidebars in a Docusaurus project
        </p>
      <main>
        <section className={styles.infoSection}>
          <div className={styles.cardsContainer}>
            <div className={clsx('card', styles.card)}>
              <h3>Getting Started</h3>
              <p>Comprehensive guides for setting up and using the project.</p>
              <Link className="button button--primary" to="/getting-started/quickstart">Get Started</Link>
            </div>
            <div className={clsx('card', styles.card)}>
              <h3>Deploy</h3>
              <p>Comprehensive guides providing step-by-step deployment instructions.</p>
              <Link className="button button--primary" to="/deploy/bestpractices">Learn Deployment</Link>
            </div>
            <div className={clsx('card', styles.card)}>
              <h3>Write Code</h3>
              <p>Best practices and guidelines for writing and contributing code.</p>
              <Link className="button button--primary" to="/write-code/bestpractices">Explore Coding</Link>
            </div>
          </div>
          <hr/>
        </section>
        
        <section className={styles.detailsSection}>
          <Heading as="h2">Why Use Multiple Sidebars?</Heading>
          <p>Multiple sidebars help create well-organized, scalable documentation for various project areas. To showcase this example, we will create below sidebars:</p>
          <ul>
            <li>Getting Started - showing all topics in one sidebar.</li>
            <li>Deployment - in another sidebar.</li>
            <li>Write Code - in a third sidebar.</li>
          </ul>
          <p>Learn how to configure them in your own project by visiting the guide on <Link to="https://www.nikhilajain.com/post/how-to-set-up-multiple-sidebars-in-docusaurus">setting up multiple sidebars</Link>.</p>
        </section>

        <section className={styles.feedbackSection}>
          <Heading as="h2">Feedback</Heading>
          <p>
            We’d love to hear your feedback and suggestions. Feel free to <Link to="https://github.com/jnikhila/docusaurus-multiple-sidebars/issues">open an issue</Link> or contribute to this project.
          </p>
        </section>
      </main>
    </Layout>
  );
}
