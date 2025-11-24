document.addEventListener('DOMContentLoaded', function() {
  // 设置当前年份
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // 弹窗数据
  const modalsConfig = [
    { modalId: "about-modal", btnId: "about-link" },
    { modalId: "vision-modal", btnId: "vision-link" },
    { modalId: "values-modal", btnId: "values-link" },
    { modalId: "mission-modal", btnId: "mission-link" },
    { modalId: "privacy-modal", btnId: "privacy-link" },
    { modalId: "terms-modal", btnId: "terms-link" },
    { modalId: "sitemap-modal", btnId: "sitemap-link" }
  ];

  // 初始化所有弹窗
  modalsConfig.forEach(config => {
    const modal = document.getElementById(config.modalId);
    const btn = document.getElementById(config.btnId);
    const closeBtn = modal.querySelector(".close");
    
    // 点击链接打开弹窗
    btn.onclick = function(e) {
      e.preventDefault();
      modal.style.display = "block";
      // 聚焦到弹窗以支持键盘事件
      modal.focus();
    }
    
    // 点击关闭按钮关闭弹窗
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  });

  // 点击弹窗外部关闭弹窗
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  // ESC键关闭弹窗
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        modal.style.display = "none";
      });
    }
  };
});