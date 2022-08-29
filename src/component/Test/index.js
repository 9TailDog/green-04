import { useEffect } from 'react'
import User from './User'

function Test () {
    const arrs = ['4', '2', '5', '4', '2']
    const unique = arrs.reduce((a,b) => {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);
    console.log(unique)

    // const unique = (arr) => {
    //     const result = {}
    //     arr.forEach((item) => {
    //         if(!result[item]) {
    //             result[item] = item
    //         }
    //         console.log(result)
    //     })
    
    //     return Object.values(result)3
    // }

    // useEffect (() => {
    //     const uniqueArr = unique(arrs)
    //     console.log(uniqueArr)
    // },[])

    // REST API
    // GET maihaidang.com/users/
    // GET maihaidang.com/users/1/comments // 1 la id user va lay cmt cua nguoi dung
    // POST PUT DELETE same
}

export default Test