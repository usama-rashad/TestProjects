import { Transport, createTransport } from "nodemailer";

let transporter = createTransport({
  service: "gmail",
  auth: {
    user: "usamakr@googlemail.com",
    pass: "mkgxzvhufsqurmnb",
  },
});

interface IEmailAttachements {
  path: string;
  fileName: string;
}

function createMailOptions(fromEmail: string, toEmail: string, mailSubject: string, mailMessage: string, attachments: IEmailAttachements[]) {
  let mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: mailSubject,
    text: mailMessage,
  };
  return mailOptions;
}

export const sendTestMail = () => {
  let files: IEmailAttachements[] = [
    {
      fileName: "dataLog.txt",
      path: "../email/dataLog.txt",
    },
  ];
  let mailOptions = createMailOptions("usamakr@googlemail.com", "usamakr@googlemail.com", "Node JS No-Reply", "This is a test message", files);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
