# Starter for serverless>aws>nodejs>typescript

all inclusive starter for serverless>aws>nodejs>typescript projects
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=garmr_starter__sls-aws-nodejs-typescript&metric=alert_status)](https://sonarcloud.io/dashboard?id=garmr_starter__sls-aws-nodejs-typescript)

## Best practices

- Separate the Lambda handler from your core logic.
- Use environment variables to pass operational parameters to your function.
- Take advantage of execution context reuse to improve the performance of your function.
- Avoid using recursive code.
- Keep lambda responsibility as small as possible and forward data to a next lambda whenever it is possible.

## Opiniated

All files related to any one function should be in a single folder, Typescript transpilable code will be hosted under a directory named `src`.
Lambda itself will always be named `index.ts` while business logic will be accessible using a file named `(*-)?handler.ts` as per `dash-case` convention.
For example, if using [CoR design pattern](https://refactoring.guru/design-patterns/chain-of-responsibility), CoR handlers will be named after their responsibility, exemple `http-put-handler.ts`.
Other will follow this [TypeScript Style Guide and Coding Conventions](https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md) - `PascalCase` for Class name, `camelCase` for properties and method and so on.

## Requirements

### Local

- [install NodeJS](https://nodejs.org/en/download/current/) (if needed)
- install serverless (if needed) : `npm install -g serverless`
- setup git `git config core.eol lf && git config core.autocrlf input`

### AWS

- IAM role to use to deploy, see [Minimum credential set for Serverless Framework](https://gist.github.com/ServerlessBot/7618156b8671840a539f405dea2704c8)

### Github

- define AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY secret

## Project setup

`npm install`

## Commands

### Create a new service

`sls create --template aws-nodejs-typescript --path <service path to function directory>`

## References

### confluence

[Starter Serverless x Typescript x AWS Lambda](https://easiware.atlassian.net/wiki/spaces/IP/blog/2020/09/01/2031321093/Starter+Serverless+x+Typescript+x+AWS+Lambda)
[AWS Lambda x NodeJS x Typescript](https://easiware.atlassian.net/wiki/spaces/IP/blog/2020/09/10/2055667722/AWS+Lambda+x+NodeJS+xTypescript)

### serverless

[serverless.yml file](https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml/)

### github

[Events that trigger workflows](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows)
