/**
 * 高德地圖
 */

import React, {useEffect, useState} from "react"
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// @ts-ignore
import redFlagMapIconTest from "../../../static/img/redFlagMap/icon-2.png"
// @ts-ignore
import banner1 from '../../../static/img/banner/img_4.jpg'
// @ts-ignore
import banner2 from '../../../static/img/banner/img_1.jpg'
// @ts-ignore
import banner3 from '../../../static/img/banner/img_3.jpg'

import AMapLoader from '@amap/amap-jsapi-loader';
import  styles from './styles.module.scss'

interface markType {
    id: string;
    position: [number, number];
    title: string;
    content: string;
    img: string;
}
const TravelMap = () => {
   let  map = null
    const {siteConfig}:any = useDocusaurusContext();
   const markList: markType[] = [
       { id:'1', position:[106.520250,29.585500], title:'这是第一个mark',content:'内容3',img:banner1},
       {id:'2', position:[106.494059,29.59269], title:'这是第二个mark',content:'内容-12',img:banner2},
       { id:'3' ,position:[106.552396,29.613392], title:'这是第三个mark',content:'内-------容',img: banner3},
   ]

    useEffect(() => {
        AMapLoader.load({
            // 这里提供你的高德地图 API Key
            key: siteConfig.customFields.mapKey, // 申请好的Web端开发者Key
            version: "2.0", // 指定要加载的 JSAPI 的版本
            plugins: [
                'AMap.ToolBar',
                'AMap.Driving',
                'AMap.ControlBar,'
            ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap:any) => {

            // 这里可以在地图加载成功后的回调中执行一些操作
             map = new AMap.Map('mapContainer', {
                viewMode:"3D",         //是否为3D地图模式
                zoom:13,                //初始化地图级别
                rotateEnable:true,
                pitchEnable:true,
                pitch: 50,
                rotation: -15,
                zooms:[2,20],
                center:[106.520250,29.585500], //初始化地图中心点位置
            });

            const toolbar = new AMap.ToolBar();
            map.addControl(toolbar);


            // 添加 3D 罗盘控制
            map.addControl(new AMap.ControlBar({
                position: {
                    right: '20px',
                    top: '20px'
                },
                showControlButton: true,  // 是否显示倾斜、旋转按钮。默认为 true
            }));

            // 自定义图标
            const redFlagMapIcon = new AMap.Icon({
                size: new AMap.Size(25, 34),
                // 图标的取图地址
                // image:'http://cdn.sinlio.cn/blog/icon-1.png',
                image:redFlagMapIconTest,
                // 图标所用图片大小
                imageSize: new AMap.Size(40, 40),
                // 图标取图偏移量
                imageOffset: new AMap.Pixel(-9, -3)
            });

            //地图绑定鼠标右击事件——弹出右键菜单-输出当前位置
            map.on('rightclick', function (e) {
                console.log('.lnglat',e.lnglat)
            });


            const markerClick = (e) => {
                infoWindow.setContent(e.target.content);
                infoWindow.open(map, e.target.getPosition());
            }
            const infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
            const addMarker = () => {
                if(markList && markList.length){

                    markList.map((key:markType,index:number)=>{
                        const marker = new AMap.Marker({
                            map: map,
                            icon:redFlagMapIcon,
                            position: key.position
                        });
                        // marker.content = key.content;
                        marker.content = `<div style="padding-top:10px"> 
                                           <img src=${key.img} alt={key.title} height="200px" width="300px" /> 
                                         </div>`;
                        marker.on('click', markerClick);
                        marker.emit('click', {target: marker});
                    })
                }
            }
            addMarker();
        }).catch((error)=>{
            console.log(error)
        })
        return () => {
            // map?.destroy();
            // 这里可以在组件销毁时执行一些清理操作
        };
    }, []);

    return (
        <Layout>
            <div
                id="mapContainer"
                className={styles.container}
                style={{ height: '800px' }}
            >

            </div>
        </Layout>
    )

}
export  default  TravelMap