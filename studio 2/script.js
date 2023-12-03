(function () {
    "use strict";
    console.log("reading js");
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    document.querySelectorAll('.no-url-change').forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default anchor behavior
      
          const targetId = this.getAttribute('href'); // Get the target ID (like "#img5")
          const targetElement = document.querySelector(targetId);
      
          if (targetElement) {
            // Scroll to the target element
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth' // Optional: for smooth scrolling
            });
          }
        });
    });
    
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    window.addEventListener('load', function () {
        'use strict';
        const sliderContent = document.querySelector('.a');
    
        
        const sliderWidth = sliderContent.offsetWidth;
    
       
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "b";
    
        document.querySelector('#slider').appendChild(cloned);
    
        let root = document.querySelector(':root');
    
     
        const endLeftPos = `-${sliderWidth}px`;    
        root.style.setProperty('--sliderwidth', endLeftPos);
    
       
        document.querySelector('#slider').classList.add("animate");
    });

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Get all elements with the class 'zoom-image'
    const images = document.querySelectorAll('.zoom-image');
    
    // Add event listeners for the hover effect to each image
    images.forEach((image) => {
      const imageContainer = image.parentElement;
      imageContainer.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX - imageContainer.getBoundingClientRect().left;
        const mouseY = e.clientY - imageContainer.getBoundingClientRect().top;
  
        const normalizedX = mouseX / imageContainer.offsetWidth;
        const normalizedY = mouseY / imageContainer.offsetHeight;
  
        image.style.transformOrigin = `${normalizedX * 100}% ${normalizedY * 100}%`;
      });
  
      imageContainer.addEventListener('mouseover', () => {
        image.style.transition = 'transform 1s, filter 0.5s ease-out';
        image.style.transform = 'scale(3)';
      });
  
      imageContainer.addEventListener('mouseout', () => {
        image.style.transition = 'transform 1s, filter 0.5s ease-out';
        image.style.transform = 'scale(1)';
      });
    });

  })();
  