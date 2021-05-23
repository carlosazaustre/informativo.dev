export const getDomainFromUrl = (url) => {
  return url.split("://")[1].split("/")[0];
};
