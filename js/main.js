document.addEventListener('DOMContentLoaded', function() {
  // 设置当前年份
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // 关于我们弹窗功能
  const modal = document.getElementById("about-modal");
  const btn = document.getElementById("about-link");
  const span = document.getElementsByClassName("close")[0];
  
  // 点击链接打开弹窗
  btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
  }
  
  // 点击关闭按钮关闭弹窗
  span.onclick = function() {
    modal.style.display = "none";
  }

  // 愿景弹窗功能
  const visionModal = document.getElementById("vision-modal");
  const visionBtn = document.getElementById("vision-link");
  const visionClose = visionModal.getElementsByClassName("close")[0];
  
  // 点击链接打开弹窗
  visionBtn.onclick = function(e) {
    e.preventDefault();
    visionModal.style.display = "block";
  }
  
  // 点击关闭按钮关闭弹窗
  visionClose.onclick = function() {
    visionModal.style.display = "none";
  }

  // 价值观弹窗功能
  const valuesModal = document.getElementById("values-modal");
  const valuesBtn = document.getElementById("values-link");
  const valuesClose = valuesModal.getElementsByClassName("close")[0];
  
  // 点击链接打开弹窗
  valuesBtn.onclick = function(e) {
    e.preventDefault();
    valuesModal.style.display = "block";
  }
  
  // 点击关闭按钮关闭弹窗
  valuesClose.onclick = function() {
    valuesModal.style.display = "none";
  }

  // 使命弹窗功能
  const missionModal = document.getElementById("mission-modal");
  const missionBtn = document.getElementById("mission-link");
  const missionClose = missionModal.getElementsByClassName("close")[0];
  
  // 点击链接打开弹窗
  missionBtn.onclick = function(e) {
    e.preventDefault();
    missionModal.style.display = "block";
  }
  
  // 点击关闭按钮关闭弹窗
  missionClose.onclick = function() {
    missionModal.style.display = "none";
  }

  // 点击弹窗外部关闭弹窗
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }
});