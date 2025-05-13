---
title: Workshop
weight: 1
---

# Workshop: Learning GitHub Actions

{{< slide first="true" prevRef=".">}}

## What you need

* [A GitHub account](https://github.com/signup)
* Internet access
  * This is a fully-online workshop, even the *code editing* will be done via browser

## What you do **not** need

While you might normally use the following tools, the workshop is designed to not require them.

* A git client installed on your machine
  * We will be using GitHub to do git operations
  * You can use a git client and clone the repository to your local machine if you prefer
* A code editor
  * We will be using the GitHub vscode web editor
  * You can use a local editor if you prefer, but the workshop will use [GitHub Codespaces](https://github.com/features/codespaces)
{{< /slide>}}

## GitHub Primer
{{< slide >}}

The only requirement to do this workshop is a [GitHub](https://github.com) account. If you do not have one, it is easy and free to [sign up](https://github.com/signup).

### GitHub Actions Pricing

This workshop **requires** you to use GitHub Actions. This is a service provided by GitHub and as such may or may not have
a cost associated with it depending on your usage.

{{< hint >}}
This workshop we have you make a public repository and contains very short workflows.
This means that there should be no cost associated with doing this workshop.
{{</ hint >}}

As long as you make your repository public then usage of GitHub actions is **free** to a point. But
please reference the [Billing Documentation](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
for information on the cost associated with using GitHub Actions in private repositories and free usage limitations.
{{</ slide >}}

### GitHub Codespaces Pricing
{{< slide last="true" nextRef="workshop/preamble">}}

For speed and ease of use, this workshop is built around [GitHub Codespaces](https://github.com/features/codespaces). Whenever possible, it contains alternate instructions that do not require Codespaces. This is a service
provided by GitHub and comes with limitations and a potential cost

{{< hint warning>}}
You do not have to use Codespaces in order to use GitHub Actions! This is done in the workshop purely for minimal attendee setup.

Free accounts get 120 hours per month which is much, much less time then is required to complete this workshop.
{{</ hint >}}

Each user gets a limited number of free Codespace hours per month. Be sure to *stop* or *delete* codespaces when you are done so you do not waste usage hours
with an idle codespace. If you do not manually stop, the codespace will timout after a set duration (default 30 minutes) so the maximum wasted time is 1/2 hour if you do not
manually exit a space. See the [Billing Documentation](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) for more information
on the free tier or added costs.

{{</ slide >}}

