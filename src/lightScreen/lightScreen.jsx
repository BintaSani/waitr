import React from 'react';
import './lightScreen.scss';
import {ReactComponent as Logo} from '../assets/Frame 55122.svg';
import {ReactComponent as Chart} from '../assets/ChartPieSlice.svg';
import {ReactComponent as ChartBar} from '../assets/ChartBar.svg';
import {ReactComponent as Group} from '../assets/Group 2757.svg';
import {ReactComponent as Currency} from '../assets/fa6-solid_file-invoice-dollar.svg';
import {ReactComponent as Search} from '../assets/Search (2).svg';
import {ReactComponent as Filter} from '../assets/Vector (2).svg';
import {ReactComponent as Down} from '../assets/Icon.svg';
import {ReactComponent as Export} from '../assets/mdi_file-export.svg';
import {ReactComponent as CheckBox} from '../assets/bx_checkbox-checked.svg';
import {ReactComponent as Vector20} from '../assets/Vector 20.svg';
import {ReactComponent as Vector19} from '../assets/Vector 19.svg';
import {ReactComponent as Lock} from '../assets/mingcute_lock-fill.svg';
import {ReactComponent as UnLock} from '../assets/wpf_unlock-2.svg';

const LightScreen = () => {
    return(
        <div className='light'>
            <div className='left'>
                <div className='logo'>
                    <Logo/>
                </div>
                <div className='menu'>
                    <div className='menu-container' >
                        <div className='icon-cont'><Chart/></div>
                        <p className='text text1'>Overview</p>
                    </div>
                    <div className='menu-container' >
                        <div className='icon-cont'><ChartBar/></div>
                        <p className='text'>Request for App.</p>
                        <div className='notification'>10</div>
                    </div>
                    <div className='menu-container' >
                        <div className='icon-cont'><Group/></div>
                        <p className='text'>Contract Init. Req.</p>
                        <div className='notification'>10</div>
                    </div>
                    <div className='menu-container last' >
                        <div className='icon-cont'><Currency/></div>
                        <p className='text'>Req. for Quotes</p>
                        <div className='notification'>10</div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='header' >
                    <div className='search' >
                        <div className='search-icon'><Search/></div>
                    </div>
                    <div className='log' >Log Out</div>
                </div>
                <div className='cont'>
                    <div className='quote'>Quotes</div>
                    <div className='cont1'>
                        <div className='filter'>
                            <div className='icon'><Filter/></div>
                            <p>Filter</p>
                            <div className='down'><Down/></div>
                        </div>
                        <div className=' filter export'>
                            <div className='icons'><Export/></div>
                            <p>Export</p>
                            
                        </div>
                    </div>
                </div>
                <div className='table'>
                    <table>
                        <tr>
                            <th className='column'>
                                <div><CheckBox/></div>
                                <p>Application ID</p>
                                <div className='scroll'>
                                    <div className='up'><Vector20/></div>
                                    <div className='down'><Vector19/></div>
                                </div>
                            </th>
                            <th className='column'>Q. Received</th>
                            <th className='column'>User Department</th>
                            <th className='column1'>Project Title</th>
                            <th className='details'>Project Summary</th>
                            <th className='column2'>View Quotes</th>
                        </tr>
                        <tr className='row'>
                            <td className='column'>
                                <div ><CheckBox/></div>
                                <p>23917HR12</p>
                            </td>
                            <td className='column'>4</td>
                            <td className='column'>Human Resources</td>
                            <td className='column1'>PROFORMA/7/03/2022</td>
                            <td className='details'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</td>
                            <td className='column2'>
                                <div className='btn'>
                                    <div>
                                        <Lock/>
                                    </div>
                                    <p>OPEN</p>
                                </div>
                            </td>
                        </tr>
                        <tr className='row'>
                            <td className='column'>
                                <div ><CheckBox/></div>
                                23917HR12
                            </td>
                            <td className='column'>7</td>
                            <td className='column'>Technical</td>
                            <td className='column1'>PROFORMA/7/03/2022</td>
                            <td className='details'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</td>
                            <td className='column2'>
                                <div className='btn btn1'>
                                    <div>
                                        <UnLock/>
                                    </div>
                                    <p>OPEN</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LightScreen;