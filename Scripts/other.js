const url = $request.url;
if (!$response.body) $done({});

if ($request.url.includes("missav.com")) {
  let div_ad = document.querySelectorAll('div.mx-auto[style]')
    for (i = 0; i < div_ad.length; i++) {
        if (div_ad[i].querySelectorAll('[target=\'_blank\']').length >= 1) {
            div_ad[i].style.height = '0px'
        }
    }
  $.done({});
} else if ($request.url.includes("argus/api/v1/assembly/toolbar")) {
  var Q = JSON.parse($response.body);
  Q.Data.Toolbar.Adv = {};
  $done({body : JSON.stringify(Q)});
}

