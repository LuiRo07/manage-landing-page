import React from 'react';
import NavBar from '../../intro-section/NavBar/NavBar';
import styles from '../styling/OverlayComponent.module.css'; // Assuming you have a CSS module for styles

function overlayComponent() {
  return (
    <>
        <div className={styles.overlayContainer}>
        <NavBar />
            <svg className={styles.desktopOverlay} xmlns="http://www.w3.org/2000/svg" width="1439" height="100%">
                <g fill="#f25f3a" fillRule="evenodd" transform="translate(-171 -373)">
                    <rect width="310.431" height="708" x="205" y="410" rx="155.215" transform="scale(1 -1) rotate(-45 -1484.244 0)"/>
                    <rect width="310.431" height="708" x="1269" y="7" rx="155.215" transform="scale(1 -1) rotate(-45 552.684 0)"/>
                </g>
            </svg>
        </div>
    </>
  )
}

export default overlayComponent