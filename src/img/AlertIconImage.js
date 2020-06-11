import React from 'react';

const AlertIcon = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id="alertIcon">Alert icon</title>
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 9v2m0 4v.01" />
      <path d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75" />
    </svg>
  );
};

export default AlertIcon;
