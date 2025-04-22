import React, { useState } from 'react';
import './OPSPForm.css';

const OPSPForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyUrl: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Structure the data to match what the Google Script expects
      // The script expects an object where we can access the values with Object.values()
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const formattedTimestamp = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;


      const formattedData = {
        formData: {
          timestamp: formattedTimestamp,
          companyName: formData.companyName,
          companyUrl: formData.companyUrl,
          email: formData.email,
        }
      };

      // Replace this URL with your Google Apps Script web app URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzgPHMHBcV2PqbYV4hyGckC39csTzeXFn58gZVSNEFd8IgxdmUJf_VojpM7dmVbHmFP/exec';

      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // This is important for CORS issues with Google Scripts
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData)
      });

      console.log('response', response)

      // Note: When using mode: 'no-cors', the response will be "opaque"
      // and we cannot actually check response.ok
      // Instead, we assume success if the request doesn't throw an error
      setMessage('Success! Data has been submitted.');
      setFormData({ companyName: '', companyUrl: '', email: '' });

      // Optional: Redirect to success page
      // window.location.href = '/submission';
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="opsp-form-container">
      {/* Header Block */}
      <div className="form-header">
        <h1>OPSP Generator by CEOITBOX</h1>
        <p>Your AI-powered tool for crafting essential one-page business strategies.</p>
      </div>

      {message && (
        <div className={`message ${message.includes('Success') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyUrl">
            Company URL
          </label>
          <input
            type="url"
            id="companyUrl"
            name="companyUrl"
            value={formData.companyUrl}
            onChange={handleChange}
            required
            placeholder="https://example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Your mail id
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="abc@example.com"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Footer */}
      <div className="form-footer">
        <div className="footer-content">
          <div className="footer-left">
            <h2>MBAI - Master Business through AI</h2>
            <p>Digital Transformation Program | CEOITBOX</p>
            <p className="italic">Tailored for Indian business owners seeking to transform and scale operations with AI</p>
          </div>

          <div className="footer-right">
            <p className="bold">For more details:</p>
            <p>Click: <a href="https://cbxit.in/callback">cbxit.in/callback</a></p>
            <p>Call: 8766362949 | 98111 48346</p>
            <p>Email: <a href="mailto:siddharth@ceoitbox.in">siddharth@ceoitbox.in</a></p>
            <p>Website: <a href="https://www.masterbusiness.in">www.masterbusiness.in</a></p>
          </div>
        </div>

        <div className="copyright">
          <p>© 2025 CEOITBOX | <a href="https://www.MasterBusiness.in">www.MasterBusiness.in</a></p>
        </div>
      </div>
    </div>
  );
};

export default OPSPForm;