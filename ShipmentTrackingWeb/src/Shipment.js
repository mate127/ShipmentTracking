import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/shipments';

const Shipments = () => {
  const [shipments, setShipments] = useState([]);
  const [newShipment, setNewShipment] = useState({
    id: '',
    carrier: '',
    trackingCode: '',
    carrierTrackingUrl: '',
    trackingDate: '',
    status: '',
    statusChangeDate: '',
    statusChangeReason: '',
    weight: 0,
    estimatedDeliveryDate: '',
    addressFrom: '',
    addressTo: '',
    order: '',
    relatedCustomer: '',
    createDate: ''
  });

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setShipments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the shipments!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewShipment({ ...newShipment, [name]: value });
  };

  const handleAddShipment = () => {
    axios.post(apiUrl, newShipment)
      .then(response => {
        setShipments([...shipments, response.data]);
      })
      .catch(error => {
        console.error('There was an error adding the shipment!', error);
      });
  };

  const handleUpdateShipment = (id) => {
    axios.put(`${apiUrl}/${id}`, newShipment)
      .then(response => {
        setShipments(shipments.map(shipment => (shipment.id === id ? response.data : shipment)));
      })
      .catch(error => {
        console.error('There was an error updating the shipment!', error);
      });
  };

  const handleDeleteShipment = (id) => {
    axios.delete(`${apiUrl}/${id}`)
      .then(() => {
        setShipments(shipments.filter(shipment => shipment.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the shipment!', error);
      });
  };

  return (
    <div>
      <h1>Shipments</h1>
      <div>
        <h2>Add New Shipment</h2>
        <input type="text" name="id" placeholder="ID" value={newShipment.id} onChange={handleInputChange} />
        <input type="text" name="carrier" placeholder="Carrier" value={newShipment.carrier} onChange={handleInputChange} />
        <input type="text" name="trackingCode" placeholder="Tracking Code" value={newShipment.trackingCode} onChange={handleInputChange} />
        <input type="text" name="carrierTrackingUrl" placeholder="Carrier Tracking URL" value={newShipment.carrierTrackingUrl} onChange={handleInputChange} />
        <input type="date" name="trackingDate" placeholder="Tracking Date" value={newShipment.trackingDate} onChange={handleInputChange} />
        <input type="text" name="status" placeholder="Status" value={newShipment.status} onChange={handleInputChange} />
        <input type="date" name="statusChangeDate" placeholder="Status Change Date" value={newShipment.statusChangeDate} onChange={handleInputChange} />
        <input type="text" name="statusChangeReason" placeholder="Status Change Reason" value={newShipment.statusChangeReason} onChange={handleInputChange} />
        <input type="number" name="weight" placeholder="Weight" value={newShipment.weight} onChange={handleInputChange} />
        <input type="date" name="estimatedDeliveryDate" placeholder="Estimated Delivery Date" value={newShipment.estimatedDeliveryDate} onChange={handleInputChange} />
        <input type="text" name="addressFrom" placeholder="Address From" value={newShipment.addressFrom} onChange={handleInputChange} />
        <input type="text" name="addressTo" placeholder="Address To" value={newShipment.addressTo} onChange={handleInputChange} />
        <input type="text" name="order" placeholder="Order" value={newShipment.order} onChange={handleInputChange} />
        <input type="text" name="relatedCustomer" placeholder="Related Customer" value={newShipment.relatedCustomer} onChange={handleInputChange} />
        <input type="date" name="createDate" placeholder="Create Date" value={newShipment.createDate} onChange={handleInputChange} />
        <button onClick={handleAddShipment}>Add Shipment</button>
      </div>
      <div>
        <h2>Shipments List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Carrier</th>
              <th>Tracking Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map(shipment => (
              <tr key={shipment.id}>
                <td>{shipment.id}</td>
                <td>{shipment.carrier}</td>
                <td>{shipment.trackingCode}</td>
                <td>
                  <button onClick={() => handleUpdateShipment(shipment.id)}>Update</button>
                  <button onClick={() => handleDeleteShipment(shipment.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shipments;