window.onload = () => {
  // 小清新文案数组
  const captions = [
    '时光静好，岁月安然',
    '往事如烟，浅笑而安',
    '岁月无恙，现世安稳',
    '时光荏苒，回忆永存',
    '往事随风，温暖依旧',
    '岁月如歌，回忆如诗',
    '时光不老，我们不散',
    '往事清零，爱恨随意',
    '岁月温柔，回忆绵长',
    '时光匆匆，回忆浓浓',
    '往事如梦，初心不改',
    '岁月静好，浅笑安然',
    '时光不语，静待花开',
    '往事不回头，未来不将就',
    '岁月无痕，回忆有迹',
    '时光荏苒，岁月如梭',
    '往事如烟，浅笑安然',
    '岁月静好，现世安稳',
    '时光不老，我们不散',
    '往事随风，爱恨随意',
    '岁月温柔，回忆绵长',
    '时光匆匆，回忆浓浓',
    '往事如梦，初心不改',
    '岁月静好，浅笑安然',
    '时光不语，静待花开',
    '往事不回头，未来不将就',
    '岁月无痕，回忆有迹',
    '时光荏苒，岁月如梭',
    '最美的不是下雨天，是曾与你躲过雨的屋檐',
    '愿岁月可回首，且以深情共白头',
    '时光静好，与君语；细水流年，与君同；繁华落尽，与君老',
    '人生若只如初见，何事秋风悲画扇',
    '向来缘浅，奈何情深',
    '曾经沧海难为水，除却巫山不是云',
    '人生如逆旅，我亦是行人',
    '一花一世界，一叶一追寻',
    '心之所向，素履以往',
    '面朝大海，春暖花开',
    '愿你被这个世界温柔以待',
    '以梦为马，不负韶华'
  ];

  let imgInfo = [
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEPlv6uJwgBe7Z6URQnMvfysDesfw1WDfYkvKXcFgkZNucO4Cnj0Chx*h8D6klkNrMsGFZPRQREB8JM5BPQoPaok!/b&bo=YAlABmAJQAYBJwA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEBO8BO8XK*yJCTr4w.lg9XQ.Ap13hTwGd*iy4xLPN8CZuxjBUlb1QteRvH0Wacu9oB9GqNKFUpiT4fIX*9qb6E8!/b&bo=YAlABmAJQAYBJwA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEBO8BO8XK*yJCTr4w.lg9XTiAqmevx5h*dKh7rzTn0GvRSPclGgkv1LV7wGFYTUTBwg5p6Ok5KktI.w4AjPAl78!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEPlv6uJwgBe7Z6URQnMvfysDesfw1WDfYkvKXcFgkZNucO4Cnj0Chx*h8D6klkNrMsGFZPRQREB8JM5BPQoPaok!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEJ8bUSw2cyaCs*5Cmkyru4WzCtqHcVwa4cnXUPOPlqyP0RZPTC1XMepA5CEisuo6V1E7*lqjWvlnKBL7Ih9DdY8!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEIbTCt9sV6hQ*x8mhT7iATx0WXKMNkhZvmJmjChoeockLt04aRapRSOt06eRUoWebisHnWMIp25o367Z1shKGxA!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEL9thU38WxBtK9cXNeitgG.sQw6y5sNDQYiK6GaX9unmLAJe*HBGpxPdqIPxh5WzIgSiAgoiKUHH30QsfaLjfB0!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEB8QcNePPJ*dqlTVunJS2A76dsFbjti.FRR8qMNjzINjqJdqQ.mO43wveZUzf*eheZtR1m2oS.QDpZ9F5bmAyWA!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrELKKvOXcjNwujcESa7dik9x3CxMnvaZr7ZTCDmw7vL0tf2E2s29rvm*p1U80Z3HRpAFG7vBSkVq.c8oZ2gbDMj4!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEArXnxuiZwcR.AFlLtApZ5mlZOIuKuPt95S8IjxWTb*a85JCjm1Jzf9ekmkZa4kNSk.BxyGrbTCxLkRLscwIByg!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEM5uZohsT3KjVyfZX.b0*HfEBnD3i25emgjcECREe3i1BaWBQRoz4N2.eJUpSsnN26*QvU0jGxfP*Z2*h8glp24!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrENgaJeD4lJD0IWNbwRcXG5UkBZutzfgCgSJp4t14CeQsV4vK*UjdNPNss0aW8c6TRIko.I.9bC7yhTMcvxip8Xw!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEDYRqQjx5xf7rH82ednNe0aZKcFvdy3IuZflo..NSTfJM0eTRLmn5a.59ESbZk4OqVfoSIidYgjCt1ou78Nju7I!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEJbpjLUeu7Pn6S*b*YnRYzF8usZ8hnTRshdUQ5sLHVtcN7PVZFE1VZa2k49eRXgQ8OsB8U6OqnGcLeaa7G4MqrA!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEAxgi6V89BAos1jWXbobFFWb03j**fJH3QfcpvmGTwfahl72KQEmBdas24BBSE9dmjimXL6IrtCeGRvgX3tkoek!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEL58.CJ3vU19m5a2fP6SMXkMpfBSAKfFEyXvstkW5ok68TZOsjxLABEhQelMEuAA0QfTiRx.1qFTPMbbTG4LVac!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrECTiBaak1LxkHxZGYvlL4SjTPQ9QcNNKw7Pjh9k6MP8e*3M8rSwPB9pF8Nb8WiF31RpU3j7wLJgJnSbPwGqTas8!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEOrnlHRo*ysBZA2sepQ2sajHX6znh5blmd8jXkgpCZRktEiV*fPto3w6239CHkJ6Y5BIJ7uCUCaUpvgcAqxHzTE!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrELB.j3Fr9Z0sytN*efh8OSBd33alSykmM.vyv7bJSy4uIKLKJnnMzMCLb.eeOBLYBSxlo8Pp5HltjfU5ma8p3OA!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEKRBpYKDlJM6iz3ML.3wnjLM6YO7fHZWwWx1HDbzlaWYiAOh0vSzx1PCke63RKX*Yesa53SJXrXbbCYBt7lCUoc!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEI3WBnSqo1F5eU7a7GvetNwTL1podADqd8uggYAJK1rZz.qfpnp1FDGCxvJSN369ZzgxKKo9CVbR.VE0TgXUfUY!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEK5vQ68LfCsYgRAat2z8cPZAOkCIVcyC3NxWyl9TIm*mZtRiM7JNYYuJXBGvUAB.Cn5O1twZJZAiIIxtqIeP8xI!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEOmEW1wYOzHWzheh7NFAdS4exvTzWugi4plWssCDiRRbAaF2.ApbdHAhSwtiPu33P7OPYlKaKURK3zgsgY7PwVk!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrECVzAS4gkk6MdD..tI1s34VWTTOMESkJcaDpOa408aU0zeHOhAQivS0BD6iD3HJyovBIIWKaebvIzCct8G673ck!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEG0NwJuYW3hRFE4HtFYV3DE5I91yEg5YyKtOE12nkRg28JP3T*ju0ZuY8NE*X4Wrk490wUhiZF8DKXYgJlkxfWQ!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEI8OCANKkYi9*3XNHu*ErXKnmeLVQuLkUNu0KSrKTTttLsnCX5V.wgVwFvPmXdSnRfoqIurNr9wEGXSWlTQl.b8!/b&bo=YAlABmAJQAYBByA!&rf=viewer_4&t=5',
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEO8oBp08rbVIDzjxx4c1vwgt66bdSUVcHtqoN0XWPpg8oviX*i5Rsa4N2wMQwoe*Ijo.yIX.mv5jum5RulegvF4!/b&bo=QAZgCUAGYAkBByA!&rf=viewer_4&t=5',
  
  ];
  // 假装我有很多图片
  // for (let i = 0; i < 4; i++) {
  //   imgInfo = [...imgInfo, ...imgInfo];
  // }

  // 图片预览功能
  let currentIndex = 0;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;
  const modal = document.getElementById('preview-modal');
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  function openModal(index) {
  currentIndex = index;
  modalImg.src = imgInfo[index];
  modal.classList.add('active');
  // 重置变换属性
  currentScale = 1;
  translateX = 0;
  translateY = 0;
  modalImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
}

  function closeModal() {
    modal.classList.remove('active');
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + imgInfo.length) % imgInfo.length;
    openModal(currentIndex);
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % imgInfo.length;
    openModal(currentIndex);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
  if (nextBtn) nextBtn.addEventListener('click', showNextImage);

  // 点击模态框外部关闭
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // 移动端触摸事件
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;
  let initialScale = 1;
  
  let initialDistance = 0;

  function getDistance(touch1, touch2) {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function handleTouchStart(e) {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    startX = touchStartX;
    startY = touchStartY;
    isDragging = currentScale > 1; // 只有缩放后才能拖动
  } else if (e.touches.length === 2) {
    initialDistance = getDistance(e.touches[0], e.touches[1]);
    initialScale = currentScale;
    isDragging = false; // 双指操作时禁用拖动
  }
}

  function handleTouchMove(e) {
  e.preventDefault(); // 防止页面滚动

  if (e.touches.length === 2 && initialDistance > 0) {
    // 双指缩放
    const currentDistance = getDistance(e.touches[0], e.touches[1]);
    const scaleRatio = currentDistance / initialDistance;
    currentScale = initialScale * scaleRatio;
    // 限制缩放范围
    currentScale = Math.min(Math.max(currentScale, 1), 3);
    modalImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
  } else if (e.touches.length === 1 && isDragging) {
    // 单指拖动
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    
    translateX += deltaX;
    translateY += deltaY;
    
    startX = currentX;
    startY = currentY;
    
    modalImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
  }
}

  function handleTouchEnd(e) {
  if (e.touches.length === 0) {
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;
    
    // 检查是否是拖动操作，如果不是则执行滑动切换
    if (!isDragging) {
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 50) showPrevImage();
        else if (diffX < -50) showNextImage();
      }
    }
    isDragging = false;
    initialDistance = 0; // 重置双指距离
  }
}

  modalImg?.addEventListener('touchstart', handleTouchStart);
modalImg?.addEventListener('touchmove', handleTouchMove);
modalImg?.addEventListener('touchend', handleTouchEnd);

modalImg?.addEventListener('dblclick', () => {
  currentScale = currentScale === 1 ? 2 : 1;
  modalImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
  modalImg.style.cursor = currentScale > 1 ? 'grab' : 'default';
});

// 鼠标拖动功能
function startDrag(e) {
  if (currentScale > 1 && e.button === 0) { // 仅左键拖动
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    modalImg.style.cursor = 'grabbing';
    e.preventDefault();
  }
}

function drag(e) {
  if (!isDragging) return;
  e.preventDefault();
  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;
  
  translateX += deltaX;
  translateY += deltaY;
  
  // 边界限制
  const maxTranslateX = (modalImg.offsetWidth * currentScale - modalImg.offsetWidth) / 2;
  const maxTranslateY = (modalImg.offsetHeight * currentScale - modalImg.offsetHeight) / 2;
  translateX = Math.max(-maxTranslateX, Math.min(translateX, maxTranslateX));
  translateY = Math.max(-maxTranslateY, Math.min(translateY, maxTranslateY));
  
  startX = e.clientX;
  startY = e.clientY;
  
  modalImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
}

function endDrag() {
  if (isDragging) {
    isDragging = false;
    modalImg.style.cursor = 'grab';
  }
}

modalImg?.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);
document.addEventListener('mouseleave', endDrag);

  // 键盘导航
  document.addEventListener('keydown', (e) => {
    if (!modal || modal.style.display !== 'block') return;
    
    if (e.key === 'ArrowLeft') showPrevImage();
    else if (e.key === 'ArrowRight') showNextImage();
    else if (e.key === 'Escape') closeModal();
  });

  // 最终渲染节点
  const renderDOM = document.querySelector('.photo-album');
  let prevMode = 1;

  // 获取内部 HTML，即每个图片的容器
  const getInnerHTML = (item, index) => {
    // 循环使用文案数组
    const caption = captions[index % captions.length];
    return `
<div class="photo-container">
  <img class="scenery" src="${item}" alt="scenery" data-index="${index}">
  <div class="photo-caption">${caption}</div>
</div>
`;
  };

  // func: 滚动查找元素并将 String 累计起来，最终渲染到 renderDOM 节点上
  const reduceDOM = (limit) => {
    // 生成 limit 条字符串
    const htmlString = Array.from(Array(limit), () => '<div class="photo-list">');
    // 遍历并将 <img/> 添加到每一列上
    imgInfo.forEach((item, index) => {
      const surplus = index % limit;
      if (surplus < limit) {
        htmlString[surplus] += getInnerHTML(item, index);
      }
    });
    // 结尾设置 String
    for (let i = 0; i < limit; i++) {
      htmlString[i] += '</div>';
    }
    // 渲染到 HTML 上。记得处理下数组，要不然会产生逗号
    renderDOM.innerHTML = htmlString.join('');

    // 绑定所有下载节点
    const downloads = document.querySelectorAll('.download');
    // 点击下载图片
    downloads.forEach((download, index) => {
    download.onclick = () => {
      // 发起 xhr 请求，下载对应图片
      const req = new XMLHttpRequest();
      const img = document.querySelectorAll('.scenery')[index];
      req.open('GET', img.src, true);
      req.responseType = 'blob';
      // 加载完毕之后，创建 <a> 标签，并点击该 <a> 标签进行下载，绕开同源问题
      req.onload = () => {
        const url = window.URL.createObjectURL(req.response);
        const a = document.createElement('a');
        a.href = url;
        a.download = '';
        a.click();
      };
      req.send();
    };
  });

  // 添加图片点击事件以打开模态框
  const images = document.querySelectorAll('.scenery');
  images.forEach(img => {
  const index = parseInt(img.dataset.index);
  img.onclick = () => openModal(index);
    // 图片加载完成后显示动画
    img.onload = () => {
      img.classList.add('loaded');
    };
    // 如果图片已经缓存，手动触发加载完成事件
    if (img.complete) {
      img.classList.add('loaded');
    }
  });

  // 滚动视差效果实现
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // 监听所有图片容器
  document.querySelectorAll('.photo-container').forEach(container => {
    observer.observe(container);
  });
  };

  // func: 重排节点
  const resize = () => {
    const width = window.innerWidth;
    // 超过 1000px 显示 3 列，否则显示 2 列
    if (width >= 1000 && prevMode !== 3) {
      prevMode = 3;
      reduceDOM(prevMode);
    } else if (width < 1000 && prevMode !== 2) {
      prevMode = 2;
      reduceDOM(prevMode);
    }
  };
  
  // 每次进来先执行一遍
  resize();

  // 每次拖拽，判断是否需要重新渲染
  window.onresize = () => {
    resize();
  };

};
