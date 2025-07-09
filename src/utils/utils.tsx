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

export function lockScroll(fixTop?: boolean) {
  const scrollY = window.scrollY;
  const page = document.getElementById("root");
  if (!page) return;
  page.style.position = "fixed";
  page.style.top = `-${fixTop ? 0 : scrollY}px`;
  page.style.left = "0";
  page.style.right = "0";
  page.dataset.scrollY = `${scrollY}`;
}

export function unlockScroll(fixTop?: boolean) {
  const page = document.getElementById("root");
  if (!page) return;
  const scrollY = fixTop ? "0" : page.dataset.scrollY || "0";

  page.style.position = "";
  page.style.top = "";
  page.style.left = "";
  page.style.right = "";

  window.scrollTo(0, parseInt(fixTop ? "0" : scrollY));
}
