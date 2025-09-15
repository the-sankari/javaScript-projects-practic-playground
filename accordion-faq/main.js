"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

const accordionContainer = document.querySelector(".accordion");

const faqData = [
  {
    question: "What is the return policy?",
    answer: "You can return any item within 30 days for a full refund.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping usually takes 5-7 business days.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 100 countries.",
  },
];

const createFAQItem = (faq) => {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  const faqQuestion = document.createElement("div");
  faqQuestion.classList.add("faq-question");
  faqQuestion.textContent = faq.question;

  const faqAnswer = document.createElement("div");
  faqAnswer.classList.add("faq-answer");
  faqAnswer.textContent = faq.answer;

  faqQuestion.addEventListener("click", () => {
    faqAnswer.classList.toggle("active");
    console.log(`Toggled FAQ: ${faq.question}`);
    
  });

  faqItem.appendChild(faqQuestion);
  faqItem.appendChild(faqAnswer);

  return faqItem;
};

const renderFAQs = () => {
  faqData.forEach((faq) => {
    const faqItem = createFAQItem(faq);
    accordionContainer.appendChild(faqItem);
  });
};

renderFAQs();
