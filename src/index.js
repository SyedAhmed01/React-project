import React from 'react';
import ReactDOM from 'react-dom';
import FormComp from './Comp.js';
import Header from './Header.js';
import Footer from './Footer.js';
import AddUser from './Adduser.js';

ReactDOM.render(
<div>
    <Header />
    <FormComp />
    <AddUser />
    <Footer />
</div>, 
document.getElementById('root'));