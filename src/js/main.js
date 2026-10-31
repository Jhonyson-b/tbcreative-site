// Substitua pelo link oficial do checkout da Kiwify.
const CHECKOUT_KIWIFY = "";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".missing").forEach((fallback) => {
  const image = fallback.previousElementSibling;

  if (!(image instanceof HTMLImageElement)) {
    return;
  }

  const showFallback = () => {
    image.classList.add("is-hidden");
    fallback.classList.add("is-visible");
  };

  image.addEventListener("error", showFallback);

  if (image.complete && image.naturalWidth === 0) {
    showFallback();
  }
});

const checkout = CHECKOUT_KIWIFY.trim();
const checkoutLinks = document.querySelectorAll(".checkout-link");

if (checkout && /^https:\/\//i.test(checkout)) {
  checkoutLinks.forEach((link) => {
    link.href = checkout;
    link.rel = "noopener noreferrer";
  });
} else {
  checkoutLinks.forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const notice = document.getElementById("notice");
      notice.classList.add("show");
      notice.scrollIntoView({ behavior: "smooth", block: "center" });
    }),
  );
}
