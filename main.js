try {
    console.log("entramos al try")
    throw new Error("algo ha salido mal y estamos en el catch")
    console.log("esto no se verá")

} catch (error) {
    console.log( error.message )
}