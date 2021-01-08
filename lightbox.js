(async () => {
  try {
    // Check session storage
    const sessionStorage = window.sessionStorage;
    const locationLightboxSeen = sessionStorage.getItem('locationLightboxSeen');
    // TODO Uncomment
    // if (locationLightboxSeen === 'true') break;
    
    // Find user location
    const res = await fetch('http://localhost:5000/');
    const data = await res.json();
    const country = data.geo.country;

    // TODO Only continue from here if location is incorrect
    // if(country === document.documentElement.lang) break;

    // TODO Logic
    // Prepare HTML (change text, links and images based on location)
    const siteName = 'Regatta';
    const sitelocation = 'UK';
    const userLocation = 'Ireland';
    const userLanguage = 'Irish';
    const redirectUrl = 'https://www.regatta.ie';
    const flagSrc = 'https://global-cdn.regatta.com/assets/icon-pack/flags/uk.svg';

    const lightboxHTML = `
    <div id="locationLightbox">
      <div class="locationContainer">
        <div id="closeLocationBox" class="closeLocationBox">X</div>
        <div class="locationTitle"> Sorry, we don't ship to your location! </div>
        <div class="locationSubtitle">We do not ship to your location from our ${sitelocation} site. Please visit our ${userLanguage} site to place an order.</div>
    
        <div class="locationFlags">
          <a href="${redirectUrl}">
            <img src="${flagSrc}">
            <div>Continue to our ${siteName} ${userLocation} Site &gt;</div>
          </a>
        </div>
        <div>Or</div>
        <a class="closeLocationBox">Or continue browsing this site</a>
      </div>
    </div>
    `;

    // Insert HTML
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    //  Close lightbox on clicking cross or clicking continue browsing site
    const closeElements = document.querySelectorAll('.closeLocationBox');
    [...closeElements].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('locationLightbox').style.display = 'none';
        sessionStorage.setItem('locationLightboxSeen', 'true');
      });
    });

  } catch (error) {
    console.error(error);
  }
})();
