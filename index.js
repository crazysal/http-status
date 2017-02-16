'use strict';
var http_status = () => {
  var httpStat = this;
  httpStat.ok = (res, msg) => {
    typeof msg === 'object' ? res.status(200).jsonp(msg) : res.status(200).end(msg);
  };
  httpStat.not_modified = (res, msg) => {
    console.log(msg);
    res.status(304).json(msg);
  };
  httpStat.bad_request = (res, msg) => {
    console.log(msg);
    res.status(400).json(msg);
  };
  httpStat.forbidden = (res, msg) => {
    console.log(msg);
    res.status(403).json(msg);
  };
  httpStat.not_found = (res, msg) => {
    console.log(msg);
    res.status(404).json(msg);
  };
  httpStat.not_acceptable = (res, msg) => {
    console.log(msg);
    res.status(406).json(msg);
  };
  httpStat.gone = (res, msg) => {
    console.log(msg);
    res.status(410).json(msg);
  };
  httpStat.enhance_your_calm = (res, msg) => {
    console.log(msg);
    res.status(420).json(msg);
  };
  httpStat.unprocessable_entity = (res, msg) => {
    console.log(msg);
    res.status(422).json(msg);
  };
  httpStat.internal_server_error = (res, msg) => {
    console.log(msg);
    res.status(500).json(msg);
  };
  httpStat.bad_gateway_api = (res, msg) => {
    console.log(msg);
    res.status(502).json(msg);
  }
};
http_status_obj = new http_status();
module.exports = http_status_obj;