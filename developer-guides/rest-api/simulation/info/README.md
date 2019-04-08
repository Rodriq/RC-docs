---
method: get
title: GET /info
swaggerfile: apistore
swaggerkey: /get
parameters: none
endpoint: info
authentication: false
--- 

{% assign apistore = site.data.apistore.paths %}
{% assign path = "/api/v1/info" %}

# {{ page.title }}

{{ site.data.apistore.paths[path].get.description }}

<!-- {% include api-table2.html path = "/api/v1/info" method = "get" %} -->

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- | :--- |
| `{{ path }}` | `{{ site.data.apistore.paths[path].get.authentication }}` | `{{ page.method | upcase }}` |

## Example Call and Result

{% include api-playground.html path = "/api/v1/info" method = "get" interactive = false %}

```bash
curl http://localhost:3000/api/v1/info
```

## Example Result

<!-- ```json
{
  "success": true,
  "info": {
    "version": "0.47.0-develop",
    "build": {
      "nodeVersion": "v4.6.2",
      "arch": "x64",
      "platform": "linux",
      "cpus": 4
    },
    "commit": {
      "hash": "5901cc7270e3587101631ee222def950d705c611",
      "date": "Thu Dec 1 19:08:01 2016 -0200",
      "author": "Gabriel Engel",
      "subject": "Merge branch 'develop' into experimental",
      "tag": "0.46.0",
      "branch": "experimental"
    }
  }
}
``` -->

## Change Log

| Version | Description |
| :--- | :--- |
| 0.13.0 | Added |
