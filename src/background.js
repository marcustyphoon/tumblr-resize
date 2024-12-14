if (typeof browser === 'undefined') {
  globalThis.browser = chrome;
}

browser.action.onClicked.addListener((tab) => {
  browser.windows.update(tab.windowId, { width: 1018 });
});
