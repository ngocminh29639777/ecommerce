import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  //bgcolor: 'background.paper',
  backgroundColor: '#fff',
  outline: "none", // Đã sửa lỗi cú pháp
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open }) => { 
  // Sử dụng destructuring
  const location=useLocation();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          {location.pathname=== "/login" ? <LoginForm/> :  <RegisterForm/> }
        
       

        </Box>
      </Modal>
    </div>
  );
}

export default AuthModal;