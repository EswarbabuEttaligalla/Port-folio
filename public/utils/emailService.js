function sendEmail(formData) {
  // Primary: try Formspree endpoint. If it fails (network/CORS), fall back to mailto.
  const formspreeUrl = 'https://formspree.io/f/xzzaodae';

  // Build payload expected by Formspree
  const payload = {
    name: formData.name || '',
    email: formData.email || '',
    subject: formData.subject || 'Website Contact',
    message: formData.message || ''
  };

  // Try POSTing JSON to Formspree
  return fetch(formspreeUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(async (res) => {
      if (res.ok) {
        // Formspree accepted the submission
        return { success: true, provider: 'formspree' };
      }
      // Non-2xx: try to parse error and fall back
      let errBody = null;
      try { errBody = await res.json(); } catch (e) { errBody = await res.text(); }
      console.warn('Formspree returned non-OK:', res.status, errBody);
      return sendEmail_mailtoFallback(formData, { reason: 'formspree_non_ok', status: res.status, body: errBody });
    })
    .catch((err) => {
      console.warn('Formspree request failed, falling back to mailto:', err);
      return sendEmail_mailtoFallback(formData, { reason: 'network_or_cors', error: String(err) });
    });
}

function sendEmail_mailtoFallback(formData, meta) {
  try {
    const to = 'eswarbabuettaligalla@gmail.com';
    const subject = encodeURIComponent(formData.subject || 'Website Contact');
    const bodyLines = [];
    if (formData.name) bodyLines.push(`Name: ${formData.name}`);
    if (formData.email) bodyLines.push(`Email: ${formData.email}`);
    if (formData.message) bodyLines.push('', 'Message:', formData.message);
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    // Use location.href so mobile mail apps open as well
    window.location.href = mailto;
    return Promise.resolve({ success: true, fallback: 'mailto', meta });
  } catch (err) {
    console.error('sendEmail fallback error:', err);
    return Promise.resolve({ success: false, error: String(err), meta });
  }
}

window.sendEmail = sendEmail;
