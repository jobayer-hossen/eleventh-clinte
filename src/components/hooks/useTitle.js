import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `RoboLand-${title}`
    },[title]);
}
export default useTitle;