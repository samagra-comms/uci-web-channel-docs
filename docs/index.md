---
title: UCI Web Channel
sidebar_label: Overview
slug: /
hide_table_of_contents: true
demoUrl: https://uci-web-channel-master.vercel.app/login/
demoSourceUrl: https://github.com/samagra-comms/uci-web-channel-docs
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Samagra Docs</title>
  <meta
    name="description"
    content="your meta description"
  />
  <link rel="rel" href="href" />

  <meta property="og:url" content="https://samagra-docs.vercel.app" />
</head>


<intro-end />

<DocsCards>
  <DocsCard header="Installation Guide" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>Step-by-step guides to setting up your system and installing the framework.</p>
  </DocsCard>

<DocsCard header="Environment Setup" href="/intro/environment" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>Step-by-step guides to setting up the environment</p>
  </DocsCard>

  <DocsCard header="Codebase Setup" href="/codeSetup/index" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>Step-by-step guides to setting up the repo.</p>
  </DocsCard>

  <DocsCard header="Main Modules" href="/codeSetup/mainModules" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>Description about the building blocks</p>
  </DocsCard>
</DocsCards>

## About UCI :open_book:

The Unified Communications Interface (UCI) aims to democratize the use of different communication channels such as WhatsApp, Telegram, SMS, email and more for governance use cases through a standard configurable manner that is reusable and scalable across all governance use cases.

## Features :dart:

- Ability to connect to any communication channel through any service provider without doing custom changes in the core logic UCI.
- The UCI ecosystem is independent of external variables like communication channel and service provider powered by XMessage standard.
- Ability to have a configurable conversation logic for the bot
- Ability to connect to any database (local or federated) via services
- Ability to include value added services in the bot interaction flow through Microservices (Internal or External)
- Ability to create tools on top of UCI APIs to manage Bot configuration, conversations and visualization


### About UCI Web Channel
It's a web client powered by [NextJs](https://nextjs.org/docs) ,[ChatUI](https://www.npmjs.com/package/samagra-chatui) and [Turborepo](https://turbo.build/repo) and using [UCI](https://github.com/samagra-comms) as backend.
It demonstrates how we can leverage UCI backend for communication.

Here we have 2 separate implementation for different senario 

It includes following module :





