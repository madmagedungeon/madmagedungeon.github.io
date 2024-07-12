---
layout: default
title:  "Últimos Posts"
permalink: /blog
---



<h1>Últimos Posts</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <span>{{ post.date | date: "%Y-%m-%d" }}</span> &raquo;
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<div class="pagination">
  {% if paginator.total_pages > 1 %}
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}" class="previous">Anterior</a>
    {% endif %}
    {% for page in (1..paginator.total_pages) %}
      {% if page == paginator.page %}
        <span class="page-number current">{{ page }}</span>
      {% else %}
        <a href="{{ paginator.paginate_path | replace: ':num', page }}" class="page-number">{{ page }}</a>
      {% endif %}
    {% endfor %}
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}" class="next">Próximo</a>
    {% endif %}
  {% endif %}
</div>



