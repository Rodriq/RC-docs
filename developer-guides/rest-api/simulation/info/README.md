---
method: get
title: GET /info
permalink: /info/
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

Here I tried automating a real api request when the `try it` button is clicked. Theres an ability to alter the url and see the realtime response.
Although this is not at its best, when fully done and error methods handle, it'll work just as expected.

{% include api-playground.html path = "/api/v1/info" method = "get" interactive = false %}

## Change Log

| Version | Description |
| :--- | :--- |
| 0.13.0 | Added |
