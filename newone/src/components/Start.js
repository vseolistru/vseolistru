import React from 'react';
import pic from "../img/avatar.jpg";
import {Link} from "react-router-dom";


const Start = () => {

    return (
        <div>
            <Link to="/">Navigation</Link>
            <div>
                <h1 style={{textAlign: "center"}} id="heading">Школьникова Наталья Юрьевна 38лет</h1>
                <img src={pic} alt="photo"/>
                <p>Москва м. ВДНХ</p>
                <div>
                    <p>Учитель математики, учитель физики</p>
                </div>
                <h2>Опыт работы</h2>
                <hr/>
                <p>Гимназия № 1570 <em>Учитель математики</em><br/>Сентябрь 2003 - н.в.</p>

                <h2>Образование</h2>
                <hr/>
                <p><b>Межрегиональный Институт развития образования </b>
                    <br/> ЕГЭ по математике подготовка к экзамену в соответсвтии с ФГОС </p>
                <h2>Курсы</h2>
                <hr/>
                <p><b>Московский институт такой - то</b><br/>
                    kg;flkspgjfsp gfspdojkg fsgkmfs gfsdhg fkjsdnglkj</p>

                <h2>Навыки</h2>
                <hr/>
                <p>fjldkm  gfsldkjg gfsdjglkfs gfdkglkfns sdgf dngj nfsd gfdlsjng</p>
                <h2>О себе</h2>
                <hr/>
                <p>gflksdn gfsdlkngk  gfdslkngkjfds gfsdjngkjfsdgqyergfd ds fdsag mhl;krhgi hfb</p>
            </div>
        </div>
    );
};

export default Start;