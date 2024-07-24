
export const isTokenValid = (expiresAt) => {
    
    const interval = setInterval(() => {
        const time = new Date()
        const currentTimestamp = Date.parse(time)/1000
        console.log(currentTimestamp)
        if (currentTimestamp > expiresAt) {
            console.log("hemos entrado al if")
            localStorage.removeItem("passport")
            clearInterval(interval)

        }
    }, 1000)
}
