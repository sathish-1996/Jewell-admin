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
                        {routes.map(({ path, component: Component }, i) => {
                            return (
                                <Route
                                    key={i}
                                    //   exact={layout.exact}
                                    path={path}
                                    element={<Component />} />


                            );
                        })}
                    </Routes>
                </div>

                <Footer />
            </div>

        </React.Fragment>
    );
};

export default Menu;
