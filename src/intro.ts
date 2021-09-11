var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://excuses-8368.restdb.io/rest/intro",
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "6138e08243cedb6d1f97ee76",
        "cache-control": "no-cache"
    }
}


export function getIntro() {
    return $.ajax(settings).done(function (response) {
        return response
    }).responseJSON;
}
