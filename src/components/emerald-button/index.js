import React, { useState } from 'react';
import styles from './emerald-button.module.css'

export default class EmeraldButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           text: props.text
        };
    }
    
    render() {
        return (
            <div className={styles['emerald-button']}>
                {this.state.text}
            </div>
        );
    }
}
