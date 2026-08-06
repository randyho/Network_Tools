const url = $request.url;
if (!$response.body) $done({});

let html = $response.body

if ($request.url.includes("missav.com")) {
    html = html.replace(/(<\/body>\n<\/html>)/g, "") +
    `
    <script type="text/javascript">
        htmlAds = [];
        htmlAdIndexes = [];
    </script>
    </body>
    </html>
    `

    $done({body: html})
}
