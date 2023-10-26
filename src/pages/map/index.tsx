/**
 * 高德地圖
 */

import React, {useEffect, useRef} from "react"
import Layout from "@theme/Layout";
import {Amap} from "@amap/amap-react";


const TravelMap = () => {
    useEffect(() => {

    }, []);

    return (
        <Layout>
            <div>
                <Amap >

                </Amap>
            </div>
        </Layout>
    )

}
export  default  TravelMap