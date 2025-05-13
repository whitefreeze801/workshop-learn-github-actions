const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const toml = require('toml');

try {
  const fields = core.getInput('fields');

  if (!fields) {
    // Get the JSON webhook payload for the event that triggered the workflow and print it
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log("Payload");
    console.log(payload);
  } else {
    console.log("Payload fields:");
    for (const field of fields.split(',')) {
      const value = github.context.payload[field.trim()];
      console.log(`Field: ${field.trim()} = `, value);
    }
  }

  // read ./config.toml as toml and put the base url in the summary
  const config = fs.readFileSync('./config.toml', 'utf-8');
  const parsed = toml.parse(config);
  core.summary.addHeading(`Built "${parsed.title}"`, 3);

  if(fields) {
    let rows = [[{data: "Field", header: true}, {data: "Value", header: true}]];
    for (const field of fields.split(',')) {
      rows.push([
        {data: field.trim(), header: false},
        {data: JSON.stringify(github.context.payload[field.trim()]), header: false},
      ]);
    }
    core.summary.addTable(rows);
  }
  core.summary.write();

  const time = (new Date()).toTimeString();

  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
