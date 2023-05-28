# Multiplexing POC

## Description
A Proof of Concept for fetching data from a server only from a single tab and broadcasting the data to the other tabs

## How does it work?
- [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API)
- [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)

## Stack
- React (but it's totally framework agnostic and doesn't depend on anything)
- express (to create a simple demo server)

## How to start
1. Start the server
```console
npm run server
```
2. Start the client
```console
npm run client
```
3. Open [http://localhost:8080](http://localhost:8080) in your browser
