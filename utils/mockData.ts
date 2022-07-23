//Report Logs
//date, report,

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
