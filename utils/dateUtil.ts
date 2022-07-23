interface dateUtilProps {
  date: Date;
}

const dateUtil = ({ date }: dateUtilProps) => {
  let day = date.getDay();
  const month = date.getMonth();
  const time = date.getTime();

  //** Getting Week *//
  let currentDate: any = new Date(date);
  let startDate: any = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  var week = Math.ceil(days / 7);

  return [day, week, month, time];
};

export default dateUtil;
