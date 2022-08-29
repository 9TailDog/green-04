import { useEffect } from 'react'

const Tests = () => {
    useEffect(() => {
        const arr = [1, 2, 3, 4]
        arr.map((item) => {
            return item % 2 !== 0 ? 5 : item
         })
    }, [])

    useEffect(() => {
        const arrs = [1, 2, 3, 4, 4,{name:1}]
            arrs.find((item) => {
            return item && item.name === 1
         })
         console.log(arrs)
    }, [])
    
}

export default Tests