// Default connection
var direct = "DIRECT";

// Alternate Proxy Server
var proxy = "PROXY 0.0.0.0:8095";

// Default localhost for denied connections
var deny = "PROXY 0.0.0.0:65535";

//
// Proxy Logic
//

function FindProxyForURL(url, host) 
{           
    return deny;      
}