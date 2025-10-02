import React, { useState } from 'react';
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length > 0) input = '+88 ' + input;
    setFormData((prev) => ({ ...prev, phone: input }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submit logic here (e.g. API call)
  };

  return (
    <>
        <section className="my-5">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Left Side */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="row my-3">
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="fName">First Name</label>
                        <div className="input-group mt-2">
                          <input
                            type="text"
                            className="form-control"
                            id="fName"
                            placeholder="Enter your FirstName"
                            required
                            value={formData.fName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="lName">Last Name</label>
                        <div className="input-group mt-2">
                          <input
                            type="text"
                            className="form-control"
                            id="lName"
                            placeholder="Enter your LastName"
                            required
                            value={formData.lName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="email">Email Address</label>
                    <div className="input-group mt-2">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="someone@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="phone">Cell Phone</label>
                    <div className="input-group mt-2">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Enter your phone No"
                        maxLength="19"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="topic">Subject</label>
                    <div className="input-group mt-2">
                      <input
                        type="text"
                        className="form-control"
                        id="topic"
                        placeholder="Enter Your Subject"
                        value={formData.topic}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="form-group my-3">
                    <label htmlFor="message">Message</label>
                    <div className="input-group mt-2">
                      <textarea
                        className="form-control"
                        id="message"
                        rows="9"
                        placeholder="Type your message here ..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="btn-group d-grid mt-4">
                   <button type="submit" className="btn btn-outline-tomato">

                      <i className="fas fa-envelope"></i>
                      <span className="ps-2">Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
