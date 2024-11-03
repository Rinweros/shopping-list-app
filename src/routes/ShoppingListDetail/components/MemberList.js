
import React from 'react';
import './MemberList.css';

const MemberList = ({ members }) => {
  return (
    <div className="member-list">
      <h3>Členové:</h3>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
