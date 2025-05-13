---
weight: -1000
title: "Preamble"
params:
  slides: true
---

# Workshop Preamble
{{< slide first="true" prevRef="workshop">}}

{{< hint info icon>}}
Serverless!

The workshop build process results in static assits. That allows them to be served
as basic files out of a branch of the repository which means that no
servers are required for you to share your deployment of the workshop.
{{< /hint >}}

## Architecture

{{< figure src="/diagrams/arch/arch.png" width="100%" class="text-center">}}

## Components

- A repository On Github
- GitHub Codespaces to edit code
- GitHub Actions for CICD
  - GitHub hosted runners
- Github Pages for web hosting

{{< /slide >}}

## YAML, YAML, and more YAML
{{< slide >}}

GitHub Actions relies heavily on YAML for defining the work to be done.

Some basic yaml features that will help you understand the files in this workshop

## A basic map file

```yaml
a: yaml
object: uses
colons: to separate keys and values
```

## A with a key that is a list of strings

```yaml
list-descr:
  - a
  - yaml
  - list
  - uses hypens to separate items
```

## A map with a key that is a list of maps

> Extra newlines are ignored in yaml so it is often used to help separate items in lists
> but both maps below are functionally identical.

```yaml
list-of-objects:

  - a: yaml
    list: of objects

  - uses: hypens
    to: start new objects

list-of-objects:
  - a: yaml
    list: of objects
  - uses: hypens
    to: start new objects
```

{{< /slide >}}

## About Hugo - The generator for this site
{{< slide >}}

{{< columns-image ratio="1:3" >}}

{{< figure src="/hugo-logo-512x512.png" width="100%" class="text-center">}}

<--->

GitHub Actions (our CICD) and GitHub Pages (our hosting platorm) don't require you to use any particular language or tool.
But this specific workshop is built on the wonderful, open-source [Hugo](https://gohugo.io/) static site generator and the
[hugo-book theme](https://github.com/alex-shpak/hugo-book).

{{< /columns-image >}}

{{< hint info warning>}}
### Why Hugo?


Hugo is a static website generator that takes in markdown files and uses templates to generate static assets that do not need any
evaluation on the server-side. This makes it a perfect tool for generating blogs or other web sites. Static assets are also
much more secure and easier to serve and are required if you want to host your site with GitHub Pages.
{{< /hint >}}

{{< /slide >}}

## Working With `git` based CICD
{{< slide last="true" nextRef="workshop/1-create-repo/" >}}

Using yaml files and git to configure CICD comes with many, many benefits. But it can
also be incredibly frustrating when you are going through the inevitable trial and error
that is required when working through issues.

A few tips:

- Use the `git` CLI so you can automate changes
- [Learn how to use `git rebase -i` to clean up commits](https://guts-of-git.carson-anderson.com/)

A simple one-liner to allow easy "up and enter" iteration is

```sh
git add -A; git commit -m "fixup-$(date "+%Y%m%dT%H%M%S")"; git push
```

You can make it into an easy alias with

```sh
alias fixup='git add -A; git commit -m "fixup-$(date "+%Y%m%dT%H%M%S")"; git push'
```

Now all you have to do to test a CICD change is type `fixup` and hit enter!

{{< /slide >}}
