const fillTimeValue = (duration) => {
  const currentTime = Math.floor(duration);
  const minutes = Math.floor(currentTime / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (currentTime > 9 ? currentTime % 60 : `${currentTime % 60}`)
    .toString()
    .padStart(2, '0');

  return `${minutes}:${seconds}`;
};

export default fillTimeValue;
