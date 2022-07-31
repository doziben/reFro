//get the current week,
//Show all data that belong to the current week by mapping through the data
//Only display days 1-5s

// data.filter((item)=> {
//     const date = new Date()
//     const [day, week, month, time] = dateUtil({date})
//     const [itemDay, itemWeek, Month, Time] = dateUtil({item.date})
//     return (
//         itemWeek === week
//     )
// })

export interface staffReport {
  id: string;
  date: Date;
  value: string;
}

function randomLetter() {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const randomLetter = alphabets[Math.floor(Math.random() * 7)];

  return randomLetter;
}

function randomNumber() {
  const randomNumber = Math.floor(Math.random() * 234);
  return randomNumber;
}

function idGenerator() {
  const id = `${randomNumber()}${randomLetter()}${randomLetter()}${randomNumber()}${randomLetter().toUpperCase()}`;
  return id;
}

const mockReportData: staffReport[] = [
  { date: new Date("7 / 21 / 2022"), id: idGenerator(), value: "" },
  { date: new Date("7 / 22 / 2022"), id: idGenerator(), value: "" },
  { date: new Date("7 / 23 / 2022"), id: idGenerator(), value: "" },
  { date: new Date("7 / 24 / 2022"), id: idGenerator(), value: "" },
  {
    date: new Date("7 / 25 / 2022"),
    id: idGenerator(),
    value: "Worked on frolancer website revamp with the rest of the team",
  },
  {
    date: new Date("7 / 26 / 2022"),
    id: idGenerator(),
    value:
      "Created a meme for pacba website landing page after discussing with samuel",
  },
  {
    date: new Date("7 / 27 / 2022"),
    id: idGenerator(),
    value:
      "Had a meeting with AYO to discuss WGIA end of the month flyer design",
  },
  {
    date: new Date("7 / 28 / 2022"),
    id: idGenerator(),
    value:
      "Revamped the backend code writted earlier to remove all forms of insecurity and bugs",
  },
  {
    date: new Date("7 / 29 / 2022"),
    id: idGenerator(),
    value:
      "Made changes to the front end code for AfricExpay to make sure all redux actions were dispatched",
  },
  {
    date: new Date("7 / 30 / 2022"),
    id: idGenerator(),
    value:
      "Integrated frolancer website to stripe and AfricExpay instead of using one-off subscriptions",
  },
  { date: new Date("7 / 31 / 2022"), id: idGenerator(), value: "" },
  { date: new Date("8 / 1 / 2022"), id: idGenerator(), value: "" },
  { date: new Date("8 / 2 / 2022"), id: idGenerator(), value: "" },
];

export { mockReportData };
