var tl_product_title = gsap.timeline();
var tl_product_image = gsap.timeline();
var tl_product_ingredient = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

const title = document.getElementById("animated-title");
const fullText = "Anti Stretch Mark Body Butter";
const shortText = "A.S.M.B.B.";

tl_product_title.to(
  {},
  {
    scrollTrigger: {
      trigger: ".product-title",
      start: "top top",
      end: "50% top",
      scrub: 5,
      onUpdate: (self) => {
        const progress = self.progress;
        const textLength = Math.round(progress * fullText.length);
        const visibleText = fullText.substring(0, textLength) || shortText;
        title.textContent = visibleText;

        if (visibleText === shortText || visibleText.length < fullText.length) {
          title.style.fontSize = "15vh";
          title.style.opacity = 1;
        } else {
          title.style.fontSize = "40px";
          title.style.opacity = 1;
        }
      },
    },
  }
);






tl_product_image.to(title, {
  top: "10%",
  ease: "power1.out",
 
  scrollTrigger: {
    trigger: ".product-image img",
    // markers: true,
    start: "top 95%",
    end: "top 65%",
    scrub: 1,
  },

});

// Image animation

tl_product_image.to(".product-image img", {
  scale: 700,
  rotate: 0,
  scrollTrigger: {
    trigger: ".product-image img",
    // markers: true,
    start: "top 95%",
    end: "top 65%",
    scrub: 1,
  },
});

tl_product_image.to(title, {
  opacity: 0,
  scrollTrigger: {
    trigger: ".product-image img",
    // markers: true,
    start: "top 55%",
    end: "top 50%",
    scrub: 1,
  },
});

// List animation

tl_product_image.from(".benefits-product li", {
  y: 10,
  duration: 0.5,
  opacity: 0,
  delay: -1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".benefits-product li",
    // markers: true,
    start: "top 55%",
    end: "top 50%",
    scrub: 1,
  },
});




// Ingredient Animation

tl_product_ingredient.from(".ingrdient-card", {
  y: 10,
  duration: 0.5,
  opacity: 0,
  delay: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".ingrdient-card",
    // markers: true,
    start: "top 65%",
    end: "top 50%",
    scrub: 1,
  },
});




gsap.to(".pre-order_left",{
  x: 500,
  duration: 5,
})