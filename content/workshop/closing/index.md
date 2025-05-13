---
weight: 1000
title: "Closing"
params:
  slides: true
---

# Closing
{{< slide first="true" prevRef="workshop/4-actions">}}

{{< columns-image ratio="3:1" >}}

## Success!

If you have reached this far then you should have a good grasp of the basic
tools available to you in GitHub Actions.

## Share it!

Be sure to share the link below so you can have someone else learn GitHub Actions
by deploying the workshop you just deployed!

<code>
<a href="{{% ref "/" %}}">{{% ref "/" %}}</a>
</code>

<--->

{{< figure
  src="/art/gray-dog-icons/turning.png"
  link="/credits"
  width="75%"
>}}

{{</ columns-image >}}
{{< /slide >}}

## More Things To Learn
{{< slide nextRef="credits">}}

* [Save and transfer artifacts](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow)
  * Share results from builds
  * Pass files between jobs
* [Run services during builds](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/about-service-containers)
  * Run your database/message queue/cache for integration testing
* [Run multiple inter-dependent jobs](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-jobs-in-a-workflow#example-requiring-successful-dependent-jobs)
  * Have multiple jobs in one workflow with guaranteed ordering.
* [Handle concurrency](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/control-the-concurrency-of-workflows-and-jobs)
  * Cancel in-progress workflows when a new one runs, saving you time and resources
  * Get locking for workflows to ensure you don't over-use shared resources
* [Cache your resources](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows)
  * Faster builds
  * Save network bandwidth
* [Deploy and use your own runners](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners) 
  * Run jobs in your own infrastructure
  * Reduce compute costs
* [Create reusable workflows](https://docs.github.com/en/actions/sharing-automations/reusing-workflows)
  * Avoid rewriting and copy/paste as a solution for distributing entire workflows
* [Use a matrix to fan out concurrent jobs](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow)
  * Useful easily for building/testing across multiple architectures with a single workflow


{{< /slide >}}
