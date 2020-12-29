const { initiate, terminate } = require("./function/pptr");

(async () => {
  const page = await initiate()
  await page.goto('https://www.instagra.com/himarono/')
  await terminate()
})();
