const app = document.getElementById('app');
const path = window.location.pathname.replace(/\/+$/, '') || '/';

function visual() {
  return `<div class="visual" aria-hidden="true"><div class="orbit"></div><div class="orbit two"></div><div class="globe"></div><div class="mascot">✦</div></div>`;
}

function home() {
  app.innerHTML = `<section class="verify">
    <div>
      <div class="loader-ring"></div>
      <div class="eyebrow">CERTIFICATE VERIFICATION SYSTEM</div>
      <h1>Preparing Your <span>Verification...</span></h1>
      <p>We’re securely loading the certificate information from the <strong>Bluemantle Institute of Technology</strong> verification system.</p>
      <p>Please wait while we retrieve and verify the latest certificate details.</p>
      <div class="id">SECURE • VERIFIED • TRUSTED</div>
    </div>
  </section>${visual()}`;
}

function verification(id) {
  app.innerHTML = `<section class="verify">
    <div>
      <div class="loader-ring"></div>
      <div class="eyebrow">BLUEMANTLE INSTITUTE OF TECHNOLOGY</div>
      <h1>Verifying <span>Certificate...</span></h1>
      <p>We’re securely retrieving the certificate information and checking the verification record.</p>
      <div class="id">CERTIFICATE ID: ${id}</div>
    </div>
  </section>${visual()}`;
}

function notFound() {
  app.innerHTML = `<section class="hero">
    <div class="eyebrow">BLUEMANTLE INSTITUTE OF TECHNOLOGY</div>
    <h1 class="big404">4<span class="zero">0</span>4</h1>
    <h2 class="title">Page <span>Not Found!</span></h2>
    <p class="desc">The page you’re looking for doesn’t exist or has been moved. Let’s get you back to the right place.</p>
    <div class="actions">
      <a class="btn primary" href="/verify/">➜ &nbsp; Go to Verification Page</a>
      <a class="btn" href="/">⌂ &nbsp; Back to Home</a>
    </div>
    <div class="or"><span>OR</span></div>
    <a class="visit" href="https://bluemantletechnology.com/" target="_blank" rel="noopener">↗ &nbsp; Visit bluemantletechnology.com</a>
    <div class="quote"><b>❞</b> Education today.<br/>A stronger tomorrow.</div>
  </section>${visual()}`;
}

if (path === '/') home();
else if (path.startsWith('/verify/')) verification(path.split('/')[2] || '');
else notFound();
