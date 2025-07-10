async function checkDailyInspectionDuplicate(selectedCar) {
  // GitHub raw URL 例
  const url = 'https://github.com/KimuraTomonori/dx1.0_-/blob/main/inspection-log.json';

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.includes(selectedCar);
  } catch (e) {
    return false; // エラー時は許可するなど適宜調整
  }
}