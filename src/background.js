if (typeof browser === 'undefined') {
  globalThis.browser = chrome;
}

browser.action.onClicked.addListener(async (tab) => {
  const currentZoom = await browser.tabs.getZoom();

  const targetSize =
    navigator.userAgent.toLowerCase().includes('firefox') && [0.9, 1.1].includes(currentZoom)
      ? 1029 // emperically tested; no idea why this is necessary
      : 1018;

  console.log('zooming browser window to', targetSize, 'px width');
  browser.windows.update(tab.windowId, { width: Math.ceil(targetSize * currentZoom) });
});
