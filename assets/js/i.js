(function() {
  var n = "undefined"
    , t = function(t) {
      return typeof t !== n
  }
    , e = "js15_as.js"
    , r = ""
    , i = !1
    , o = !1
    , a = !1
    , c = !1
    , s = "0.2.1"
    , u = 25
    , _ = "-"
    , f = "_visitor_SID"
    , d = "visitor_custom_destDivProducer"
    , p = function(n) {
      _ += "_" + n
  };
  p(s);
  var v = function() {
      i && console.log.apply(this, arguments)
  }
    , l = function(n, r) {
      var i = n || {};
      try {
          var o = r.document
            , a = r.navigator
            , c = r.screen
            , s = r.Date
            , f = r.Math
            , d = function() {
              return o
          }
            , p = function() {
              return d().getElementsByTagName("body")[0] || d().getElementsByTagName("head")[0]
          }
            , l = function(n) {
              return "function" == typeof n
          }
            , h = function(n) {
              return t(n) && n instanceof Array
          }
            , m = function(n) {
              return t(n) && !!d().getElementById(n)
          }
            , y = function(n) {
              var e = !1;
              if (t(n)) {
                  if ("NaN" == parseInt(n))
                      return !1;
                  e = parseInt(n) > 0
              }
              return e
          }
            , g = function(n) {
              return y(n) ? parseInt(n) : 0
          }
            , w = function(n) {
              return "string" != typeof n || n.length < 1 ? n : n.replace(/^['"]?(.*)['"]$/, "$1")
          }
            , T = t(window["_DEBUG_visitor_ASYNCR_DO_NOT_AUTOSTART"])
            , I = function() {
              return parseInt(1e4 * f.random()) + 1
          }
            , H = function() {
              return Math.floor(4e8 * Math.random()) - 2e8
          }
            , C = I()
            , E = "visitor_counter"
            , b = H()
            , S = function(n, e, r) {
              if (!t(n))
                  return t(r) && r(n),
                  void 0;
              for (var i in n)
                  n.hasOwnProperty(i) && e(i, n[i], n)
          }
            , R = 0
            , O = function() {
              R++
          }
            , A = function(n) {
              return "string" == typeof n
          }
            , D = function(n) {
              var e = !1;
              return t(n) && A(n) && (e = (n + "").length > 0),
              e
          }
            , N = "1000"
            , U = "0"
            , B = "0.php?";
          i.o_i = 0,
          i.ver = 16,
          i.eve = 3,
          i.cver = 0,
          i.s_id = 0,
          i.s_pd = 0,
          i.d_op = 0,
          i.i_dom = 4,
          i.i_id = 0,
          i.i_w = 0,
          i.i_h = 0,
          i.i_b = "",
          i.s_d = "",
          i.s_u = "",
          i.s_l = "0",
          i.s_t = "",
          i.d_s = 0,
          i.d_fa = 0;
          var j = 0
            , F = 0;
          i.d_tf = 0,
          i.d_nv = 1,
          i.d_mu = 0,
          i.d_cv = 0,
          i.d_cs = 0,
          i.d_cp = 0,
          i.d_pON = 0;
          var G = 45e3;
          i.d_ca = 0,
          i.d_pn = 0,
          i.d_pt = 0,
          i.f_pv = 0,
          i.s_ta = "",
          i.a_va = [],
          i.s_ti = "",
          i.asi = 0,
          i.o_fa = 0,
          i.o_de = 0,
          i.o_BC = 0,
          i.o_fr = 0,
          i.p_ff = 0,
          i.n_a = "",
          i.n_f = 0,
          i.n_n = 0,
          i.o_n = 0;
          var x = 31536e6;
          i.c_on = 0,
          i.s_sc1 = "1",
          i.s_sc2 = "11111111",
          i.s_asc2 = {};
          var k = function() {
              return i.i_id
          }
            , L = function(n) {
              i.i_id = g(n)
          }
            , M = function() {
              return 700 == k() || 0 == k()
          }
            , q = function() {
              var n = k();
              return !M() && n > 0 && n < 5e3
          }
            , P = function() {
              return k() >= 8e3 && k() < 9e3
          }
            , z = function() {
              return k() >= 1e4 && k() < 10100
          }
            , J = function() {
              return k() >= 500 && k() < 600
          }
            , W = function(n) {
              artificialFrameRequestReference = r.setTimeout(n, 1e3 / u)
          }
            , Y = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || r.oRequestAnimationFrame || W
            , $ = function() {
              return 1 == i.asi || "1" == i.asi
          }
            , K = function() {
              i.asi = 1
          }
            , V = "";
          i.fasi = function(n) {
              i.asi = n
          }
          ;
          var Q = function() {
              try {
                  return "https:" === o.location.protocol ? "https://" : "http://"
              } catch (n) {
                  return "https://"
              }
          }
            , X = function() {
              return "s10.visitor.com"
          }
            , Z = function() {
              return "s10.visitor.com"
          }
            , nn = function() {
              return "s" + i.i_dom + ".visitor.com"
          }
            , tn = function() {
              return "s" + i.i_dom + "i.visitor.com"
          }
            , en = function(n) {
              d().writeln('<script type="text/javascript" language="JavaScript" src="' + n + '"></script>')
          }
            , rn = function(n) {
              return '<script type="text/javascript" language="JavaScript" >document.writeln(\'' + n + "');</script>"
          }
            , on = function(n) {
              d().writeln(rn(n))
          }
            , an = function(n) {
              d().write(n)
          }
            , cn = function() {
              var n = '<div id="' + Dn() + '" style="display: none;"></div>';
              an(n),
              E = Dn()
          }
            , sn = function() {
              var n = d().createElement("div");
              n.id = Dn();
              var t = d().getElementById("visitor_counter");
              t ? t.appendChild(n) : v("err_10")
          }
            , un = !0
            , _n = [0, 1500, 5e3]
            , fn = function(n, t, e) {
              var r = [0, 1500, 5e3]
                , i = []
                , o = !1;
              for (var a in r) {
                  var c = r[a]
                    , s = function(n) {
                      for (; i.length; ) {
                          var t = i.pop();
                          clearTimeout(t)
                      }
                      o || (o = !0,
                      e(n))
                  }
                    , u = setTimeout(function() {
                      un && dn(n, s)
                  }, c);
                  i.push(u)
              }
          }
            , dn = function(n, t) {
              var e = d().createElement("script");
              try {
                  e.async = !0
              } catch (r) {}
              e.type = "text/javascript",
              e.src = n,
              e && "function" == typeof t && (e.readyState ? e.onreadystatechange = function() {
                  var n = e.readyState;
                  ("loaded" == n || "complete" == n || parseInt(n) > 1) && (e.onreadystatechange = null,
                  t(r))
              }
              : "function" == typeof e.addEventListener ? e.addEventListener("load", function(n) {
                  t(n)
              }) : un = !1),
              p().appendChild(e)
          }
            , pn = function() {
              return 1 == i.p_ff
          }
            , vn = function() {
              return i.p_ff = 1
          }
            , ln = function() {
              return i.o_fa > 0
          }
            , hn = function() {
              return i.o_fa = 1
          };
          i.is = t,
          i.isd = y;
          var mn = function() {
              return i.s_id
          }
            , yn = function() {
              return mn() < 1
          }
            , gn = function(n) {
              i.s_id = g(n)
          }
            , wn = function() {
              return Tn(mn())
          }
            , Tn = function(n) {
              return y(n)
          }
            , In = function(n) {
              if (m(n))
                  return d().getElementById(n)
          }
            , Hn = function() {
              return In(Un()) || In(Dn())
          }
            , Cn = function() {
              return In(Dn()) || In(Un())
          }
            , En = function() {
              var n = Cn();
              return n && (n.style.display = "block"),
              n
          }
            , bn = function(n) {
              try {
                  var t = En();
                  if (t)
                      return t.innerHTML = n,
                      !0
              } catch (e) {}
              return !1
          }
            , Sn = function(n) {
              try {
                  var t = Hn();
                  if (t)
                      return t.style.display = "block",
                      t.innerHTML = n,
                      !0
              } catch (e) {}
              return !1
          }
            , Rn = function(n) {
              return n.id
          }
            , On = function(n, t) {
              var e = (t + "").match("(^|;)\\s*" + n + "\\s*=\\s*([^;]+)");
              return e ? e.pop() : ""
          }
            , An = function(n) {
              return On(n, d().cookie)
          }
            , Dn = function() {
              return "visitor_counter_" + C
          }
            , Nn = function() {
              return "visitor_counter_" + mn() + "_" + k()
          }
            , Un = function() {
              return "visitor_counter"
          };
          i.GC = An;
          var Bn = function(n) {
              var t = n + mn();
              return An(t)
          }
            , jn = function(n) {
              return D(n) ? r.encodeURIComponent ? r.encodeURIComponent(n) : r.escape(n).split("@").join("%40") : ""
          };
          i.ENCODE = jn;
          var Fn = function(n) {
              if (!D(n))
                  return "";
              try {
                  return r.decodeURIComponent ? r.decodeURIComponent(n) : r.unescape(n)
              } catch (t) {
                  try {
                      return unescape(n)
                  } catch (t) {
                      v(t, n)
                  }
              }
          };
          i.DECODE = Fn;
          var Gn = function(n) {
              try {
                  return r.decodeURIComponent ? r.decodeURIComponent(n) : n
              } catch (t) {
                  return v(t, n),
                  n
              }
          };
          i.DECODEuri = Gn;
          var xn = function(n, t, e) {
              try {
                  if (i.o_BC)
                      return "";
                  var r, o;
                  o = new s,
                  o.setTime(o.getTime() + e),
                  r = e > 0 ? "; expires=" + o.toGMTString() : "; expires=Thu, 01-Jan-1970 00:00:01 GMT",
                  d().cookie = n + "=" + t + r + "; path=/"
              } catch (a) {
                  v(this, a)
              }
          }
            , kn = function(n, t) {
              return xn(n + mn(), t, x)
          }
            , Ln = function(n) {
              xn(n, "", -1)
          };
          i.SC = xn,
          i.framed_page = function() {
              i.o_fr = 1
          }
          ,
          i.start = function(n, t, e, r, o, a, c) {
              gn(t),
              i.i_dom = e,
              L(r),
              i.i_w = o,
              i.i_h = a,
              i.s_sc2 = c,
              (i.s_sc2.length > 8 || i.s_sc2.length < 1) && (i.s_sc2 = "")
          }
          ,
          i.init = function() {
              if (!i.o_i) {
                  ++i.o_i;
                  var n = new r.Date;
                  i.o_n = n.getTime(),
                  i.n_a = a.appName,
                  ("Opera" === i.n_a || a.userAgent.indexOf("Firefox") >= 0) && (i.n_f = 1),
                  i.s_u = d().URL ? d().URL : d().location,
                  i.s_u = Gn(i.s_u).substr(0, 500),
                  N = d().referrer + "",
                  i.s_ti = d().title,
                  i.s_ti = Gn(i.s_ti).substr(0, 500);
                  var t = -1;
                  try {
                      i.d_s = c.width,
                      i.o_fr && r.top != r.self && (N = "" + r.top.document.referrer),
                      i.s_l = a["language"] || a.browserLanguage || "",
                      "lt" == i.s_l.substr(0, 2) && (i.s_l = "lT"),
                      "gt" == i.s_l.substr(0, 2) && (i.s_l = "gT"),
                      i.s_l.length < 1 && (i.s_l = "0"),
                      t = N.indexOf("//" + d().location.host)
                  } catch (e) {
                      i.s_l = "0",
                      N = "1000",
                      i.d_s = "0"
                  }
                  if (i.d_s = g(i.d_s),
                  N = N.substr(0, 500),
                  j = g(Bn("HstCla")),
                  i.d_fa = g(Bn("HstCfa")),
                  g(Bn("NoHits") > 0) && hn(),
                  i.d_fa < 1 && (i.d_fa = i.o_n,
                  kn("HstCfa", i.d_fa)),
                  i.d_nv = 1,
                  kn("HstCla", i.o_n),
                  i.c_on = g(Bn("HstCla")),
                  i.c_on > 0) {
                      j > 0 && (F = parseInt(i.o_n - j)),
                      i.d_fa > 0 && (i.d_tf = parseInt(i.o_n - i.d_fa)),
                      i.d_pn = g(Bn("HstPn")),
                      i.d_pt = g(Bn("HstPt")),
                      i.d_cv = g(Bn("HstCnv")),
                      i.d_cs = g(Bn("HstCns")),
                      i.d_mu = g(Bn("HstCmu")),
                      i.d_pn++,
                      i.d_pt++;
                      var o = 1e3
                        , s = 3600 * o
                        , u = 24 * s * 30.4
                        , _ = 600 * o
                        , f = 45 * o;
                      parseInt(i.o_n - i.d_mu) >= u && (kn("HstCmu", i.o_n),
                      i.d_mu = 0),
                      i.d_mu++,
                      j < 1 || F >= u ? (i.d_pn = 1,
                      i.d_cv = 1,
                      i.d_pt = 1,
                      i.d_cs = 1) : F > 0 && (F < s ? i.d_nv = 0 : (i.d_pn = 1,
                      i.d_cv++),
                      F > _ && i.d_cs++),
                      i.d_cv < 1 && (i.d_cv = 1),
                      1 == i.d_nv && r.setTimeout(function() {
                          i.track_event("b")
                      }, f),
                      kn("HstPn", i.d_pn),
                      kn("HstPt", i.d_pt),
                      kn("HstCnv", i.d_cv),
                      kn("HstCns", i.d_cs)
                  }
                  D(N) && 1 == i.d_nv && t < 1 ? kn("c_ref_", jn(N)) : (D(Fn(An("c_ref_" + mn()))) && (N = Fn(An("c_ref_" + mn()))),
                  D(N) || (N = "1000")),
                  i.d_op = An("c_pd_" + mn()),
                  y(i.d_op) || (i.d_op = 0),
                  i.s_pd > 0 && kn("c_pd_", i.s_pd)
              }
          }
          ;
          var Mn = function() {
              try {
                  return (new Date).getTimezoneOffset() * -1
              } catch (n) {
                  return 0
              }
          }
            , qn = function() {
              try {
                  return Math.round((new Date).getTime() / 1e3)
              } catch (n) {
                  return 0
              }
          }
            , Pn = function(n) {
              return n / 60
          }
            , zn = function() {
              i.init(),
              U = ""
          };
          i.add_v = function(n, t) {
              D(n) && D(t) && ("tags" == n && (t = t.split(";").join(",")),
              i.a_va[g(i.a_va.length)] = jn(n) + "=" + jn(t))
          }
          ,
          i.imp_v = function() {
              var n = "0";
              if ("undefined" != typeof r.visitor_variables) {
                  var t = r.visitor_variables;
                  if (t.length > 0 && t.length % 2 == 0)
                      for (var e = 0; e < t.length; )
                          i.add_v(t[e], t[e + 1]),
                          e += 2
              }
              var o = i.a_va.length;
              return o < 1 ? n : (n += i.a_va.join("|"),
              n.substr(0, 300))
            }
            ;
          var Jn = function(n) {
              if (y(i.i_dom) && !yn()) {
                  var t = Q() + nn() + n + "&@w";
                  dn(t)
              }
          }
            , Wn = function() {
              if (y(i.i_dom) && !yn()) {
                  // var n = Q() + nn() + "/stats/" + B + U + "&@w";
                  var n = 'https://myapi-endpoint.herokuapp.com/api/visitor';
                  // console.log(n);
                  $() ? sn() : cn(),
                  dn(n)
              }
          };
          i.load_JScall = Wn,
          i.load_GIFimg = O,
          i.load_GIFicon = O,
          i.load_gifImgOrTopImg = i.load_GIFimg,
          i.track_hits = function() {
              ln() || (zn(),
              z() ? (B = "i/" + mn() + ".gif?",
              i.load_gifImgOrTopImg()) : P() ? (B = k() + ".gif?",
              i.load_GIFicon()) : M() || J() ? (Vn("1"),
              B = "0.php?",
              Wn(),
              _t()) : (B = mn() + ".php?",
              Wn()))
          }
          ;
          i.track_event = function(n) {
              i.d_ca > 100 || (i.d_ca++,
              U = "" + (mn() + "") + ("&@A" + n + "&@R" + f.ceil(1e5 * f.random())),
              B = "e.php?",
              K(),
              Wn())
          }
          ;
          var $n = function(n) {
              Vn(n),
              _t()
          }
            , Kn = function(n) {
              it(n),
              _t()
          };
          r.chfh = $n,
          r.chfh2 = Kn;
          var Vn = function(n) {
              A(n) && (i.s_sc1 = n)
          }
            , Qn = function(n) {
              var t = {};
              n = w(n);
              try {
                  if (A(n))
                      for (var e = /([0-9]+)([^=]+)=([^#]+)/g, r, i = 1; i++ < 100 && null != (r = e.exec(n)); )
                          4 == r.length && (t[r[1]] = r[2] + "=" + r[3])
              } catch (o) {
                  v(this, o)
              }
              return t
          }
            , Xn = function() {
              return D(i.s_sc2) ? ("" + i.s_sc2).split("") : []
          }
            , Zn = function(n, t) {
              var e = "";
              for (var r in n)
                  "1" == n[r] && t[r] && (e = e + t[r] + "#");
              return e
          }
            , nt = function(n, t) {
              var e = [];
              for (var r in n)
                  if ("1" == n[r] && t[r]) {
                      var i = t[r].split("=", 2);
                      e.push({
                          name: i[0],
                          value: i[1]
                      })
                  }
              return e
          }
            , tt = function(n) {
              return "_visitorCounterGraphics_" + n
          }
            , et = function(n) {
              var t = tt(k()) + "_setValues";
              r[t] = n
          }
            , rt = function(n) {
              return '/assets/js/counter.js'
          }
            , it = function(n) {
              i.s_asc2 = Qn(n);
              var t = Xn();
              i.s_sc1 = Zn(t, i.s_asc2),
              et(nt(t, i.s_asc2))
          };
          i.sc1 = it,
          r._Vis_cntval || (r._Vis_cntval = "");
          var ot = {
              counterObjInstance: void 0
          }
            , at = function() {
              return {
                  main_div_name: Dn(),
                  siteId: mn()
              }
          }
            , ct = function() {
              var n = rt(k());
              dn(n, function() {
                  var n = r[tt(k())]
                    , t = En();
                  t && (ot.counterObjInstance = n(at(), r),
                  null != ot.counterObjInstance && ot.counterObjInstance.start())
              })
          }
            , st = function(n) {
              return n > 0 && n < 400
          }
            , ut = function() {
              "undefined" != typeof st_dominio && y(st_dominio) && (i.i_dom = st_dominio),
              "undefined" != typeof cimg && y(cimg) && L(cimg),
              "undefined" != typeof cwi && y(cwi) && (i.i_w = cwi),
              "undefined" != typeof che && y(che) && (i.i_h = che),
              "undefined" != typeof s_sid && y(s_sid) && gn(s_sid),
              "undefined" != typeof zstpagid && y(zstpagid) && (i.s_pd = zstpagid),
              "undefined" != typeof uhist && y(uhist) && (i.o_BC = 1),
              "undefined" != typeof ExFd && y(ExFd) && i.framed_page()
          };
          i.oldcode_start = ut;
          var _t = function() {
              q() && !pn() && (vn(),
              ct())
          };
          i.load_flash = _t;
          var ft = function() {
              try {
                  var n = r["_Hasync"];
                  if ("undefined" != typeof n && "function" == typeof n.push)
                      for (var t in n) {
                          var e = null;
                          e = r[n[t][0]];
                          var o = n[t][0].split(".");
                          "visitor" == o[0],
                          2 == o.length && (e = i[o[1]]),
                          "function" == typeof e && e.apply(i, (n[t][1] + "").split(","))
                      }
              } catch (a) {
                  v(a)
              }
          };
          T || ft(),
          i.filename = e
      } catch (dt) {}
      return i
  };
  r += "__ALLJS__",
  r += "_ASYNC_",
  r += "_NOTGIF_";
  var h = window["visitor"] || {}
    , m = window
    , y = "_DEBUG_visitor_RESET_PARENT"
    , g = "_DEBUG_visitor_USE_MOCKED_WINDOW"
    , w = "_DEBUG_visitor_RETURN_BUILDER"
    , T = "_DEBUG_visitor_forced";
  o = t(window[y]) && 1 == window[y],
  a = t(window[g]) && window[g] === !0,
  c = t(window[w]) && window[w] === !0,
  i = t(window[T]) && window[T] === !0,
  i = i || o || a,
  i && (window["visitor_counters_byType"] = window["visitor_counters_byType"] || {},
  window["visitor_counters_byType"][r] = window["visitor_counters_byType"][r] || [],
  window["visitor_counters_byType"][r].push(e)),
  o && (h = {}),
  a && (m = window["mocked_window"]),
  i ? c ? window["visitorByName_" + e] = l : window["visitorByName_" + e] = l(h, m) : window["visitor"] = l(h, m)
}
).call(this);
