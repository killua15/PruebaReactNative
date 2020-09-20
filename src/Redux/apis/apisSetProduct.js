export default async (id, product_name, product_cost, product_image, deparmet, category) => {
    //Para poder probar la lista de fiestas
    console.log(id)
    var URL = 'http://localhost:3000/product';
    var data = {
        id: id,
        name: product_name,
        cost: product_cost,
        deparmet: deparmet,
        image: product_image,
        category: category
    };


    return await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
    }).then(v => {
        var body = [];
        return v.json().then(result => {
            console.log(result)
            return result
        })

    });
};
