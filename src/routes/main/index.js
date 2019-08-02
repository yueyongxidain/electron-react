import React from 'react';
import electron from 'electron'
import Body from '../body'
import Footer from '../footer'

const { ipcRenderer } = electron
function add() {
   
}
function Index() {
    return (
        <div>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default Index;
