export default ({ route, redirect })=> {
    // console.log(route)

    let auth = true
    if(!auth) {
        redirect('/')
    }

}