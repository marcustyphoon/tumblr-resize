if (typeof browser === 'undefined') {
  globalThis.browser = chrome;
}

browser.action.onClicked.addListener(async (tab) => {
  browser.windows.update(tab.windowId, { width: Math.ceil(1018 * (await browser.tabs.getZoom())) });
});
