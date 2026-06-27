const hamburgerMenu = document.querySelector(".hamburger");
const navi = document.querySelector(".hamburger_navi");
const overlay = document.querySelector(".overlay");
const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener("click", function () {
  // toggleを使用することで、hamburgerクラスとhamburger-navigationIDに
  // activeクラスが存在する場合は削除、存在しない場合を追加する処理を自動で行ってくれる
  hamburgerMenu.classList.toggle("active");
  navi.classList.toggle('active');
  overlay.classList.toggle("active");
});

// ナビゲーションを推したら閉じる
hamburgerMenuSections.forEach((hamburgerMenuSection) => {
  hamburgerMenuSection.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
    navi.classList.remove("active");
    overlay.classList.remove("active");
    })});




// フェードイン
// ふわっと表示させたい要素を取得
const fadeElements = document.querySelectorAll(".fadein");

// IntersectionObserverを作成
const observer = new IntersectionObserver(function(entries){

  entries.forEach(function(entry){

    // 要素が画面内に入ったら
    if(entry.isIntersecting){

      // showクラスを追加
      entry.target.classList.add("show");

    }

  });

});

// 各要素を監視
fadeElements.forEach(function(element){

  observer.observe(element);

});




// トップボタン
const pageTopBtn = document.querySelector('.page-top');
const footer = document.querySelector('.footer');

// window.addEventListener('scroll', function () {

//   const footerTop = footer.offsetTop;

//   if (window.scrollY > footerTop - 500) {
//     pageTopBtn.classList.add('show');
//   } else {
//     pageTopBtn.classList.remove('show');
//   }

// });

pageTopBtn.addEventListener('click', function () {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});


// accessが見えたら表示
const footerObserver = new IntersectionObserver(function (entries) {

  entries.forEach(function (entry) {

    if (entry.isIntersecting) {
      pageTopBtn.classList.add('show')
    }
    else {
      pageTopBtn.classList.remove('show');
    };
  });
}, {
  rootMargin: "0px 0px -200px 0px"
});

footerObserver.observe(footer);