(function () {
    const MIN_WIDTH = 53 * 16; // 53rem converted to pixels (1rem = 16px)
  
    function adjustViewport() {
      const screenWidth = window.innerWidth;
      const metaViewport = document.querySelector("meta[name=viewport]");
      
      if (screenWidth < MIN_WIDTH) {
        const scale = screenWidth / MIN_WIDTH;
        metaViewport.setAttribute(
          "content",
          `width=${MIN_WIDTH}, initial-scale=${scale}`
        );
      } else {
        metaViewport.setAttribute(
          "content",
          `width=device-width, initial-scale=1`
        );
      }
    }
  
    // Call adjustViewport on page load
    adjustViewport();
  
    // Optional: Re-adjust on window resize
    window.addEventListener("resize", adjustViewport);
  })();
  
  console.log("Fix min-width viewport script loaded");
