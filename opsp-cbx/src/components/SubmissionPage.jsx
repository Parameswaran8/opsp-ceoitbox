import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SubmissionPage.css';

const SubmissionPage = () => {
  const location = useLocation();
  const companyName = location.state?.companyName || 'your company';

  return (
    <div className="submission-container">
      <div className="submission-content">
        <div className="success-icon">✓</div>
        <h1>Submission Successful!</h1>
        <p>Thank you for submitting information for <strong>{companyName}</strong>.</p>
        <p>Your OPSP (One-Page Strategic Plan) will be generated shortly.</p>

        <div className="next-steps">
          <h2>Next Steps:</h2>
          <p>Our team will review your information and contact you with the results.</p>
          <p>Please check your email for updates on your OPSP generation process.</p>
        </div>

        <Link to="/" className="back-button">Return to Form</Link>
      </div>

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

export default SubmissionPage;