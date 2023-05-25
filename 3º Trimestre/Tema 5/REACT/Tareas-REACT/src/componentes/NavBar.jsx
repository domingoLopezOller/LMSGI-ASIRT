import React, { Component } from 'react'
import './NavBar.css';

import {FaHome} from "react-icons/fa";
import { FcContacts, FcAbout } from "react-icons/fc";
import { BsNewspaper } from "react-icons/bs";
import {AiOutlineInfoCircle} from "react-icons/ai";

export default class NavBar extends Component {
  render() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Company</li>
                <li>Services</li>
                <li>Showcase</li>
                <li>Support</li>
                <li>Privacy</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
  }
}
