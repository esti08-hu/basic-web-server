<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">A simple web server using the <a href="http://nodejs.org" target="_blank">Node.js</a> framework <a href="http://nestjs.com/" target="_blank">NestJS</a> for serving static messages on three routes.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
</p>

## Description

This is a basic web server built with the [NestJS](https://nestjs.com/) framework. It has three routes that respond with static messages:

- `/name` - Returns your full name as plain text.
- `/hobby` - Returns your favorite hobby in JSON format.
- `/dream` - Returns a motivational message about your dream or goal in life.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://git@github.com:esti08-hu/basic-web-server.git
   cd basic-web-server
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

## Running the Server

```bash
# Development
$ pnpm run start

# Watch mode
$ pnpm run start:dev

# Production mode
$ pnpm run start:prod
```

## Routes

- **GET /name**: Returns your name as a plain text message.
- **GET /hobby**: Returns a JSON object with a hobby field.
- **GET /dream**: Returns a motivational message in plain text.

## Deployment

This server is deployed and accessible online at: [Live Server URL](https://your-live-server-link.com)

For instructions on deploying a NestJS server, refer to the [NestJS deployment documentation](https://docs.nestjs.com/faq/deployment).

## Support

Nest is an MIT-licensed open-source project. It grows with the support of sponsors and contributors. [Learn more here](https://docs.nestjs.com/support).

## Author

- [Estifanos Ameha](https://github.com/esti08-hu)

## License

This project is [MIT licensed](LICENSE).
