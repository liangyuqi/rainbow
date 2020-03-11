export function IsMac() {
  let agent = navigator.userAgent.toLowerCase();
  let isMac = /macintosh|mac os x/i.test(agent);
  return isMac;
}
