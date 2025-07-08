export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function getDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
      userAgent
    );

  if (isMobile) {
    return "mobile";
  } else {
    return "desktop";
  }
}

export function lockScroll() {
  const scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";
  document.body.dataset.scrollY = `${scrollY}`;
}

export function unlockScroll() {
  const scrollY = document.body.dataset.scrollY;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, parseInt(scrollY || "0"));
}
