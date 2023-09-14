import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const { toggleTheme } = this.context;
        return (
            //func'll be defined in ThemeContext.js as shared data
            <button onClick={ toggleTheme }>Toggle Theme</button>
        );
    }
}
 
export default ThemeToggle;