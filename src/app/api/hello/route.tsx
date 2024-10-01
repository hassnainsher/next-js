// export async function GET(request){
//     return new Response('hello')
// }

export async function GET(request): Promise<Response> {
    return new Response('hello', {
        status: 200, 
    });
}