import {jsPlumb} from 'jsplumb'

jsPlumb.ready(function () {
    jsPlumb.connect({
        // source	String,Object,Endpoint	是	连线源的标识，可以是id, element, 或者Endpoint
        source: 'item_left',
        // target	String,Object,Endpoint	是	连线目标的标识，可以是id, element, 或者Endpoint
        target: 'item_right',
        // endpoint	String	可选	端点类型，形状
        endpoint: 'Dot',
        // Bezier,Flowchart,StateMachine,Straight
        connector: ['Bezier'],
        // 锚点
        anchor: ['Left', 'Right']
    });

    // 让节点线条可以拖动加上这个
    jsPlumb.draggable('item_left');
    jsPlumb.draggable('item_right');
});

if(module.hot){
    //console.info(module);
    module.hot.accept(function () {
        //console.info(arguments)
        // 直接刷新，就不用去管事件等遗留问题了。
        location.reload();
    });
}