export interface DataItem {
  id: number;
  question: string;
  title: string;
  img: any;
}

export interface TopQuestionItem {
  id: number;
  title: string;
  details: string;
}

export const data: DataItem[] = [
  {
    id: 1,
    question: "Questions about",
    title: "Getting Started",
    img: require("./src/assets/img/notification.png"),
  },
  {
    id: 2,
    question: "Questions about",
    title: "How to Invest",
    img: require("./src/assets/img/questions.png"),
  },
  {
    id: 3,
    question: "Questions about",
    title: "Payment Method",
    img: require("./src/assets/img/payment.png"),
  },
];

export const topQuestions: TopQuestionItem[] = [
  {
    id: 1,
    title: "How to create an account?",
    details:
      "Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account.",
  },
  {
    id: 2,
    title: "How to add a payment method by this app?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus cursus dui vel vehicula.",
  },
  {
    id: 3,
    title: "What Time Does The Stock Market Open?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus cursus dui vel vehicula.",
  },
  {
    id: 4,
    title: "Is The Stock Market Open On Weekends?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus cursus dui vel vehicula.",
  },
];
