<script>
  import Colophon from '$lib/Colophon.svelte';

  let { data } = $props();
  let p = $derived(data.project);

  let active = $state(0);
  // Reset to the first shot whenever we land on a different project.
  $effect(() => {
    p.slug;
    active = 0;
  });
</script>

<svelte:head>
  <title>L.T. — {p.title}</title>
  <meta name="description" content={p.blurb} />
</svelte:head>

<div class="edition night">
  <div class="grain"></div>

  <section class="hero">
    <span class="blob b1"></span><span class="blob b2"></span>
    <div class="wrap">
      <div class="hero-mast">
        <span class="lt">L.T.</span>
        <span class="reading-flag">Project</span>
      </div>
      <a class="backlink" href="/#work">← Back to all work</a>
      <h1>{p.title}</h1>
      <p class="ptag">{p.tagline}</p>
    </div>
  </section>

  <div class="wrap proj">
    {#if p.shots?.length}
      <div class="pgallery">
        <div class="stage">
          <img src={p.shots[active].src} alt="{p.title} — {p.shots[active].caption}" />
        </div>
        <p class="cap">{p.shots[active].caption}</p>
        {#if p.shots.length > 1}
          <div class="thumbs" role="tablist" aria-label="{p.title} screenshots">
            {#each p.shots as s, i}
              <button
                role="tab"
                aria-current={i === active}
                aria-label="View screenshot {i + 1}"
                onclick={() => (active = i)}
              >
                <img src={s.src} alt="" loading="lazy" />
              </button>
            {/each}
          </div>
        {/if}
      </div>
    {:else}
      <div class="cover"><div class="pshot {p.grad}"></div></div>
    {/if}

    <div class="proj-grid">
      <div class="proj-body">
        {#each p.body as para}
          <p>{para}</p>
        {/each}
      </div>

      <aside class="proj-side">
        <div class="block">
          <p class="sh">Built with</p>
          <div class="field">
            {#each p.stack as t}<span>{t}</span>{/each}
          </div>
        </div>

        <div class="block">
          <p class="sh">Highlights</p>
          <ul style="list-style:none;padding:0;margin:0">
            {#each p.features as f}
              <li style="font-size:14px;padding:6px 0;color:var(--ink)">— {f}</li>
            {/each}
          </ul>
        </div>

        <div class="block links">
          <p class="sh">Links</p>
          <a href={p.links.repo}>Source →</a>
          <a href={p.links.live}>Live / demo →</a>
        </div>
      </aside>
    </div>
  </div>

  <Colophon />
</div>
