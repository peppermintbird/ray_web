/* Contact page only. NOTE: this is a front-end simulation —
   it shows a success message but does NOT actually send an email.
   To make it real you'd point the form at a backend or a service
   like Formspree / EmailJS. */

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById("submitBtn");
        const originalBtnText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";
        submitBtn.innerHTML = `<span>Sending...</span>`;

        setTimeout(() => {
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
            submitBtn.innerHTML = originalBtnText;

            formStatus.className = "form-status success";
            formStatus.style.display = "flex";
            formStatus.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>Thank you! Your message has been sent successfully.</span>`;

            setTimeout(() => { formStatus.style.display = "none"; }, 6000);
        }, 800);
    });
});
