import React from 'react';
import './BookingPage.css';

const BookingPage = () => {
  return (
    <div className="booking-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h2 className="section-title">Schedule a Service</h2>
        <div className="booking-container">
          <form className="booking-form animate-up">
            <div className="form-grid">
              <div className="form-group">
                <label>Service Type</label>
                <select required>
                  <option value="">Select Service</option>
                  <option value="cremation">Ecological Cremation</option>
                  <option value="traditional">Traditional Rites</option>
                  <option value="memorial">Memorial Service</option>
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Location</label>
                <select required>
                  <option value="">Select Location</option>
                  <option value="jubilee">Jubilee Hills</option>
                  <option value="panjagutta">Panjagutta</option>
                  <option value="begumpet">Begumpet</option>
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>Time Slot</label>
                <select required>
                  <option value="morning">Morning (6 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                  <option value="evening">Evening (6 PM - 10 PM)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <label>Additional Notes</label>
              <textarea placeholder="Special requests or questions" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Booking Request</button>
          </form>
          <div className="booking-sidebar">
            <div className="info-card">
              <h4>Important Instruction</h4>
              <p>Please ensure you have all necessary documentation from the hospital/authorities before the service.</p>
            </div>
            <div className="info-card">
              <h4>24/7 Helpline</h4>
              <p className="highlight">+91 985 255 5555</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
