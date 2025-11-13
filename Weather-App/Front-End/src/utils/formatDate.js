export const formatDate = (timestamp, format = "full") => {
  const date = new Date(timestamp * 1000);

  if (format === "time") {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  if (format === "day") {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatTime = (timestamp) => {
  return formatDate(timestamp, "time");
};

export const formatDay = (timestamp) => {
  return formatDate(timestamp, "day");
};
