function dataCruncher(data) {
  const custMap = {};

  data.forEach(item => {
    if (custMap[item.name]) {
      custMap[item.name].total = custMap[item.name].total + item.amt;
      custMap[item.name].pts = custMap[item.name].pts + (calcSingleRewards(item.amt) + calcDblRewards(item.amt));
    } else {
      custMap[item.name] = {
        total: item.amt,
        pts: calcSingleRewards(item.amt) + calcDblRewards(item.amt)
      };
    }
  });

  const results = objToArray(custMap);
      
  return results;
}

export function objToArray(obj) {
  const keys = Object.keys(obj);

  return keys.map(item => ({
    name: item,
    pts: obj[item].pts,
    total: obj[item].total
  }));
}

export function calcSingleRewards(amt) {
  if (amt >= 100) {
    return 50;
  } else if (amt > 50) {
    return amt - 50;
  } else {
    return 0;
  }
}

export function calcDblRewards(amt) {
  if (amt > 100) {
    return 2 * (amt - 100);
  } else {
    return 0;
  }
}

export default dataCruncher;