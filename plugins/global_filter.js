import Vue from "vue";
import moment from "moment";

Vue.filter("unEscapeHTML", str => {
  return str
    .replace(/(<)/g, "&lt;")
    .replace(/(>)/g, "&gt;")
    .replace(/(&amp;)/g, "&")
    .replace(/(&apos;)/g, "'")
    .replace(/(&#x27;)/g, "'")
    .replace(/(&#x2F;)/g, "/")
    .replace(/(&#39;)/g, "'")
    .replace(/(&#038;)/g, "&")
    .replace(/(&#47;)/g, "/")
    .replace(/(&lt;)/g, "<")
    .replace(/(&gt;)/g, ">")
    .replace(/(&nbsp;)/g, " ")
    .replace(/(&#8212;)/g, "-")
    .replace(/(&#8217;)/g, "’")
    .replace(/(&#8220;)/g, "“")
    .replace(/(&#8221;)/g, "“")
    .replace(/(&#8211;)/g, "-")
    .replace(/(&yen;)/g, "¥")
    .replace(/(&copy;)/g, "©")
    .replace(/(&quot;)/g, '"')
    .replace(/(&#39;)/g, "'");
});

export const createDate = function(fullDate) {
  return moment(fullDate).format("YYYY-MM-DD");
};

export const getUrlVars = function() {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
};
