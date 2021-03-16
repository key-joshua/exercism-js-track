export const encode = text => {
  const consecutiveLetters = text.match(/([a-zA-Z\s])\1*/g)||[];
  return consecutiveLetters.map(letters => {
    const checkCount = letters.length >= 2 ? letters.length : '';
    return String(`${checkCount + letters.charAt(0)}`)
  }).join("");
};

export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};
