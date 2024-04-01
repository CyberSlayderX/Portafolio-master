const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

var typed = new Typed(".typing", {
    strings: ["","Desarrollador Full Stack", "Desarrollador de Base de Datos","Desarrollador de Aplicaciones Mobiles", "Diseñador Grafico","Diseñador UI/UX",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
          tab.addEventListener("click", () => {
              const target = document.querySelector(tab.dataset.target)

              tabContent.forEach(tabContents => {
                  tabContents.classList.remove('skills__active')
              })

              target.classList.add('skills__active')


              tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
          })
      })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)


function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modelBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else
    {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
  })
}

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


/*===============video play =================*/
        document.addEventListener('DOMContentLoaded', function() {
        var video = document.getElementById('myVideo');
        var playButton = document.getElementById('playButton');

        function startVideo() {
            video.play();
        }
        playButton.addEventListener('click', startVideo);
        });

/*---------------------------------3d*/
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#page3d"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#page3d", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#page3d").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./img/male0001.png
       ./img//male0002.png
       ./img/male0003.png
       ./img/male0004.png
       ./img/male0005.png
       ./img/male0007.png
       ./img/male0006.png
       ./img/male0008.png
       ./img/male0009.png
       ./img/male0010.png
       ./img/male0011.png
       ./img/male0012.png
       ./img/male0013.png
       ./img/male0014.png
       ./img/male0015.png
       ./img/male0016.png
       ./img/male0017.png
       ./img/male0018.png
       ./img/male0019.png
       ./img/male0020.png
       ./img/male0021.png
       ./img/male0022.png
       ./img/male0023.png
       ./img/male0024.png
       ./img/male0025.png
       ./img/male0026.png
       ./img/male0027.png
       ./img/male0028.png
       ./img/male0029.png
       ./img/male0030.png
       ./img/male0031.png
       ./img/male0032.png
       ./img/male0033.png
       ./img/male0034.png
       ./img/male0035.png
       ./img/male0036.png
       ./img/male0037.png
       ./img/male0038.png
       ./img/male0039.png
       ./img/male0040.png
       ./img/male0041.png
       ./img/male0042.png
       ./img/male0043.png
       ./img/male0044.png
       ./img/male0045.png
       ./img/male0046.png
       ./img/male0047.png
       ./img/male0048.png
       ./img/male0049.png
       ./img/male0050.png
       ./img/male0051.png
       ./img/male0052.png
       ./img/male0053.png
       ./img/male0054.png
       ./img/male0055.png
       ./img/male0056.png
       ./img/male0057.png
       ./img/male0058.png
       ./img/male0059.png
       ./img/male0060.png
       ./img/male0061.png
       ./img/male0062.png
       ./img/male0063.png
       ./img/male0064.png
       ./img/male0065.png
       ./img/male0066.png
       ./img/male0067.png
       ./img/male0068.png
       ./img/male0069.png
       ./img/male0070.png
       ./img/male0071.png
       ./img/male0072.png
       ./img/male0073.png
       ./img/male0074.png
       ./img/male0075.png
       ./img/male0076.png
       ./img/male0077.png
       ./img/male0078.png
       ./img/male0079.png
       ./img/male0080.png
       ./img/male0081.png
       ./img/male0082.png
       ./img/male0083.png
       ./img/male0084.png
       ./img/male0085.png
       ./img/male0086.png
       ./img/male0087.png
       ./img/male0088.png
       ./img/male0089.png
       ./img/male0090.png
       ./img/male0091.png
       ./img/male0092.png
       ./img/male0093.png
       ./img/male0094.png
       ./img/male0095.png
       ./img/male0096.png
       ./img/male0097.png
       ./img/male0098.png
       ./img/male0099.png
       ./img/male0100.png
       ./img/male0101.png
       ./img/male0102.png
       ./img/male0103.png
       ./img/male0104.png
       ./img/male0105.png
       ./img/male0106.png
       ./img/male0107.png
       ./img/male0108.png
       ./img/male0109.png
       ./img/male0110.png
       ./img/male0111.png
       ./img/male0112.png
       ./img/male0113.png
       ./img/male0114.png
       ./img/male0115.png
       ./img/male0116.png
       ./img/male0117.png
       ./img/male0118.png
       ./img/male0119.png
       ./img/male0120.png
       ./img/male0121.png
       ./img/male0122.png
       ./img/male0123.png
       ./img/male0124.png
       ./img/male0125.png
       ./img/male0126.png
       ./img/male0127.png
       ./img/male0128.png
       ./img/male0129.png
       ./img/male0130.png
       ./img/male0131.png
       ./img/male0132.png
       ./img/male0133.png
       ./img/male0134.png
       ./img/male0135.png
       ./img/male0136.png
       ./img/male0137.png
       ./img/male0138.png
       ./img/male0139.png
       ./img/male0140.png
       ./img/male0141.png
       ./img/male0142.png
       ./img/male0143.png
       ./img/male0144.png
       ./img/male0145.png
       ./img/male0146.png
       ./img/male0147.png
       ./img/male0148.png
       ./img/male0149.png
       ./img/male0150.png
       ./img/male0151.png
       ./img/male0152.png
       ./img/male0153.png
       ./img/male0154.png
       ./img/male0155.png
       ./img/male0156.png
       ./img/male0157.png
       ./img/male0158.png
       ./img/male0159.png
       ./img/male0160.png
       ./img/male0161.png
       ./img/male0162.png
       ./img/male0163.png
       ./img/male0164.png
       ./img/male0165.png
       ./img/male0166.png
       ./img/male0167.png
       ./img/male0168.png
       ./img/male0169.png
       ./img/male0170.png
       ./img/male0171.png
       ./img/male0172.png
       ./img/male0173.png
       ./img/male0174.png
       ./img/male0175.png
       ./img/male0176.png
       ./img/male0177.png
       ./img/male0178.png
       ./img/male0179.png
       ./img/male0180.png
       ./img/male0181.png
       ./img/male0182.png
       ./img/male0183.png
       ./img/male0184.png
       ./img/male0185.png
       ./img/male0186.png
       ./img/male0187.png
       ./img/male0188.png
       ./img/male0189.png
       ./img/male0190.png
       ./img/male0191.png
       ./img/male0192.png
       ./img/male0193.png
       ./img/male0194.png
       ./img/male0195.png
       ./img/male0196.png
       ./img/male0197.png
       ./img/male0198.png
       ./img/male0199.png
       ./img/male0200.png
       ./img/male0201.png
       ./img/male0202.png
       ./img/male0203.png
       ./img/male0204.png
       ./img/male0205.png
       ./img/male0206.png
       ./img/male0207.png
       ./img/male0208.png
       ./img/male0209.png
       ./img/male0210.png
       ./img/male0211.png
       ./img/male0212.png
       ./img/male0213.png
       ./img/male0214.png
       ./img/male0215.png
       ./img/male0216.png
       ./img/male0217.png
       ./img/male0218.png
       ./img/male0219.png
       ./img/male0220.png
       ./img/male0221.png
       ./img/male0222.png
       ./img/male0223.png
       ./img/male0224.png
       ./img/male0225.png
       ./img/male0226.png
       ./img/male0227.png
       ./img/male0228.png
       ./img/male0229.png
       ./img/male0230.png
       ./img/male0231.png
       ./img/male0232.png
       ./img/male0233.png
       ./img/male0234.png
       ./img/male0235.png
       ./img/male0236.png
       ./img/male0237.png
       ./img/male0238.png
       ./img/male0239.png
       ./img/male0240.png
       ./img/male0241.png
       ./img/male0242.png
       ./img/male0243.png
       ./img/male0244.png
       ./img/male0245.png
       ./img/male0246.png
       ./img/male0247.png
       ./img/male0248.png
       ./img/male0249.png
       ./img/male0250.png
       ./img/male0251.png
       ./img/male0252.png
       ./img/male0253.png
       ./img/male0254.png
       ./img/male0255.png
       ./img/male0256.png
       ./img/male0257.png
       ./img/male0258.png
       ./img/male0259.png
       ./img/male0260.png
       ./img/male0261.png
       ./img/male0262.png
       ./img/male0263.png
       ./img/male0264.png
       ./img/male0265.png
       ./img/male0266.png
       ./img/male0267.png
       ./img/male0268.png
       ./img/male0269.png
       ./img/male0270.png
       ./img/male0271.png
       ./img/male0272.png
       ./img/male0273.png
       ./img/male0274.png
       ./img/male0275.png
       ./img/male0276.png
       ./img/male0277.png
       ./img/male0278.png
       ./img/male0279.png
       ./img/male0280.png
       ./img/male0281.png
       ./img/male0282.png
       ./img/male0283.png
       ./img/male0284.png
       ./img/male0285.png
       ./img/male0286.png
       ./img/male0287.png
       ./img/male0288.png
       ./img/male0289.png
       ./img/male0290.png
       ./img/male0291.png
       ./img/male0292.png
       ./img/male0293.png
       ./img/male0294.png
       ./img/male0295.png
       ./img/male0296.png
       ./img/male0297.png
       ./img/male0298.png
       ./img/male0299.png
       ./img/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#page3d`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#page3d`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#page3d`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#page3d`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#page3d`
    }
  })
/*--------------------------------mensaj*/
function mostrarMensaje() {
    var mensaje = "¡Envío exitoso!";
    var alertElement = document.createElement("div");
    alertElement.className = "animate__animated animate__swing";
    alertElement.style.background = "lightgreen";
    alertElement.style.color = "black";
    alertElement.style.padding = "10px";
    alertElement.style.position = "fixed";
    alertElement.style.top = "50%";
    alertElement.style.left = "50%";
    alertElement.style.transform = "translate(-50%, -50%)";
    alertElement.textContent = mensaje;
    document.body.appendChild(alertElement);

    setTimeout(function() {
        alertElement.remove();
        document.getElementById("contactForm").reset(); 
    }, 3000);
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    mostrarMensaje();
});  