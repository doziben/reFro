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
  { date: new Date(2022, 6, 21), id: idGenerator(), value: "" },
  { date: new Date(2022, 6, 22), id: idGenerator(), value: "" },
  { date: new Date(2022, 6, 23), id: idGenerator(), value: "" },
  { date: new Date(2022, 6, 24), id: idGenerator(), value: "" },
  {
    date: new Date(2022, 6, 31),
    id: idGenerator(),
    value: "Worked on frolancer website revamp with the rest of the team",
  },
  {
    date: new Date(2022, 7, 1),
    id: idGenerator(),
    value:
      "Created a meme for pacba website landing page after discussing with samuel",
  },
  {
    date: new Date(2022, 7, 2),
    id: idGenerator(),
    value:
      "Had a meeting with AYO to discuss WGIA end of the month flyer design",
  },
  {
    date: new Date(2022, 7, 3),
    id: idGenerator(),
    value:
      "Revamped the backend code writted earlier to remove all forms of insecurity and bugs",
  },
  {
    date: new Date(2022, 7, 4),
    id: idGenerator(),
    value:
      "Made changes to the front end code for AfricExpay to make sure all redux actions were dispatched",
  },
  {
    date: new Date(2022, 7, 5),
    id: idGenerator(),
    value:
      "Integrated frolancer website to stripe and AfricExpay instead of using one-off subscriptions",
  },
  { date: new Date(2022, 7, 6), id: idGenerator(), value: "" },
  { date: new Date(2022, 8, 1), id: idGenerator(), value: "" },
  { date: new Date(2022, 8, 2), id: idGenerator(), value: "" },
];

export { mockReportData };
