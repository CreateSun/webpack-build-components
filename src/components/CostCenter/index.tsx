import React, { useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom'
// import { Button1 } from 'components/button1'

function CostCenter(props: any) {
    const { costCenter_ref } = props
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
        return count
    }
    const reduce = () => {
        setCount(count - 1)
        return count
    }
    const throwInnerErr = () => {
        throw new Error('Test error inner component')
    }
    useEffect(() => {
        // costCenter_ref
        console.log('组件加载成功...', props)
    }, [])
    return <div ref={props.costCenter_ref}>
        <h1>成本中心测试</h1>
        <h2>计数: {count}次</h2>
        <button onClick={() => add()}>增加</button>
        <button onClick={() => reduce()}>减少</button>
        <button onClick={() => props.errFunc()}>抛出外部异常</button>
        <button onClick={() => throwInnerErr()}>抛出内部异常</button>
    </div>
}

function CostCenterHoc(Component: React.ComponentType) {
    Component.create = function (containerId: string, props: any) {
        ReactDom.render(
            <Component {...props} />,
            document.querySelector(containerId)
        );
    };
    return Component;
}

export default CostCenterHoc(CostCenter);