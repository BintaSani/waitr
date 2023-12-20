import React from 'react';
import {ReactComponent as Search} from '../assets/Group (1).svg';
import {ReactComponent as Add} from '../assets/bi_plus-lg.svg';
import {ReactComponent as Logo} from '../assets/fa_chain.svg';
import {ReactComponent as Briefcase} from '../assets/gg_work-alt.svg';
import {ReactComponent as Health} from '../assets/healthicons_city-worker-outline.svg';
import {ReactComponent as Fluent} from '../assets/fluent_history-24-filled.svg';
import {ReactComponent as Clarity} from '../assets/clarity_process-on-vm-line.svg';
import {ReactComponent as Person} from '../assets/akar-icons_person.svg';
import {ReactComponent as Enterprise} from '../assets/carbon_enterprise.svg';
import {ReactComponent as Truck} from '../assets/bi_truck.svg';
import './darkScreen.scss';

const DarkScreen = () => {
    return(
        <div className='dark-screen'>
            <div className='dark-screen-container'>
                <div className='menu' />
                <h1 className='process'>Procesos</h1>
                <div className='search'>
                    <div className='search-icon'/>
                    <Search/>
                    <p className='search-text'>Buscar</p>
                </div>
                <div className='processes'>
                    <h3 className='process-title'>Investigacion y desarrollo</h3>
                </div>
                <div className='processes one'>
                    <div className='process-title first'>Alianzas estratégicas</div>
                </div>
                <div className='processes two'>
                    <div className='process-title second'>Gestión de calidad</div>
                </div>
                <div className='processes three'>
                    <div className='process-title third'>Gestión de pedidos</div>
                </div>
                <div className='processes four' >
                    <div className='icon-cont'>
                        <Add/>
                    </div>
                    <div className='process-title fourth'>Unidad de negocio</div>
                </div> 
            </div>
            <div className='dark-screen-container1'>
                <div className='side-bar' />
                <div className='logo-cont'>
                    <Logo/>
                </div>
                <div className='profile' />
                {/* <DisplayPic/> */}
                <img className='profile-image' src='https://i.ibb.co/KwZZN9R/Rectangle-6.png' alt='display-pic' />
                <div className='briefcase'>
                    <div className='brief-cont'>
                        <Briefcase/>
                    </div>
                </div>
                <div className='clear'>
                    {/* <div style={{width: 44, height: 48, left: 0, top: 0, position: 'absolute', background: 'rgba(49, 49, 49, 0)', borderRadius: 12}} /> */}
                </div>
                <div className='clear1' />
                <div className='cont'>
                    <Enterprise/>
                </div>
                <div className='cont cont1'>
                    <Person/>
                </div>
                <div className='cont cont2'>
                    <Fluent/>
                </div>
                <div className='cont cont3'>
                    <Health/>
                </div>
                <div className='cont cont4'>
                    <Clarity/>
                </div>
                <div className='cont cont5'>                   
                    <Truck/>
                </div>
            </div>
            <div className='matriz'>
                <div className='matriz-title'>
                    <h4 className='matriz-text'>Matriz de priorización de procesos</h4>
                </div>
                <div className='matriz-title1'>
                    <h4 className='matriz-text1'>Matriz de indicadores de desempeño</h4>
                </div>
            </div>
            <div className='button'>
                <p className='button-text'>Entrar en modo edición</p>
            </div>
            <h2 className='matriz-priority'>Matriz de priorización de procesos</h2>
            <h2 className='matriz-process'>Matriz de procesos priorizados</h2>
        </div>
    )
}

export default DarkScreen;