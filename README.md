# Starter for serverless>aws>nodejs>typescript
all inclusive starter for serverless>aws>nodejs>typescript projects

## Requirements

### Local
* install NodeJS (if needed)
* install serverless (if needed) : `npm install -g serverless`
* setup git `git config core.eol lf && git config core.autocrlf input`

### AWS
* IAM role to use to deploy, see [Minimum credential set for Serverless Framework]
(https://gist.github.com/ServerlessBot/7618156b8671840a539f405dea2704c8)
### Github
* define AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY secret

## Project setup
`npm install`

### Commands
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
