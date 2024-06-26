import React from 'react';
import Identicon from 'identicon.js';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href='/#'
          rel="noopener noreferrer"
        >
          BLOCKCHAIN
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{props.account}</small>
            </small>
            {
                props.account
                ? <img alt="addressImage" className="ml-2" width={30} height={30} src={`data:image/png;base64, ${new Identicon(props.account, 30).toString()}`} />
                : <span></span>
            }
          </li>
        </ul>
      </nav>
    )
}
