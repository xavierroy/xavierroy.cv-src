---
title: "Xavier Roy · Résumé"
layout: layout.njk
---

<p>Work entries found: {{ collections.work | length }}</p>

<section class="intro">
  <h1>Hi, I’m Xavier Roy.</h1>
  <p>I help people understand software better — through clear documentation, thoughtful systems, and collaborative strategy.</p>
</section>

<section class="open-to">
  <h2>Open to Opportunities</h2>
  <p>I'm exploring leadership roles in technical writing, documentation strategy, and developer experience. Let’s build teams and systems that scale content with care.</p>
</section>

<section class="work-listing">
  <h2>Experience</h2>

  {% for item in collections.work | reverse %}
    <article class="work-summary">
      <header>
        <h3><a href="{{ item.url }}">{{ item.data.title }}</a></h3>
        <p class="meta">
          <strong>{{ item.data.company }}</strong> — {{ item.data.location }}<br />
          <span>{{ item.data.period }}</span>
        </p>
      </header>

      {% if item.data.highlights %}
        <ul class="highlights">
          {% for point in item.data.highlights | slice(0, 3) %}
            <li>{{ point }}</li>
          {% endfor %}
        </ul>
      {% endif %}

      <p><a href="{{ item.url }}">Read more →</a></p>
    </article>
  {% endfor %}
</section>

<hr />
<section class="debug">
  <h2>Debug: Work Entries</h2>
  <p>Total found: {{ collections.work | length }}</p>
</section>
