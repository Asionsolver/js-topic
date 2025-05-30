/**
Imagine you have a list of numbers representing, say, the height of a terrain at different points, or the value of a stock over several days.
What is a "Maximum"?
A maximum is simply the highest point. If you have [1, 5, 2], the maximum is 5.
What does "Local" mean?
"Local" means we are only concerned with the immediate surroundings of a point, not the entire dataset.
So, a "Local Maximum" (or a "Peak") is a number in the list that is:
Greater than the number immediately before it.
AND greater than the number immediately after it.
Think of it like a small hill or a mountain peak in a mountain range:


      /\        _/\_
     /  \      /    \
    /    \    /      \
   /      \__/        \  /\
  /                      \/

He tops of these "hills" are local maxima. They are higher than the points right next to them on either side. Notice that a local maximum isn't necessarily the absolute highest point in the entire range, but it's a peak in its local neighborhood.
*/

const dataPoints = [2, 5, 3, 6, 4, 7, 5, 8, 9];

const localMaxima = dataPoints.filter((element, index, arr) => {
  const prevElement = arr[index - 1];
  const nextElement = arr[index + 1];

  // Handle edge cases:
  // 1. First element: A peak if it's greater than the next, or if there's no next (single element array).
  if (index === 0) {
    return nextElement === undefined || element > nextElement;
  }
  // 2. Last element: A peak if it's greater than the previous, or if there's no previous (single element array - covered above).
  if (index === arr.length - 1) {
    return prevElement === undefined || element > prevElement;
  }

  return element > prevElement && nextElement < element;
});

console.log(localMaxima);
