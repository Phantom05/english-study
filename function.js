// 123. 영어. 한글 포맷이여야함
function convertString(str) {
  return str.split(/[\d]+\./).map((item, idx) => {
    const word = item.trim();
    const pattern_num = /[0-9]/;
    const pattern_eng = /[a-zA-Z]/;
    const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\(\)]/; // 한글체크
    const swap = [0, 0, ""];
    let onlyEn = "";
    let onlyKo = "";
    for (let i = 0; i < word.length; i++) {
      const wd = word[i];
      if (i === 0 && pattern_eng.test(wd)) {
        swap[0] = 1;
      }

      if (pattern_kor.test(wd)) {
        onlyEn = swap[2];
        swap[0] = 0;
        swap[1] = 1;
      }

      if (swap[1] === 1 && swap[0] === 0) {
        onlyKo += wd;
      }
      if (swap[0] === 1) {
        swap[2] += wd;
      }
    }

    return {
      id: idx,
      word: item.trim(),
      en: onlyEn.trim(),
      ko: onlyKo.trim(),
    };
  });
}

function createWordItem(item) {
  return `
  <tr>
    <th scope="row">${item.id}</th>
    <td class="sentence">${item.en}</td>
    <td class="translate">${item.ko}</td>
    <td>
      <input type="checkbox">
      <input type="checkbox">
      <input type="checkbox">
      <input type="checkbox">
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  `;
}

function setList(config) {
  const { target, list } = config;
  const itemList = list.map((item) => createWordItem(item));
  $(target).html(itemList);
}

function toggleClassControl(config) {
  const {
    toggleClass = "",
    attrName = [],
    findListClass = "",
    target = {},
  } = config;
  const getStatus = target.getAttribute(attrName[0]);
  if (getStatus) {
    target.removeAttribute(attrName[0], attrName[1]);
    const getList = Array.from(document.querySelectorAll(findListClass));
    getList.map((item) => item.classList.remove(toggleClass));
  } else {
    target.setAttribute(attrName[0], attrName[1]);
    const getList = Array.from(document.querySelectorAll(findListClass));
    getList.map((item) => item.classList.add(toggleClass));
  }
}
