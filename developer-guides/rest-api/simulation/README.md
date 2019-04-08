{% assign apistore = site.data.apistore %}
{% assign endpoints = site.data.apistore.paths | sort %}
<!-- {{ endpoints }} -->
# Interactive API Simulation

Here, I tried to make a resusable interactive doc fully based on the current docs we have.

## The table below is generated with markdown and not hard coded

| Url | Short Description | Details Page |
| :--- | :--- | :--- |
| | | |
{% for endpoint in endpoints %}
| `{{ endpoint[1].path }}` | {{ endpoint[1].description }} | | [Link]({% link developer-guides/rest-api/simulation/info/README.md %}) |

{% endfor %}
 <!-- assign here = endpoint[1].path  remove: "/api/v1/"  -->