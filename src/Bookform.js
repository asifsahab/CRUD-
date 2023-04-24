import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Modal } from 'antd';


const Bookform = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [date, setDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = () => {
    // Perform form validation and call onSubmit with form data
    const formData = {
      name,
      fatherName,
      date: date ? date.format('YYYY-MM-DD') : null,
    };
    onSubmit(formData);
    setIsModalVisible(false);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="button-container">
        <Button type="primary" onClick={handleOpenModal}>
          Open Form
        </Button>
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCloseModal}
        onOk={handleSubmit}
        title="Booking Form"
        className="custom-modal"
        footer={null}
      >
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Father's Name">
            <Input value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker value={date} onChange={(date) => setDate(date)} />
          </Form.Item> 
          <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
        
        </Form>
      </Modal>
    </div>
  );
};

export default Bookform;
