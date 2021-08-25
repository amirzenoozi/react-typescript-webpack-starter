export const twoDArrayConvertor = (arr: number[]) => {
  const newArray: number[][] = [];
  while (arr.length) newArray.push(arr.splice(0, 2) as number[]);
  return newArray;
};

export const singleDArrayConvertor = (arr: number[][]) => {
  const newArray = arr.reduce((init, item) => init.concat(...item), []);
  return newArray;
};
