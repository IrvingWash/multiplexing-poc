# Locking Horns

## Description
A Proof of Concept for fetching data from a server only from a single tab and broadcasting the data to another tabs

## How does it work?
- [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API)
- [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)

## Stack
- React
- express (to create a simple demo server)

## How to start
1. Start the server
```console
locking-horns$ npm run server
```
2. Start the client
```console
locking-horns$ npm run client
```
