function getSeasonInfo(lat, month) {
  console.log(lat, month)
  if(!lat || !month) {
    return null;
  }
  if(month > 2 && month < 8) {
    const season = lat > 0 ? 'summer' : 'winter';
    return season
  } else {
    const season = lat > 0 ? 'winter' : 'summer';
    return season;
  }
}

export default getSeasonInfo;