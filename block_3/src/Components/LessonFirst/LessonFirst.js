import React from 'react';
import {Link} from "react-router-dom";

const LessonFirst = () => {
    return (

        <div>

            {/*В рамказ БЭМ мы должны использовать в названии детей product*/}
            {/*Можем использовтаь модификаторы типа mt-5 mb-5 ml-5 и т.п*/}
            {/*можем использовать дополнительный класс product_sale как вариант*/}
            <div className="product">
                <h2 className="product__title">
                    Some Product
                </h2>
                <p className="product__description">
                    Some Description
                </p>
                <Link to="#" className="product__buy">
                    Some Link
                </Link>
            </div>
        </div>
    );
};

export default LessonFirst;