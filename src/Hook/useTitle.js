import { useEffect } from "react"

const useTitle = (title)=>{
    useEffect(()=>{
        document.title = `${title}-Paparazzo Photography`
    },[title])
}
export default useTitle;