const handleArrowKey = (
  event,
  handleChangeFunction,
  validateFunction,
  ignoreKey,
) => {
  if (ignoreKey) {
    event.preventDefault();
    return;
  }

  const cursorPosition = event.target.selectionStart;

  // Validate the input
  const inputValue = event.target.value; // say, 10.12345
  const errors = event.target.validity;
  if (!errors.valid) {
    validateFunction(inputValue, errors);
  } else {
    const stepValueTimesTen = 1;

    // Extract the number up to 1st decimal digit
    const inputValueTimesTen = Number(inputValue) * 10; // say, 101.2345
    let inputValueTimesTenTruncated = Math.trunc(inputValueTimesTen); // say, 101

    // Extract the last 3 decimal digits
    const inputValueTimesTenDecimalDigits =
      inputValueTimesTen - inputValueTimesTenTruncated; // say, 0.2345
    const inputValueLastThreeDecimalDigits = Math.round(
      inputValueTimesTenDecimalDigits * 1000,
    ); // say, 235

    let newInputValueTimesTenTruncated;
    // Increase the value by 0.1
    if (event.key === 'ArrowUp') {
      newInputValueTimesTenTruncated =
        inputValueTimesTenTruncated + stepValueTimesTen; // say, 102
    }
    // Decrease the value by 0.1
    if (event.key === 'ArrowDown') {
      newInputValueTimesTenTruncated =
        inputValueTimesTenTruncated - stepValueTimesTen; // say, 100
    }

    // Avoid floating point math quirks
    const newInputValueTimesTenThousand =
      newInputValueTimesTenTruncated * 1000 + inputValueLastThreeDecimalDigits; // 102235
    const newInputValue = Number(
      (newInputValueTimesTenThousand / 10000).toFixed(4),
    ).toString(); // '10.2235'
    // toFixed(4) to avoid floating-point math fractional values (e.g. 10.299999... => 10.3000)
    // Number() to remove trailing zeros (e.g. '10.1000' => 10.1) (see https://stackoverflow.com/a/19623253/11847654)
    // toString() to convert into string
    handleChangeFunction(newInputValue, errors);
  }
  // Set the cursor position
  event.target.selectionStart = cursorPosition;
  event.target.selectionEnd = cursorPosition;

  ignoreKey = true;
  setTimeout(function() {
    ignoreKey = false;
  }, 1);
  event.preventDefault();
};

export default handleArrowKey;
