---
layout: layout.njk
title: Xavier Roy — Résumé
---

<header>
  <h1>
    Xavier Roy  
    <span>I help people understand software better.</span>
  </h1>
  <address>
    <a href="https://www.linkedin.com/in/xavierroy/">in/xavierroy</a>  
    <a href="https://github.com/xavierroy">github/xavierroy</a>  
    <a href="mailto:xavier@xavierroy.com">xavier@xavierroy.com</a>
  </address>
</header>

---

## Summary

Accomplished information experience leader with two decades of expertise in documentation, developer tooling, and systems thinking. I specialize in making complex ideas accessible — through clear writing, thoughtful systems, and collaborative strategy.

---
## Open to Opportunities

{% for role in collections.work %}
  {% if role.data.period == "Coming Soon" %}
  <article class="future-role">
    <h3>{{ role.data.title }} at {{ role.data.company }}</h3>
    <p><em>{{ role.data.location }}</em></p>

    <ul>
      {% for item in role.data.highlights %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>

    <p><a href="{{ role.url }}">What I want to build →</a></p>
  </article>
  {% endif %}
{% endfor %}

---

## Experience
{% for role in collections.work %}
  {% if role.data.period != "Coming Soon" %}
    <article class="work-entry">
      <h3>{{ role.data.title }} at {{ role.data.company }}</h3>
      <p class="meta">{{ role.data.period }} — {{ role.data.location }}</p>

      {% if role.data.highlights %}
        <ul>
          {% for item in role.data.highlights | slice(0, 3) %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
      {% else %}
        <p>{{ role.data.highlight }}</p>
      {% endif %}

      <p><a href="{{ role.url }}">Read more →</a></p>
    </article>
  {% endif %}
{% endfor %}
---

## Education

- **Certified Usability Analyst (CUA)** — Human Factors International  
- **M.S. in Information Technology & Management** — Madurai Kamaraj University  
- **B.Sc. in Computer Science** — Bharathiar University

---

## Contact

- 🌐 [xavierroy.cv](https://xavierroy.cv)  
- 📧 [xavier@xavierroy.com](mailto:xavier@xavierroy.com)  
- 💼 [LinkedIn](https://www.linkedin.com/in/xavierroy)  
- 💻 [GitHub](https://github.com/xavierroy)
