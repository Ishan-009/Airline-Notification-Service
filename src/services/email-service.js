const { TicketRepository } = require("../repositories/index");
const { MAILER } = require("../config/index");
const ticket = require("../models/ticket");

const ticketRepository = new TicketRepository();
async function sendEmail(mailFrom, mailTo, subject, text) {
  try {
    const response = await MAILER.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: subject,
      text: text,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createTicket(data) {
  try {
    const response = await ticketRepository.create(data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getPendingEmails() {
  try {
    const response = await ticketRepository.getPendingTickets();
    return response;
  } catch (error) {}
}

module.exports = { sendEmail, createTicket, getPendingEmails };
