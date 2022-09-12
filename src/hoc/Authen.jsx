import React, { useEffect } from 'react';
import typeStore from 'store/type.ts';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const authen = (Component) => (props) => {
  return <Component {...props} />;
};

export default authen;
