const url = $request.url;
if (!$response.body) $done({});

let html = $response.body

if ($request.url.includes("missav.com")) {
    html = html.replace(/(<\/body><\/html>)/g, "") +
    `
    <script ${nonce}>
    htmlAds = [];
    </script>
    </body>
    </html>
    `

    $done({body: html})
}
