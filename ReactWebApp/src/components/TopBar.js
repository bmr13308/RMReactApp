import React from 'react';
import './TopBar.scss';

export const TopBar = ({ toggleEdit }) => (
  <div className="TopBar">
    <div className="TopBar-logo">qw.hu</div>

    {/*  <input className="TopBar-search" /> */}

    <div className="TopBar-menu">
      <div className="TopBar-menu-item" onClick={toggleEdit}>
        SZERKESZTÉS
      </div>
      <div className="TopBar-menu-item">PROFIL</div>
      <div className="TopBar-menu-item">MENÜ</div>
    </div>
  </div>
);
