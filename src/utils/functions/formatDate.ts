export const formatDate = (data: string): string => {
  const date = new Date(data);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // 24-hour format
  };

  return new Intl.DateTimeFormat('en-GB', options).format(date);
};
