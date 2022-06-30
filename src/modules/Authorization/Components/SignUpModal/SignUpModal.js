import React from "react";
import { Modal } from "antd";
import SignUp from "../Elements/SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { modalSignUpActions } from "../../../../store/ModalSignUpSlice";

const SignUpModal = ({ modalSignUpVisible }) => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const isLoggedIn = auth;

  const handleOk = () => {
    dispatch(modalSignUpActions.setModalSignUpNotVisible());
  };

  const handleCancel = () => {
    dispatch(modalSignUpActions.setModalSignUpNotVisible());
  };

  return (
    <>
      {!isLoggedIn && (
        <Modal
          title="Basic Modal"
          visible={modalSignUpVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <SignUp />
        </Modal>
      )}
    </>
  );
};

export default SignUpModal;
