import dateUtil from "../../utils/dateUtil";
import { staffReport } from "../../utils/mockData";
import ReportItem from "./ReportItem";

interface WeekViewProps {
  data: staffReport[];
}

const WeekView = ({ data }: WeekViewProps) => {
  //* Get the data that the dates are equal to this week */

  const weekData = data.filter((item) => {
    // const itemDate = item.date;
    const currDate = new Date();
    // const [itemDay, itemWeek, itemMonth, itemTime] = dateUtil({
    //   date: itemDate,
    // });
    // const [currDay, currWeek, currMonth, currTime] = dateUtil({
    //   date: currDate,
    // });

    // const correctWeek = itemWeek === currWeek;
    // const monToFri = itemDay >= 1 || itemDay <= 5;
    return item.date.getDay() === new Date().getDay();
  });

  console.log(weekData);
  console.log(data);

  return (
    <>
      {weekData.map((data) => {
        const { date, id, value } = data;
        return <ReportItem date={date} id={id} key={id} value={value} />;
      })}
    </>
  );
};

export default WeekView;
