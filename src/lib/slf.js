const getUniqId = function () {
  this.id++;
  return `${this.id}`;
}.bind({ id: -1 });

export { getUniqId };