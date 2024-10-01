/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "st3.depositphotos.com",
            "techterms.com",
            "dummyjson.com",

        ]
    },
    redirects:async()=>{
        return[
            {
                source:'/products',
                destination:'/',
                permanent:false,
            },
            // {
            //     source: '/users/:userid',
            //     destination: '/',
            //     permanent:false,
            // }
        ]
    }
    // output:"export"
    // afer this line give the cammond in terminal 
    // nmp run build
};

export default nextConfig;




