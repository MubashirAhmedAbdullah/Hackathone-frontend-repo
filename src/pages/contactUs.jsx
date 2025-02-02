import React, { useState } from 'react';
import { Typography, Divider, Card, Row, Col, Button, Modal, Input, Form } from 'antd';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="p-12 bg-gray-50 min-h-screen flex flex-col items-center text-center">
      {/* Banner Section */}
      <div className="w-full bg-cover bg-center py-32 mb-16" style={{ backgroundImage: "url('https://via.placeholder.com/1500x500')" }}>
        <Title level={1} className="text-white font-normal">Contact Us</Title>
        <Paragraph className="text-white text-lg">
          Get in touch with us for any assistance, inquiries, or support. We are here to help you!
        </Paragraph>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-6xl w-full mb-12">
        <Row gutter={[24, 24]} justify="center">
          {/* Contact Card 1 */}
          <Col xs={24} sm={12} lg={8}>
            <Card
              bordered={false}
              hoverable
              className="shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out text-left rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-4xl text-[#0072BB] mr-4" />
                <div>
                  <Title level={3} className="text-[#0072BB]">Head Office</Title>
                  <Paragraph className="text-gray-700">
                    A-25, Bahadurabad Chowrangi, Karachi, Pakistan
                  </Paragraph>
                </div>
              </div>
            </Card>
          </Col>

          {/* Contact Card 2 */}
          <Col xs={24} sm={12} lg={8}>
            <Card
              bordered={false}
              hoverable
              className="shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out text-left rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-4xl text-[#0072BB] mr-4" />
                <div>
                  <Title level={3} className="text-[#0072BB]">Phone</Title>
                  <Paragraph className="text-gray-700">
                    +92-213-4130786-90
                  </Paragraph>
                  <Paragraph className="text-gray-700">
                    Helpline: 111-729-526
                  </Paragraph>
                </div>
              </div>
            </Card>
          </Col>

          {/* Contact Card 3 */}
          <Col xs={24} sm={12} lg={8}>
            <Card
              bordered={false}
              hoverable
              className="shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out text-left rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-4xl text-[#0072BB] mr-4" />
                <div>
                  <Title level={3} className="text-[#0072BB]">Email</Title>
                  <Paragraph className="text-gray-700">
                    info@saylaniwelfare.com
                  </Paragraph>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Google Map Section */}
      <div className="w-full mb-12">
        <iframe
          title="Saylani Welfare Trust Head Office Location"
          src="https://www.google.com/maps/embed/v1/place?q=Saylani+Welfare+Trust+Karachi&key=YOUR_GOOGLE_MAPS_API_KEY"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-2xl mb-12">
        <Card
          title={<Title level={2} className="text-[#0072BB]">Get In Touch</Title>}
          bordered={false}
          className="shadow-lg rounded-lg"
        >
          <Form layout="vertical">
            <Form.Item label="Your Name">
              <Input 
                placeholder="Enter your name" 
                className="rounded-lg shadow-md border-gray-300 focus:border-[#0072BB] focus:ring-2 focus:ring-[#0072BB]" 
              />
            </Form.Item>
            <Form.Item label="Your Email">
              <Input 
                placeholder="Enter your email" 
                className="rounded-lg shadow-md border-gray-300 focus:border-[#0072BB] focus:ring-2 focus:ring-[#0072BB]" 
              />
            </Form.Item>
            <Form.Item label="Your Message">
              <Input.TextArea 
                placeholder="Enter your message" 
                rows={4}
                className="rounded-lg shadow-md border-gray-300 focus:border-[#0072BB] focus:ring-2 focus:ring-[#0072BB]" 
              />
            </Form.Item>
            <Button 
              type="primary" 
              block 
              onClick={showModal} 
              className="rounded-lg shadow-lg bg-[#0072BB] hover:bg-[#005f8c] transition duration-300 ease-in-out"
            >
              Send Message
            </Button>
          </Form>
        </Card>
      </div>

      {/* Modal for Sending Message */}
      <Modal
        title="Confirm Message"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Send"
        cancelText="Cancel"
        className="rounded-lg"
      >
        <p>Your message has been sent successfully!</p>
      </Modal>
    </div>
  );
};

export default ContactUs;
