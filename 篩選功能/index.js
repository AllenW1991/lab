let tickets = [
  {
    id: 0,
    name: "櫻花公園賞櫻3日",
    imgUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl: "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description: "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl: "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description: "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7
  },
  {
    id: 3,
    name: "2櫻花公園賞櫻3日",
    imgUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1300,
    rate: 1
  },
  {
    id: 4,
    name: "2貓空纜車雙程票",
    imgUrl: "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description: "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 1240,
    rate: 8
  },
  {
    id: 5,
    name: "2台中谷關溫泉會1日",
    imgUrl: "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description: "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 765,
    rate: 3
  }
];


const regionSearch = document.querySelector('.regionSearch');
const priceSearch = document.querySelector('.priceSearch');
const textSearch = document.querySelector('.textSearch');
const ticketCard = document.querySelector('.ticketCard-area');

let cacheData = tickets;

function render() {
  let str = '';

  cacheData.forEach((item) => {
    str += `<li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src="${item.imgUrl}" alt="">
          </a>
          <div class="ticketCard-region">${item.area}</div>
          <div class="ticketCard-rank">10</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${item.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">$ ${item.price}</span>
            </p>
          </div>
        </div>
      </li>`;
  })
  ticketCard.innerHTML = str;
}

render();



// 地區篩選
regionSearch.addEventListener('change', function (e) {
  const area = e.target.value;
  if (area === '') {
    // 全部地區
    cacheData = tickets;
  } else {
    cacheData = tickets.filter((item) => item.area === area);
  }
  render();
})
// 金額篩選
priceSearch.addEventListener('change', function (e) {
  const price = e.target.value;
  cacheData = tickets.filter((item) => {
    if (price === '1500 元以上') {
      return item.price > 1500
    } else if (price === '1000-1500 元') {
      return item.price >= 1000 && item.price < 1500
    }
    else if (price === '500-1000 元') {
      return item.price > 500 && item.price < 1000
    }
    else if (price === '500 元以下') {
      return item.price < 500
    }
    else {
      // 全部金額
      return item
    }
  });
  render();
})


// 地區下拉選項過濾
function regionFilter() {
  let region = {};
  // console.log(tickets.map((item) => item.area)) //['高雄', '台北', '台中', '高雄', '台北', '台中']
  region = new Set(tickets.map((item) => item.area));
  // console.log(region)

  let str = `<option value="地區搜尋" disabled selected hidden>地區搜尋</option>
  <option value="">全部地區</option>`;

  region.forEach((item) => {
    str += `
    <option value="${item}" class="regionOption">${item}</option>`
  })
  regionSearch.innerHTML = str;

}
regionFilter();

// 搜尋
textSearch.addEventListener('change', function (e) {
  const reg = new RegExp(e.target.value, 'gi'); // ->  /hi/gi
  // g 他會去找到所有跟高雄有關的結果
  // i 英文大小寫
  // console.log(reg)
  cacheData = tickets.filter((item) => item.name.match(reg));
  render();
})



