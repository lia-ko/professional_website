<script>
  import { projects, projectOrder } from '$lib/projects.js';
  import Colophon from '$lib/Colophon.svelte';
  const list = projectOrder.map((slug) => projects[slug]);
</script>

<svelte:head>
  <title>L.T.</title>
  <meta name="description" content="L.T. — maker of games, tools and worlds by night; software & data engineer by day." />
</svelte:head>

<!-- ================= NIGHT (the maker) ================= -->
<div class="edition night">
  <div class="grain"></div>

  <section class="hero">
    <span class="blob b1"></span><span class="blob b2"></span><span class="halftone"></span>
    <div class="wrap">
      <div class="hero-mast">
        <span class="lt">L.T.</span>
      </div>
      <p class="kick"><b>L.T.</b> — Games · Tools · Worlds</p>
      <h1 class="huge quote-title">Don't dream it,<br /><span class="pink">be</span> it.</h1>
      <p class="attrib">— Tim Curry as Frank-N-Furter</p>
      <p class="lede">Let me help bring your creative vision to life.</p>
    </div>
  </section>

  <section class="section" id="work">
    <div class="wrap">
      <span class="stamp">Things I made</span>

      {#each list as p, i}
        <a class="feature {i % 2 === 1 ? 'flip' : ''}" href="/projects/{p.slug}">
          <div class="art-wrap">
            {#if i % 2 === 0}<span class="tape"></span>{/if}
            <div class="pframe">
              {#if p.cover}
                <div class="pshot" style="background-image:url({p.cover});background-size:cover;background-position:top center"></div>
              {:else}
                <div class="pshot {p.grad}"></div>
              {/if}
            </div>
          </div>
          <div class="fbody">
            <p class="flabel">{p.flabel}</p>
            <h3>{p.title}</h3>
            <p class="byline">{p.medium}</p>
            <p>{p.blurb}</p>
            <span class="read">Read the build →</span>
          </div>
        </a>
      {/each}
    </div>
  </section>
</div>

<!-- ================= DAWN (the turn) ================= -->
<section class="dawn"></section>

<!-- ================= DAY (the engineer) ================= -->
<div class="edition day">
  <div class="grain"></div>

  <section class="hero">
    <span class="blob b1"></span><span class="blob b2"></span><span class="halftone"></span>
    <div class="wrap">
      <div class="hero-mast">
        <span class="lt">L.T.</span>
      </div>
      <p class="kick"><b>L.T.</b> — Software &amp; Data Engineer</p>
      <h1 class="huge day-title">Let's get down<br />to <span class="pink">business.</span></h1>
      <p class="lede">I build software the way you'd build to last — good foundations, honest joints, and room to grow.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <span class="stamp">The blueprint</span>
      <div class="bricks">

        <article class="brick b-found">
          <span class="lab">01 · Foundations</span>
          <h3>How I build</h3>
          <p>
            I'm a little obsessed with the craft of it. Good software is <b>maintainable</b> software —
            designed for the change that's coming, not just the ticket in front of me. I lean on SOLID and
            DRY, clear separation of concerns, and code that's tested and documented so the next person
            (usually future me) isn't left digging. I build systems meant to be <b>extended and to evolve</b>,
            not torn down and rebuilt a year later.
          </p>
          <div class="principles">
            <span>SOLID</span><span>DRY</span><span>TDD</span><span>Separation of concerns</span><span>Documentation-first</span>
          </div>
        </article>

        <article class="brick b-half">
          <span class="lab">02 · The Craft</span>
          <h3>Skills I have</h3>
          <ul>
            <li>Designing data platforms &amp; pipelines</li>
            <li>Event-driven backends &amp; APIs</li>
            <li>System modernization &amp; migration</li>
            <li>Observability &amp; incident response</li>
            <li>Data modeling &amp; integration</li>
            <li>Mentoring &amp; code review</li>
          </ul>
        </article>

        <article class="brick b-half">
          <span class="lab">03 · The Toolbox</span>
          <h3>Tech I reach for</h3>
          <div class="field">
            <span>Python</span><span>C#</span><span>SQL</span><span>Go</span><span>Java</span><span>FastAPI</span><span>Flask</span><span>Kafka</span><span>Spark</span><span>Airflow</span><span>Trino</span><span>Docker</span><span>Prometheus</span><span>Grafana</span>
          </div>
        </article>

        <article class="brick b-third">
          <span class="lab">04 · On the bench</span>
          <h3>Learning</h3>
          <p class="mut">Always something new on the workbench.</p>
          <div class="field learn">
            <span>C++</span><span>Svelte</span><span>TypeScript</span><span>Godot</span>
          </div>
        </article>

        <article class="brick b-twothird">
          <span class="lab">05 · The Ground</span>
          <h3>Platforms I know</h3>
          <div class="field">
            <span>Databricks</span><span>OpenShift</span><span>Azure</span><span>Google Cloud</span><span>AWS · S3</span><span>Elasticsearch</span><span>Kubernetes</span>
          </div>
        </article>

      </div>
    </div>
  </section>

  <Colophon />
</div>
