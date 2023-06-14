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
import ImgCard from '@components/global/ImgCard';

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

<!-- Here we have 2 separate implementation for different senario 

It includes following module : -->

## Home Page
<ImgCard img="/img/web_channel/01.png" height="300px" width="50%"/>

## Fetch bot List

 It calls the UCI’s contextual api to get the bot list.

<ImgCard img="/img/web_channel/02.png"/>

## Socket Setup to start conversation

A socket connection is required to interact with the bot.
<ImgCard img="/img/web_channel/03.png"/>

Here **Authorization** and Channel header is a must, **deviceId** can be any unique identifier.Here for the socket, we have the following event,


<ImgCard img="/img/web_channel/04.png"/>

## Send Message
**“botRequest”** event is emitted for sending the message to the backend.

<ImgCard img="/img/web_channel/05.png"/>


## Start Interacting with bot
To start the conversation with a bot you need to activate the bot first. For activating the bot we need to do the botRequest with the bot’s **“Starting Message”**.

<ImgCard img="/img/web_channel/06.png"  width="70%"/>

You can restart the conversation at any time by choosing the following option from the menu in the top right corner or sending aestric(*)  in botRequest.

<ImgCard img="/img/web_channel/07.png" width="70%"/>


To go to the previous option you can choose the following option from the menu.

<ImgCard img="/img/web_channel/08.png" width="70%"/>

## Download the media    
You can download the media by clicking on the download icon present in the bottom right corner of the media.



## Starred the message
 You can star the message by clicking on the start icon present in the bottom right corner of the message.

 <ImgCard img="/img/web_channel/09.png" width="70%"/>

## View Starred Messages
You can go to the starred page by clicking on the tab shown in the picture

<ImgCard img="/img/web_channel/10.png" width="60%"/>

Select the bot to see the starred messages of that bot

<ImgCard img="/img/web_channel/11.png"  width="60%"/>


<ImgCard img="/img/web_channel/12.png"  width="60%"/>






