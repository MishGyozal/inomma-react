window.addEventListener("load", async () => {
  if (navigator.serviceWorker) {
    try {
      const reg = await navigator.serviceWorker.register("sw.js");
    } catch (e) {
      console.log("Fail", e);
    }
  }
});
