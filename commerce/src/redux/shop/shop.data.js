const SHOP_DATA = {
    hats: {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16
            }
        ]
    },
    sneakers: {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 10,
                name: 'Adidas NMD',
                imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                price: 220
            },
            {
                id: 11,
                name: 'Adidas Yeezy',
                imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                price: 280
            },
            {
                id: 12,
                name: 'Black Converse',
                imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                price: 110
            },
            {
                id: 13,
                name: 'Nike White AirForce',
                imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                price: 160
            },
            {
                id: 14,
                name: 'Nike Red High Tops',
                imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                price: 160
            },
            {
                id: 15,
                name: 'Nike Brown High Tops',
                imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                price: 160
            },
            {
                id: 16,
                name: 'Air Jordan Limited',
                imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                price: 190
            },
            {
                id: 17,
                name: 'Timberlands',
                imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                price: 200
            }
        ]
    },
    jackets: {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
            {
                id: 18,
                name: 'Black Jean Shearling',
                imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                price: 125
            },
            {
                id: 19,
                name: 'Blue Jean Jacket',
                imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                price: 90
            },
            {
                id: 20,
                name: 'Grey Jean Jacket',
                imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                price: 90
            },
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                price: 165
            },
            {
                id: 22,
                name: 'Tan Trench',
                imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                price: 185
            }
        ]
    },
    womens: {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: [
            {
                id: 23,
                name: 'Blue Tanktop',
                imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                price: 25
            },
            {
                id: 24,
                name: 'Floral Blouse',
                imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                price: 20
            },
            {
                id: 25,
                name: 'Floral Dress',
                imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                price: 80
            },
            {
                id: 26,
                name: 'Red Dots Dress',
                imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                price: 80
            },
            {
                id: 27,
                name: 'Striped Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                price: 45
            },
            {
                id: 28,
                name: 'Yellow Track Suit',
                imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                price: 135
            },
            {
                id: 29,
                name: 'White Blouse',
                imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                price: 20
            }
        ]
    },
    mens: {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: [
            {
                id: 30,
                name: 'Camo Down Vest',
                imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                price: 325
            },
            {
                id: 31,
                name: 'Floral T-shirt',
                imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                price: 20
            },
            {
                id: 32,
                name: 'Black & White Longsleeve',
                imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                price: 25
            },
            {
                id: 33,
                name: 'Pink T-shirt',
                imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                price: 25
            },
            {
                id: 34,
                name: 'Jean Long Sleeve',
                imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                price: 40
            },
            {
                id: 35,
                name: 'Burgundy T-shirt',
                imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                price: 25
            }
        ]
    },
    kids: {
        id: 6,
        title: 'Kids',
        routeName: 'kids',
        items: [
            {
                id: 36,
                name: 'Relaxed Open-Sweater',
                imageUrl: 'https://images.unsplash.com/photo-1489681215838-e7e1c56c4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                price: 24
            },
            {
                id: 37,
                name: 'Jersey Dress for Girls',
                imageUrl: 'https://images.unsplash.com/photo-1548964439-ff1b81205cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 12
            },
            {
                id: 38,
                name: 'Pop-Color Jeggings for Girls',
                imageUrl: 'https://images.unsplash.com/photo-1548867568-1c413b952f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 24
            },
            {
                id: 39,
                name: 'Graphic Long-Sleeve Tee for Boys',
                imageUrl: 'https://images.unsplash.com/photo-1551962419-dd504f20a479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 16
            },
            {
                id: 40,
                name: 'Straight Built-In Flex Uniform Pants for Boys',
                imageUrl: 'https://images.unsplash.com/photo-1493357335960-4583bfa6f8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 18
            }
        ]
    },
    watches: {
        id: 7,
        title: 'watches',
        routeName: 'watches',
        items: [
            {
                id: 41,
                name: "BREIR Men's Fashion Minimalist Wrist Watch",
                imageUrl: 'https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 125
            },
            {
                id: 42,
                name: 'Mens Watch Ultra Thin Wrist',
                imageUrl: 'https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 90
            },
            {
                id: 43,
                name: 'Omega Mens Stainless Steel',
                imageUrl: 'https://images.unsplash.com/photo-1562928019-0ab1e751fe66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 90
            },
            {
                id: 44,
                name: 'Girls Leather Strap Watch',
                imageUrl: 'https://images.unsplash.com/photo-1551480634-4263800a3868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 165
            },
            {
                id: 45,
                name: 'Rose Gold Steel Ladies Watch',
                imageUrl: 'https://images.unsplash.com/photo-1525740664269-1bb17f251737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 185
            }
        ]
    }, sunglasses: {
        id: 8,
        title: 'sunglasses',
        routeName: 'sunglasses',
        items: [
            {
                id: 46,
                name: 'Lightweight Polarized Sunglasses ',
                imageUrl: 'https://images.unsplash.com/photo-1558254928-a269c2970677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 65
            },
            {
                id: 47,
                name: 'UV Protection Sunglasses ',
                imageUrl: 'https://images.unsplash.com/photo-1564005470699-81cd492e171d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 97
            },
            {
                id: 48,
                name: 'OLIUR Rectangular Polarized',
                imageUrl: 'https://images.unsplash.com/photo-1473409872320-f3f1bb4e89c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 93
            },
            {
                id: 49,
                name: 'Sport Sunglasses',
                imageUrl: 'https://images.unsplash.com/photo-1551632494-bba43419b32b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
                price: 75
            },
            {
                id: 50,
                name: 'Fuel Cell Rectangular ',
                imageUrl: 'https://images.unsplash.com/photo-1547157283-087711e7858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
                price: 185
            }
        ]
    }
};

export default SHOP_DATA;