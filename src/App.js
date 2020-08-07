import React from "react";
import styles from "./App.module.css";
import {Cards , Charts , CountryPicker} from "./components"
import {fetchData} from "./api";
//import coronaImage from "./images/image.png";
import coronaImage1 from "./images/COVID-19.jpg";


class App extends React.Component {  
    state = {                 
        data: {},
        country: '',
    }

    async componentDidMount() {

        const fetchedData =await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async(country) => {

        const fetchedData =await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }


    render() {
        const { data,country } = this.state; //destructuring and using props
        return(
            <div className={styles.container}> 
                <img className={styles.image} src={coronaImage1} alt="COVID-19" />
                <Cards data={data}/>  
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country}/>
            </div>
        ) 
    }
}

export default App;