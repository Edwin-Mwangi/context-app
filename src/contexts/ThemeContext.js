import React, { createContext, Component } from 'react';
//inbuilt func given a custom varName 'ThemeContext'
export const ThemeContext = createContext();

//class component will have context data inside state
//ninja conventionally names class providers with contextname as prefix
class ThemeContextProvider extends Component {
    //the data to be shared
    state = { 
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
     } 
     toggleTheme = () => {
        //negation when func runs
        this.setState({ isLightTheme: !this.state.isLightTheme })
     }
    render() { 
        //the jsx
        return (
            //ThemeContext applied here with a provider tag
            //this'll wrap out diff components...state values spread in tag
            //accessed as prop vals in the components..toggleTheme can also be accessed from prop
            <ThemeContext.Provider value={ {...this.state, toggleTheme: this.toggleTheme}}>
                { this.props.children }
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;

