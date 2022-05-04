async function tempo (request, response) {
    const apiKey = process.env.CONVERTKIT_API_KEY;
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}&api_key=${apiKey}&tags=tempo&fields=email&page=1&page_size=100`);
    const subscibersResponseJson = await subscribersResponse.json();
    const subscribers = subscibersResponseJson.total_subscribers;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate'); // Refresh de consulta em cache da API

    response.json({
        date: dynamicDate.toGMTString(),
        subscribers: subscribers
    })
}

export default tempo;