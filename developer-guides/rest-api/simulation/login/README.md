---
method: post
title: POST /login
swaggerfile: apistore
swaggerkey: /post
parameters: true
endpoint: login
authentication: false
---
{% assign apistore = site.data.apistore.paths %}
{% assign path = "/api/v1/login" %}
{% capture entry-point %}{{apistore[path]}}.{{page.method}}.description{% endcapture %} 

# {{ page.title }} 

{{ site.data.apistore.paths[path].get.description }}

<!-- {% include api-table2.html path = "/api/v1/info" method = "get" %} -->

| URL | Requires Auth | HTTP Method |
| :--- | :--- | :--- | :--- |
| `{{ path }}` | `{{ site.data.apistore.paths[path].post.authentication }}` | `{{ page.method | upcase }}` |

{% if site.data.apistore.paths[path].post.parameters %}
## Parameters

| Argument   | Example            | Required | Schema | Description   |
| :----------- | :--------------------- | :---------- | :--------- | :-------------- |
|  |  |  |  | |
{% for parameter in site.data.apistore.paths[path].post.parameters %}

| `{{ parameter.name }}` | `{{ parameter.example }}` | {{ parameter.required }} | {{ parameter.schema.type }} | {{ parameter.description }} | 

{% endfor %}
{% endif %}

## Notes

-> **You will need to provide the `authToken` and `userId` for any of the authenticated methods.** <br/>
-> **If your user has two-factor(2FA) authentication enabled, you must send a request like [this](#example-call---when-two-factor2fa-authentication-is-enabled).** <br/>
-> **If LDAP authentication is enabled, you must maintain the login in the same way as you normally do. Similarly if 2FA is enabled for an LDAP user. Everything stays the same.** <br/>

## Example Call - To verify playground area

{% include api-playground.html path = "/api/v1/login" method = "post" interactive = true %}

## Change Log

| Version | Description |
| :--- | :--- |
| 0.64.0 | Added `me` property to response |
| 0.60.0 | Added |
