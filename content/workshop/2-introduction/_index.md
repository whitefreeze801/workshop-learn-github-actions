---
weight: 2
title: 2 - Introducing GitHub Actions
params:
  slides: true
---

## Introducing GitHub Actions
{{< slide first="true"  prevRef="workshop/1-create-repo/">}}

{{< columns-image ratio="1:3" >}}
{{< figure
  src="/art/bluegreen-dog-icons/turning.png"
  link="/credits"
  width="100%"
>}}

<--->

Now that we have bootstrapped our workshop repository, it's time to dig into GitHub Actions!

{{< /columns-image >}}

{{< hint danger >}}
The yaml snippets in this section are simplified to help understand the main building-blocks of GitHub Actions. They will not work if copied directly.

At the end of the section will be a complete file that can safely be copy and pasted.
{{< /hint >}}

{{< /slide >}}

{{< slide  >}}

## Where we are

By now you should have a new repository and Codespace running, this workspace includes all the assets for this workshop. However, you can't view the workshop without running `hugo` in your Codespace and accessing a port forward.

## What We Want

- A new publically available website for the workshop based on your repo
- Automatic builds of the workshop for commits to ensure that PRs never merge if they break builds
- Automatic publishing changes that have been merged into `main` to the public website.

## What We Don't Want

- To have to install anything locally
- To have to have any servers to maintain
- To have to pay anything for our tiny little personal project


{{< /slide >}}

## Actions
{{< slide >}}

{{< columns-image ratio="1:1" >}}
{{< figure
  src="/diagrams/component-actions.png"
  width="100%"
>}}

<--->

Actions are the smallest building blocks of GitHub Actions.

They are defined in yaml and can be as simple
as executing a single command or as complex as running a deeply nested series of actions.

Some types of Actions:

- Javascript
- Shell
- Docker
- Composite

> There is a [deep dive on Actions](/workshop/4-actions/) later in the workshop

{{< /columns-image >}}

{{< hint warning icon>}}
### A note about terms

* `action`: An encapsulated behavior. Usually doing something like compiling code or running tests.
* `step`: An instruction to a Job to **execute** a specific action.

In programming terms: an action *defines* a function and a step *calls* it.

### But...

The community (and this workshop) tends to use the two terms interchangeably.
{{< /hint >}}

{{< /slide >}}

### Where do actions come from?
{{< slide >}}

There are 2 sources of actions:

* Custom actions you write yourself
  * [Covered in the deep dive on Actions](/workshop/4-actions/)
* Actions you source from the community
  * Discoverable in the [Marketplace](https://github.com/marketplace?type=actions)

{{< hint info icon>}}
### More information is coming

If you have questions about actions/steps just hang tight. Later sections in the
workshop cover all of these in more detail. For now just focus on understanding the
yaml structure.
{{< /hint >}}

{{< /slide >}}

### Community Example
{{< slide >}}
A very basic example of a step might be to fetch the code for the current repo.

```yaml
- name: Checkout
  uses: actions/checkout@v3
```
{{< /slide >}}

### Community Example - Configured
{{< slide >}}
Steps may have configuration, the format and specifics of the configuration are dependent on action being used.
This custom configuration can be provided in the `with` field when needed.

```yaml
- name: Checkout
  uses: actions/checkout@v3
  with:
    submodules: true
    fetch-depth: 0
```
{{< /slide >}}

### Custom
{{< slide >}}
Steps may also be as simple as running a script:

```yaml
- name: Build
  run: hugo --minify
```

Complex scripts may use the yaml multiline syntax to provide longer scripts inline in the yaml.

```yaml
- name: Build
  run: |
    echo "doing thing"
    date
    sleep 1
    echo "done"
```
{{< /slide >}}

## Jobs
{{< slide >}}

{{< columns-image ratio="1:1" >}}
{{< figure
  src="/diagrams/component-jobs.png"
  width="100%"
>}}

<--->

Jobs are collections of one or more steps that should be run in sequence.

Jobs typically define things like:

- Where they will run
- `if` conditions to limit when they will run (optional)
- Actions (steps) to execute as part of the job

{{< /columns-image >}}
{{</ slide >}}


### Example
{{< slide >}}

A simple yaml definition for a might look like this:

1. Check out the repo using the official action
2. Setup the code for building by running `make`
3. Build the project using a custom action defined in the repo

```yaml
name: Build
runs-on: ubuntu-20.04
steps:
  - name: Checkout
    uses: actions/checkout@v3

  - name: Setup
    run: make setup

  - name: Build
    run: ./.github/actions/build
```

{{< hint danger icon>}}
## Jobs Have State!
All the steps in a job are run on the same host without any automatic cleanup between them. This is fundamentally different from
many other CI/CD systems. Especially those build on containers.
{{< /hint >}}

{{</ slide >}}

## Workflows
{{< slide >}}

{{< columns-image ratio="1:1" >}}
{{< figure
  src="/diagrams/component-workflows.png"
  width="100%"
>}}

<--->

Workflows are collections of one or more jobs that should be potentially executed **using the same trigger conditions**.

Workflow runs can be triggered by many different things:

- Pushes to repository
  - tags
  - branches
- Issues changes
- PR label changes
- Manual Trigger Calls
- Other Workflows Running
- [Many, many, many more events](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows)

{{< /columns-image >}}

{{</ slide >}}


### Example
{{< slide >}}

Notice we have now nested the example job inside the `jobs` section of the workflow.

```yaml
name: CI/CD
on: push # The trigger conditions
jobs:
  build:
    name: Build
    runs-on: ubuntu-20.04
    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup
      run: make setup

    - name: Build
      run: ./.github/actions/build
```

{{< /slide >}}

## Runners
{{< slide >}}

{{< columns-image ratio="1:1" >}}
{{< figure
  src="/diagrams/component-runners.png"
  width="100%"
>}}

<--->

Runners are actual machines, vms, or containers where the configured actions actually run.

{{< hint info icon>}}
## Common Runners

There are [many common runners](https://docs.github.com/en/actions/writing-workflows/choosing-where-your-workflow-runs/choosing-the-runner-for-a-job) you can target in a job.

- `ubuntu-latest`
- `windows-latest`
- `macos-latest`
- `-large` variants of the above for paying users
- [Self-Hosted](https://docs.github.com/en/actions/writing-workflows/choosing-where-your-workflow-runs/choosing-the-runner-for-a-job#choosing-self-hosted-runners)
{{< /hint >}}

{{< /columns-image >}}

{{< hint danger icon>}}
### Runner choice can change everything!

There are many different runners that are provided by GitHub. You are also able to create
and register your own runners to run workloads. The capabilities of the step can change dramatically
based on the runner you choose to execute the action on.
{{< /hint >}}

{{< /slide >}}

### Runner Cost
{{< slide  last="true" nextRef="workshop/3-first-workflow" >}}

The usage required for this workshop **will barely touch the free tier each public
repository is alloted**. But if you use actions you should be aware of how billing works.

{{< hint warning icon>}}
## Budgets

All accounts have a default budget of $0. Unless you have explicitly enabled billing you
should not be charged for any Github products used in the course of this workshop.

[You can confirm your account budgets here](https://github.com/settings/billing/budgets)
{{< /hint >}}

### Potential Cost

Along with billing runners by size, runners are also billed by type:

- Self-Hosted runners are free!
  - Outside your hosting and infra costs
- Linux runner minutes are counted 1 to 1
- Windows runner minutes are counted 1 to 3
- MacOS runner minutes are counted **1 to 10**

Savvy users use multiple jobs and to delay the use of expensive runners until they are absolutely needed.

{{< /slide >}}
