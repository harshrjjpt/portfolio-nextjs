'use client'
import React from 'react';
import styles from "./Map.module.scss" // Import CSS file

function Map() {
  return (
    <div>
      <iframe
        title="Google Maps"
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010984.358318007!2d77.1010050354324!3d28.613939356382953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2f828b7e20c3c!2sDelhi%2C%20India!5e0!3m2!1sen!2suk!4v1649334302174"
        width="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Map;
