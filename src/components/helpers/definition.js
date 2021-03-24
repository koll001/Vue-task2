const genereateYears = () => {
  const nengoes = [];
  for (let y = 2021; y > 1920; y--) {
    if (y > 2018) {
      nengoes.push({ year: y, label: `${y} (令和${y - 2018})` });
    } else if (y > 1988) {
      nengoes.push({ year: y, label: `${y} (平成${y - 1988})` });
    } else if (y > 1925) {
      nengoes.push({ year: y, label: `${y} (昭和${y - 1925})` });
    } else if (y > 1911) {
      nengoes.push({ year: y, label: `${y} (大正${y - 1911})` });
    }
  }
  return nengoes;
};

const generateMonths = () => {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }

  return months;
};

function generateDays() {
  const days = [];
  let lastDay = 0;
  if (this.month == 2) {
    if (this.year % 4 == 0) {
      lastDay = 29;
    } else {
      lastDay = 28;
    }
  } else if (
    this.month == 4 ||
    this.month == 6 ||
    this.month == 9 ||
    this.month == 11
  ) {
    lastDay = 30;
  } else {
    lastDay = 31;
  }

  for (let i = 1; i <= lastDay; i++) {
    days.push(i);
  }

  return days;
}

export { genereateYears, generateMonths, generateDays };
