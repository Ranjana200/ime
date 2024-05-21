import React, { useState } from 'react';
import './App.css';

function ImeForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    productName: '',
    price: '',
    uq: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { uq } = formData;

    if (uq === '20') { // Replace with actual validation logic
      setIsSubmitted(true);
      // Handle successful submission (e.g., send data to backend)
      console.log('Complaint submitted:', formData); 
    } else {
      alert('Invalid UQ. Complaint cannot be raised.');
    }
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Product Details</h2>
          <div className="form-group">
            <label htmlFor="id">Id:</label>
            <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="uq">Unique Quantity (UQ):</label>
            <input type="text" id="uq" name="uq" value={formData.uq} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4"></textarea>
          </div>
          <div className="button">
            <button type="submit">Submit Complaint</button>
          </div>
        </form>
      ) : (
        <div>
          <h2>Complaint Details</h2>
          <p>ID: {formData.id}</p>
          <p>Product Name: {formData.productName}</p>
          <p>Price: {formData.price}</p>
          <p>UQ: {formData.uq}</p>
          <p>Description: {formData.description}</p>
        </div>
      )}
    </div>
  );
}

export default ImeForm;
