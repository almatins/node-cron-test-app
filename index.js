import cron from "node-cron";

cron.schedule("* * * * * *", () => {
  const date = new Date();
  console.log(`${date} running a task every second`);
});

cron.schedule("5,35 * * * * *", () => {
  const date = new Date();
  console.log(`${date} running a task every 5th and 35th second every minute`);
});
