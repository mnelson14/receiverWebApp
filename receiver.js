
const context = cast.framework.CastReceiverContext.getInstance();
context.setLoggerLevel(cast.framework.LoggerLevel.DEBUG);
const playerManager = context.getPlayerManager();

playerManager.addEventListener(
    cast.framework.events.EventType.ERROR, (event) => {
      // Write your own event handling code, for example
      // using the event.mediaStatus value

      // Update style using javascript
      // let playerElement = document.getElementsByTagName("cast-media-player")[0];
      // playerElement.style.setProperty('--splash-image', 'url("getApp.png")');

      let playerElement = document.getElementsByTagName("body")[0];
      playerElement.style.setProperty('--logo-image', 'url("getApp.png")');
});

context.start();
