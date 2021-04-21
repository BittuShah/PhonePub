export const generateGreetings = () => {
  const currentHour = new Date().getHours();
  if (currentHour >= 4 && currentHour < 12) {
    return 'Good morning';
  } else if (currentHour === 12) {
    return 'Good noon';
  } else if (currentHour > 12 && currentHour < 17) {
    return 'Good afternoon';
  } else if (currentHour >= 17 || currentHour < 4) {
    return 'Good evening';
  } else {
    return 'Hi';
  }
};
