---
layout: page
title: Fun stats & facts
permalink: /blog/
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      — {{ post.date | date: "%d/%m/%Y" }}
      {% if post.excerpt %}<br>{{ post.excerpt | strip_html }}{% endif %}
    </li>
  {% endfor %}
</ul>
