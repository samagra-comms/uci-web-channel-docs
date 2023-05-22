---
title: Main Modules
sidebar_label:  Main Modules
---



<head>
  <title>Main Modules</title>
  <meta
    name="description"
    content="your meta content goes here"
  />
</head>

## Socket Connection (for establishing connection)

```js
 io( transportSocketUrl , {
          transportOptions: {
            polling: {
              extraHeaders: {
                Authorization: Bearer Token,
                channel: your communication channel,
              },
            },
          },
          query: {
            deviceId: unique deviceId or mobile,
          },
          autoConnect: false,
          upgrade: false,
        }
   )
```
The above function will return a socket

## Adding listeners for socket events

```js
   socket.on("connect", onConnectCallbackFn);
   socket.on("disconnect", onDisconnectCallbackFn);
   socket.on("botResponse", onMessageReceivedCallbackFn);
   socket.on("exception", onExceptionCallbackFn);
   socket.on("session", onSessionCreatedCallbackFn);

```

## Triggering a send request

```js
   	socket?.emit('botRequest', {
        content: {
            text: 'your text',
            userId: socketSession.userID,
            appId: 'your application id',
            channel: 'your channel provider',
            from: socketSession.socketID,
            context: null,
            accessToken:null
        },
        to: socketSession?.userID
    });

```