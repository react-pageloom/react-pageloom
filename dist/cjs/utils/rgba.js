"use strict";exports.rgba=function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=t.replace("#","");3===s.length&&(s=`${s[0]}${s[0]}${s[1]}${s[1]}${s[2]}${s[2]}`);return r>1&&r<=100&&(r/=100),`rgba(${parseInt(s.substring(0,2),16)}, ${parseInt(s.substring(2,4),16)}, ${parseInt(s.substring(4,6),16)}, ${r})`};