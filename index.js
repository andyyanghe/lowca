window.onload = () => {
  let imgInfo = [
    'http://m.qpic.cn/psc?/V50NpBhL1VK1231fuzPX4P91lH1Xswv2/TmEUgtj9EK6.7V8ajmQrEBO8BO8XK*yJCTr4w.lg9XQ.Ap13hTwGd*iy4xLPN8CZuxjBUlb1QteRvH0Wacu9oB9GqNKFUpiT4fIX*9qb6E8!/b&bo=YAlABmAJQAYBJwA!&rf=viewer_4&t=5',
    'https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/13975295/pexels-photo-13975295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ];
  // 假装我有很多图片
  for (let i = 0; i < 4; i++) {
    imgInfo = [...imgInfo, ...imgInfo];
  }

  // 图片预览功能
  let currentIndex = 0;
  const modal = document.getElementById('preview-modal');
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  function openModal(index) {
    currentIndex = index;
    modalImg.src = imgInfo[index];
    modal.style.display = 'block';
    modalImg.style.transform = 'scale(1)';
    currentScale = 1;
  }

  function closeModal() {
    modal.style.display = 'none';
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
  let currentScale = 1;
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
    } else if (e.touches.length === 2) {
      initialDistance = getDistance(e.touches[0], e.touches[1]);
      initialScale = currentScale;
    }
  }

  function handleTouchMove(e) {
    if (e.touches.length === 2) {
      e.preventDefault();
      const currentDistance = getDistance(e.touches[0], e.touches[1]);
      currentScale = (currentDistance / initialDistance) * initialScale;
      modalImg.style.transform = `scale(${currentScale})`;
    }
  }

  function handleTouchEnd(e) {
    if (e.touches.length === 0) {
      touchEndX = e.changedTouches[0].clientX;
      touchEndY = e.changedTouches[0].clientY;
      
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 50) showPrevImage();
        else if (diffX < -50) showNextImage();
      }
    }
  }

  modalImg?.addEventListener('touchstart', handleTouchStart);
  modalImg?.addEventListener('touchmove', handleTouchMove);
  modalImg?.addEventListener('touchend', handleTouchEnd);

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
  const getInnerHTML = (item) => {
    return `
<div class="photo-container">
  <img class="scenery" src="${item}" alt="scenery">
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
        htmlString[surplus] += getInnerHTML(item);
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
  images.forEach((img, index) => {
    img.onclick = () => openModal(index);
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
