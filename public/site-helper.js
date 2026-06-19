/**
 * 页面辅助工具 – 提示卡片与关键词信息展示
 * 不依赖第三方库，适用于静态页面或简单 HTML 文档
 * 示例配置数据供参考使用，无网络请求与外部依赖
 */
(function () {
  "use strict";

  // 配置数据：网站主地址、关键词、提示卡片内容
  var CONFIG = {
    siteUrl: "https://webs-newball.com",
    keywords: ["新球体育", "体育资讯", "赛事动态", "新球", "运动社区"],
    tips: [
      "欢迎访问新球体育，获取最新体育资讯与赛事动态。",
      "本页面提供体育新闻、比赛结果及深度分析。",
      "关键词标签帮助您快速定位感兴趣的内容。",
      "请使用现代浏览器访问，以获得最佳浏览体验。",
      "所有内容仅供个人学习参考，请勿用于商业用途。"
    ]
  };

  // 生成一个卡片 DOM 元素，包含标题与说明
  function createTipCard(title, description) {
    var card = document.createElement("div");
    card.className = "tip-card";

    var titleEl = document.createElement("h3");
    titleEl.textContent = title;
    card.appendChild(titleEl);

    var descEl = document.createElement("p");
    descEl.textContent = description;
    card.appendChild(descEl);

    return card;
  }

  // 生成关键词徽章列表
  function createBadgeList(keywords) {
    var list = document.createElement("ul");
    list.className = "badge-list";

    keywords.forEach(function (word) {
      var item = document.createElement("li");
      item.className = "badge-item";
      item.textContent = word;
      list.appendChild(item);
    });

    return list;
  }

  // 生成访问说明区域，包含网站链接信息
  function createAccessNotice(url) {
    var notice = document.createElement("div");
    notice.className = "access-notice";

    var heading = document.createElement("h4");
    heading.textContent = "访问说明";
    notice.appendChild(heading);

    var paragraph = document.createElement("p");
    paragraph.innerHTML =
      '本站访问地址：<a href="' +
      url +
      '" target="_blank" rel="noopener noreferrer">' +
      url +
      "</a>。请确保网络连接正常，浏览器支持现代 JavaScript 特性。";
    notice.appendChild(paragraph);

    return notice;
  }

  // 将组件挂载到指定容器，若无则创建新容器并追加到 body
  function mountComponents(container) {
    var root = container || document.getElementById("site-helper-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "site-helper-root";
      document.body.appendChild(root);
    }

    // 清空容器（避免重复挂载）
    root.innerHTML = "";

    // 创建标题
    var title = document.createElement("h2");
    title.textContent = "新球体育 · 辅助信息";
    root.appendChild(title);

    // 提示卡片组
    var cardGroup = document.createElement("div");
    cardGroup.className = "tip-card-group";
    CONFIG.tips.forEach(function (tip, index) {
      var card = createTipCard("提示 " + (index + 1), tip);
      cardGroup.appendChild(card);
    });
    root.appendChild(cardGroup);

    // 关键词徽章
    var badgeSection = document.createElement("div");
    badgeSection.className = "badge-section";
    var badgeTitle = document.createElement("h3");
    badgeTitle.textContent = "关键词标签";
    badgeSection.appendChild(badgeTitle);
    badgeSection.appendChild(createBadgeList(CONFIG.keywords));
    root.appendChild(badgeSection);

    // 访问说明
    root.appendChild(createAccessNotice(CONFIG.siteUrl));
  }

  // 等待 DOM 加载完成后执行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      mountComponents();
    });
  } else {
    mountComponents();
  }

  // 暴露挂载函数，允许外部手动调用
  window.siteHelper = {
    mount: mountComponents,
    config: CONFIG
  };
})();