import React from 'react';
import styled from 'styled-components';
import SortRestaurants from './SortRestaurants';

const Wrapper = styled.div`
    font-family: ProximaNova, Arial, Helvetica Neue, sans-serif;
    background-color: #e9e9eb;
    padding: 70px 0;
    min-width: 100%;

    ._3n3qL {
    max-width: 1200px;
    min-width: 1200px;
    position: relative;
    margin: 0 auto;
    display: -ms-flexbox;
    display: flex;
}

.pr21h {
    vertical-align: top;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: center;
    max-width: 50%;
}

.s-FIt {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
}

._1H27p {
    display: block;
    width: 24px;
    height: 3px;
    background-color: #686b78;
    margin: 18px auto 30px;
}

._396MD {
    color: #686b78;
    font-size: 15px;
    width: 300px;
    margin: auto;
}

._2oIuR {
    margin-top: 30px;
    text-align: center;
}

.G-zTk {
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #686b78;
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
`;

const AllRestaurants = () => {
    return (
        <Wrapper>
            <div class="_3n3qL">
                <div class="pr21h">
                    <div class="s-FIt">Address</div>
                    <div class="_1H27p"></div>
                    <div class="_396MD">
                        The Belgian Waffle Co.,
                        Door N0.10, Harleys Rd , Kilpauk,Chennai-10 Corp ward -103.
                    </div>
                </div>
                <div class="pr21h">
                    <div class="s-FIt">Cuisines</div>
                    <div class="_1H27p"></div>
                    <div class="_396MD">Desserts,Beverages</div>
                </div>
            </div>
            <div>
                <div class="_2oIuR" data-type="FSSAI">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_162,h_80/fssai_final_edss9i" height="40" width="81" alt="" />
                    <ul class="G-zTk">
                        <li class="_167GT">License No. 12418002005840</li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
};

export default AllRestaurants;
