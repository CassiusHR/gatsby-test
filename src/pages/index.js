import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Boxes from '../components/Boxes'
import Construction from '../components/Construction'

const isConstructing = false;

class HomeIndex extends React.Component {
    
    render() {
        if (!isConstructing) {
            return (
              <>
                <Helmet
                    title="Bee-Drone"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>
                <Banner />
                <Boxes />
            </>
            )
        }
        else {
            return(
                <>
                    <Construction/>
                </>
            )
        }
    }
}

export default HomeIndex