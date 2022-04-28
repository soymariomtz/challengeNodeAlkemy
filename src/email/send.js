require("dotenv").config();
const mailer = require("../../config");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(mailer.mail.api);

welcomeMail = (mailTo) => {
  const msg = {
    to: mailTo,
    from: "mariomtz091@gmail.com",
    templateId: "d-b4edd4458724486fa51aab8ba6c05c1d",
  };

  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
};

module.exports = welcomeMail;
