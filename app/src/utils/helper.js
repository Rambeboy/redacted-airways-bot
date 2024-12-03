const figlet = require("figlet");
const colors = require("./colors");

function displayBanner() {
  const banner = figlet.textSync("Redacted Airways BOT", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
  });

  console.log(`${colors.bannerText}${banner}${colors.reset}`);
  console.log(
    `${colors.bannerBorder}===============================================${colors.reset}`
  );
  console.log(
    `${colors.bannerLinks}Author : Nofan Rambe${colors.reset}`
  );
  console.log(
    `${colors.bannerLinks}Welcome & Enjoy Sir!${colors.reset}`
  );
  console.log(
    `${colors.bannerBorder}===============================================\n${colors.reset}`
  );
}

module.exports = displayBanner;
