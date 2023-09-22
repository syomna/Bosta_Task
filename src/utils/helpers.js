import { greenColor, primaryColor, yellowColor } from "./themes";

export const longDateFormat = (timestamp, local) => {
  const date = new Date(timestamp);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    weekday: "long",
    eraYear: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat(local, options).format(date);
  return formattedDate;
};

export const shortDateFormat = (timestamp, local) => {
  const date = new Date(timestamp);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatter = new Intl.DateTimeFormat(local, options);

  const formattedDate = formatter.format(date);

  return formattedDate;
};

export const shipmentColor = (state) => {
  let color;
  switch (state) {
    case "delivered":
      color = greenColor;
      break;
    case "cancelled":
      color = primaryColor;
      break;
    case "delivered_to_sender":
      color = yellowColor;
      break;
    default:
      color = "#00000";
  }
  return color;
};

export const getDateAndTime = (timestamp) => {
  const dateObject = new Date(timestamp);

  const formattedDate = `${dateObject.getFullYear()}/${
    dateObject.getMonth() + 1
  }/${dateObject.getDate()}`;

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const amOrPm = hours >= 12 ? "pm" : "am";
  const formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, "0")} ${amOrPm}`;

  return { date: formattedDate, time: formattedTime };
};
