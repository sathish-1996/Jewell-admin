import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';

// import './index.css';
import routes from '../Routes/route';



const Menu = (props) => {


    return (
        <React.Fragment>

            <div className='page'>
                <Header {...props} />
                <div className='hr_main_layout_outcon'>
                    <Routes>
                        {routes.map(({ path, element }, i) => {
                            console.log(path,"path")
                            return (
                                <Route
                                    key={i}
                                    path={path}
                                    element={element} />


                            );
                        })}
                    </Routes>
                </div>

                {/* <Footer /> */}
            </div>

        </React.Fragment>
    );
};

export default Menu;
