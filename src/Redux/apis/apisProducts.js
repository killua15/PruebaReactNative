export default async () => {
    //Para poder probar la lista de fiestas
    var URL = 'http://localhost:3000/product';
    return await fetch(URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
    }).then(v => {
        var body = [];
        return v.json().then(result => {
            // console.log(result)
            return result
        })

    });
};
