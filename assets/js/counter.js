
          var _Hasync = _Hasync || [];
          _Hasync.push(["visitor.start", "1,4042462,4,3,170,30,00011000"]);
          _Hasync.push(["visitor.fasi", "1"]);
          _Hasync.push(["visitor.track_hits", ""]);
          // (function() {
          //   var hs = document.createElement("script");
          //   hs.type = "text/javascript";
          //   hs.async = true;
          //   hs.src = "//s10.visitor.com/js15_as.js";
          //   (
          //     document.getElementsByTagName("head")[0] ||
          //     document.getElementsByTagName("body")[0]
          //   ).appendChild(hs);
          // })();
        
(function() {
  var n = "0.2.1", e, t = "undefined", a = 25, r = parseInt(1e3 / a), o = e, i = {
      "function": !0,
      object: !0
  }, s = {
      DEBUG_MODE: !1,
      counterID: "3",
      instanceID: "externalConf###Instanceid"
  }, u = function(n) {
      return typeof n !== t
  }, c = "visitor_CANVAS_DEBUG_ON";
  s.DEBUG_MODE = u(window[c]) && 1 == window[c];
  var f = function() {
      return s.instanceID
  }, d = "_visitorCounterGraphics_", l, v = function() {
      return d + s.counterID
  }, h = function(n) {
      return !("string" != typeof n || "" == n)
  }, b = function() {
      try {
          s.DEBUG_MODE && u(console) && console.log.apply(this, arguments)
      } catch (n) {}
  }, p = function(t, a) {
      var i = t || {};
      try {
          var c = function(n) {
              var e = "autostart";
              return "undefined" != typeof n[e] && n[e] === !0
          }
            , f = {
              ANIMATION_RUNNING_STATUS: !0,
              ANIMATION_STARTED: !1,
              AUTOSTART: c(i),
              _STOPPED: !1,
              INSTANCE_ID: "-" + parseInt(1e4 * Math.random())
          }
            , d = function() {
              return f.INSTANCE_ID
          }
            , h = 100
            , p = 1
            , g = function() {
              return a.document
          }
            , m = function(n) {
              return u(n) && !!g().getElementById(n)
          }
            , w = function(n) {
              o = a.setTimeout(n, r)
          }
            , A = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.msRequestAnimationFrame || a.oRequestAnimationFrame || w
            , C = a["Date"] || {}
            , x = function(n, e) {
              for (var t in n)
                  e.hasOwnProperty(t) && (e[t] = n[t])
          };
          i.getInstanceID = d;
          var T = v();
          i.IS_visitor_CANVAS = !0,
          i.globalObjectName = T,
          i.$window = a;
          var y = function(n) {
              return m(n) ? g().getElementById(n) : e
          }
            , S = {
              w: 0,
              h: 0,
              yBase: 0,
              xBase: 0,
              hasShadow: !1,
              hasLabel: !1,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
              shadowBlur: 1,
              doMouseOverOut: 1
          }
            , _ = {
              msLastFrameDrawn: 0,
              msPerFrame: r,
              frameCounter: 0,
              isInAnimationTransition: !1,
              animation_duration_inFrames: 20,
              waitframesBetweenTwoAnimations: 80,
              framesBetweenTwoAnimations: 100,
              currentLoopFrame: 0,
              autoTriggerTextChange_onFrame: e,
              customization: {}
          }
            , I = {
              domCanvasObject: null,
              canvas2dContext: null,
              canvasProperties: S
          }
            , B = function() {
              var n = {}
                , t = n.hasOwnProperty
                , a = 0
                , r = 0
                , o = {
                  blockMessages: !1,
                  recordMessages: !1,
                  messageLog: [],
                  printMessages: !1,
                  messagePassedCount: 0,
                  subscribersCount: 0,
                  topicsCount: 0,
                  _topics: n
              }
                , i = function(e) {
                  return t.call(n, e)
              }
                , s = function(e) {
                  return o.printMessages && console.log(d(), "addTopic", e),
                  r++,
                  o.topicsCount++,
                  r > 50 && b(d(), "Lot of topics registered!", e),
                  n[e] = []
              }
                , u = function(e) {
                  return n[e]
              }
                , c = function(e, t, r) {
                  o.printMessages && console.log(d(), "subscribe", e, t, r),
                  o.recordMessages && o.messageLog.push(["subscribe", e, t, r]),
                  r = r || h,
                  i(e) || s(e);
                  var c = u(e).push({
                      callback: t,
                      priority: t
                  }) - 1;
                  return a++,
                  o.subscribersCount++,
                  a > 50 && b(d(), "Lot of topics registered!", e),
                  {
                      remove: function() {
                          delete n[e][c]
                      }
                  }
              }
                , f = function(n, e) {
                  var t = "no-topic-found";
                  n != t && l(t, {
                      topic: n,
                      info: e
                  })
              }
                , l = function(t, a) {
                  if (o.messagePassedCount++,
                  o.printMessages && console.log(d(), "publish", t, a),
                  o.recordMessages && o.messageLog.push(["publish", t, a]),
                  !o.blockMessages)
                      return i(t) ? (n[t].slice().sort(function(n, e) {
                          return n.priority - e.priority
                      }).forEach(function(n) {
                          n.callback(a != e ? a : {})
                      }),
                      void 0) : (f(t, a),
                      void 0)
              }
                , v = function(n, e) {
                  A(function() {
                      l(n, e)
                  })
              };
              return {
                  subscribe: c,
                  publish: l,
                  publishAsync: v,
                  debugObj: o
              }
          }()
            , F = function() {
              return s.counterID
          }
            , N = function() {
              var n = "siteId";
              return i[n] = i[n] || 0
          }
            , O = function() {
              var n = "main_div_name";
              return i[n] || "visitor_counter_" + N() + "_" + F()
          }
            , M = []
            , E = function() {
              return l = O(),
              l
          }
            , k = function() {
              return E() + "_canvas"
          }
            , U = function() {
              return 's'
          }
            , V = function() {
              a.location = U()
          }
            , L = function() {
              if (1 == I.canvasProperties.doMouseOverOut) {
                  var n = z().canvasProperties;
                  n.yBase = 2,
                  n.xBase = 2,
                  n.shadowOffsetX = 0,
                  n.shadowOffsetY = 0
              }
              z().domCanvasObject.style.cursor = "pointer"
          }
            , R = function() {
              if (1 == I.canvasProperties.doMouseOverOut) {
                  var n = z().canvasProperties;
                  n.yBase = 0,
                  n.xBase = 0,
                  n.shadowOffsetX = 2,
                  n.shadowOffsetY = 2
              }
          }
            , P = function() {
              var n = z()
                , e = n.canvasProperties
                , t = n.canvas2dContext;
              t.shadowOffsetX = e.shadowOffsetX,
              t.shadowOffsetY = e.shadowOffsetY,
              t.shadowBlur = e.shadowBlur,
              t.shadowColor = "rgba(0,0,0,0.2)"
          }
            , X = function() {
              return y(E())
          }
            , D = function() {
              var n = !!X();
              return n
          }
            , Q = function() {
              try {
                  if (!D())
                      return B.publish("error", {
                          msg: "validateDomcontainer not found"
                      }),
                      void 0;
                  var n = X()
                    , e = z().canvasProperties
                    , t = '<canvas id="' + k() + '" width="' + e.w + '" height="' + e.h + '" ></canvas>'
                    , r = '<span>' + t + "</span>";
                  n.innerHTML = r,
                  z().domCanvasObject = y(k());
                  var o = z().domCanvasObject;
                  z().canvas2dContext = o.getContext("2d"),
                  "addEventListener"in a ? (o.addEventListener("mouseover", function() {
                      L()
                  }),
                  o.addEventListener("mouseout", function() {
                      R()
                  })) : o.onclick = function() {
                      V()
                  }
              } catch (i) {
                  b(d(), "drawCanvas", i)
              }
          }
            , Y = function() {
              try {
                  if (f.ANIMATION_STARTED)
                      return;
                  if (f._STOPPED)
                      return;
                  B.publish("draw-callback-requested-reconfiguration", {}),
                  B.publish("starting_pre", {
                      context: i
                  }),
                  f.ANIMATION_STARTED = !0,
                  B.publish("started", {
                      context: i
                  }),
                  B.publish("drawcanvas_pre", {
                      context: i
                  }),
                  Q(),
                  B.publish("drawcanvas_post", {
                      context: i
                  }),
                  W(),
                  B.publish("animationLoop_started", {
                      context: i
                  })
              } catch (n) {
                  b(d(), "startNow", n, n.message)
              }
          }
            , J = function(n, e, t) {
              e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent ? e.attachEvent("on" + n, t) : e[n] = t
          }
            , j = function() {
              try {
                  B.publish("appendedStart", {
                      context: i,
                      type: "animFrame"
                  }),
                  A(Y)
              } catch (n) {
                  b(d(), "startAsap", n.message, n)
              }
          }
            , G = function(n, e) {
              M.push({
                  name: n,
                  callback: e
              })
          }
            , H = function() {}
            , q = function() {
              M.forEach(function(n) {
                  n.callback(i.getCanvas2dContext(), _, z())
              })
          }
            , K = function() {
              u(o) && a.clearTimeout(o)
          }
            , W = function() {
              f._STOPPED || A(function() {
                  en(q),
                  f.ANIMATION_RUNNING_STATUS && W()
              })
          };
          B.subscribe("setAnimationProperties", function(n) {
              x(n, _)
          }),
          B.subscribe("draw-callback-publish-reconfiguration", function(n) {
              try {
                  n.canvasCallbacks.forEach(function(n) {
                      M.push({
                          name: n.name,
                          callback: n.cb,
                          priority: n.priority
                      })
                  }),
                  M = M.slice().sort(function(n, e) {
                      return n.priority - e.priority
                  })
              } catch (e) {
                  b(d(), "animationLoop", e.message, e)
              }
          }),
          B.subscribe("configuration-changed", function(n) {
              M = [],
              B.publish("draw-callback-requested-reconfiguration", {})
          });
          var Z = function(n) {
              var e = n != f.ANIMATION_RUNNING_STATUS;
              return e && (0 == f.ANIMATION_RUNNING_STATUS && 1 == n,
              1 == f.ANIMATION_RUNNING_STATUS && 0 == n && K(),
              f.ANIMATION_RUNNING_STATUS = n),
              e
          }
            , z = function() {
              return I
          }
            , $ = function() {
              var n = !1;
              0 == _.frameCounter && B.publish("FIRST-FRAME", {});
              var e = C.now()
                , t = e - _.msLastFrameDrawn;
              if (t > _.msPerFrame) {
                  var a = t % _.msPerFrame;
                  _.msLastFrameDrawn = e - a,
                  n = !0
              }
              return n
          }
            , nn = function() {
              if (!(_.animation_duration_inFrames < 1)) {
                  var n = _.animation_duration_inFrames + _.waitframesBetweenTwoAnimations;
                  _.currentLoopFrame = _.frameCounter % n;
                  var e = 0 == _.currentLoopFrame
                    , t = _.currentLoopFrame >= _.animation_duration_inFrames;
                  e && (_.isInAnimationTransition = !0,
                  B.publish("drawing-triggered-animation-start", _)),
                  t && _.isInAnimationTransition && (_.isInAnimationTransition = !1,
                  B.publish("drawing-triggered-animation-end", _))
              }
          }
            , en = function(n) {
              var e = $();
              e && (_.frameCounter++,
              nn(),
              n())
          }
            , tn = function(n) {
              return n(i.getCanvas2dContext())
          }
            , an = function() {
              var n = 17
                , e = 2
                , t = 1
                , a = z().canvasProperties
                , r = 0;
              a.hasShadow && (r = r + e + t),
              a.hasLabel && (a.h = a.h + n),
              a.w = a.w + r,
              a.h = a.h + r
          }
            , rn = function(n) {
              x(n, z().canvasProperties),
              an()
          };
          B.subscribe("setCanvasProperties", rn, 10);
          var on = function() {
              i.onCanvas2dContext(function(n) {
                  var e = z().canvasProperties;
                  n.clearRect(0, 0, e.w, e.h),
                  e.hasShadow && P()
              })
          };
          B.subscribe("clear-canvas-rectangle", on, 10);
          var sn = function(n, e) {
              z().hasShadow && (n.shadowOffsetX = 0,
              n.shadowOffsetY = 0,
              n.shadowBlur = 0,
              n.shadowColor = "transparent")
          }
            , un = function(n, t) {
              t.autoTriggerTextChange_onFrame !== e && t.currentLoopFrame == t.autoTriggerTextChange_onFrame && B.publish("drawing-change-text", {})
          }
            , cn = function(n) {
              B.publish("draw-callback-publish-reconfiguration", {
                  canvasCallbacks: [{
                      cb: sn,
                      priority: 14,
                      name: "stopApplyingShadowOnCanvas"
                  }, {
                      cb: un,
                      priority: 5,
                      name: "autoUpdateText"
                  }]
              })
          };
          B.subscribe("draw-callback-requested-reconfiguration", cn, 15),
          i.__CODE_VERSION = n,
          i.getCanvasObject = z,
          i.getCanvas2dContext = function() {
              return z().canvas2dContext
          }
          ,
          i.onCanvas2dContext = tn,
          i.getXYCanvas = function() {
              return {
                  x: z().canvasProperties.xBase,
                  y: z().canvasProperties.yBase
              }
          }
          ,
          i.addDrawCallback = G,
          i.getCanvasProperties = function() {
              return z().canvasProperties
          }
          ,
          i.setCanvasProperties = function(n) {
              for (var e in n)
                  n.hasOwnProperty(e) && (I.canvasProperties[e] = n[e])
          }
          ,
          i.updateCanvasProperties = function(n) {
              i.setCanvasProperties(n(z().canvasProperties))
          }
          ,
          i.getAnimationFrames = function() {
              return _.frameCounter
          }
          ,
          i.getAnimationControl = function() {
              return _
          }
          ,
          i.setAnimationControl = function(n) {
              for (var e in n)
                  n.hasOwnProperty(e) && (_[e] = n[e])
          }
          ,
          i.start = j,
          i.changeRunningStatus = Z,
          i.getRunningStatus = function() {
              return f.ANIMATION_RUNNING_STATUS
          }
          ,
          i.eventBus = B,
          i.getDebugMode = function() {
              return s.DEBUG_MODE
          }
          ,
          function() {
              var n = this;
              n.IS_visitor_CANVAS || (n = {});
              var t = n.statsText = {}
                , a = {
                  xBase: 0,
                  yBase: 0
              }
                , r = function() {
                  return a
              }
                , o = function() {
                  var e = n.getXYCanvas();
                  return a.xBase = e.x,
                  a.yBase = e.y,
                  a
              }
                , i = []
                , s = {
                  stats_values: [],
                  indexStatToShow: 0,
                  drawValueCallback: e,
                  drawValueCallbackWithValue: e,
                  drawMetricCallback: e
              }
                , u = 25
                , c = 0
                , f = function() {
                  return c % u == 1
              }
                , d = function(n) {
                  i = n
              };
              n.eventBus.subscribe("set-textbox-style", function(e) {
                  i = e,
                  n.eventBus.publish("configuration-changed", {})
              }),
              n.eventBus.subscribe("canvas-drawValueFunction", function(n) {
                  "undefined" != typeof n["transformationFunction"] && (s.drawValueCallback = n["transformationFunction"])
              });
              function l(n, e, t, a) {
                  n = (n + "").replace(/[^0-9+\-Ee.]/g, "");
                  var r = isFinite(+n) ? +n : 0
                    , o = isFinite(+e) ? Math.abs(e) : 0
                    , i = "undefined" == typeof a ? "," : a
                    , s = "undefined" == typeof t ? "." : t
                    , u = ""
                    , c = function(n, e) {
                      var t = Math.pow(10, e);
                      return "" + (Math.round(n * t) / t).toFixed(e)
                  };
                  return u = (o ? c(r, o) : "" + Math.round(r)).split("."),
                  u[0].length > 3 && (u[0] = u[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, i)),
                  (u[1] || "").length < o && (u[1] = u[1] || "",
                  u[1] += new Array(o - u[1].length + 1).join("0")),
                  u.join(s)
              }
              var v = function(t) {
                  if (s.stats_values = t,
                  s.drawValueCallback != e) {
                      var a = t[0].value;
                      s.drawValueCallbackWithValue = s.drawValueCallback(a)
                  }
                  n.eventBus.publish("configuration-changed", {})
              }
                , h = function() {
                  return s.stats_values
              }
                , b = function(n) {
                  if (n === s.stats_values)
                      return !1;
                  if (typeof n == typeof [])
                      for (var e in n)
                          if (n.hasOwnProperty(e) && typeof n[e] != typeof {})
                              return !1;
                  return !0
              }
                , p = function() {
                  return n.globalObjectName + "_setValues"
              }
                , g = function() {
                  if (f()) {
                      var e = p();
                      if ("undefined" != typeof n.$window && "undefined" != typeof n.$window[e]) {
                          var t = n.$window[e];
                          b(t) && v(t)
                      }
                  }
              }
                , m = function(n) {
                  return ("" + n).match(/^\s*[0-9]+\s*$/) ? l(n, 0, "", " ") : n
              }
                , w = function(e, t) {
                  return function(a) {
                      a.shadowColor = "transparent",
                      a.font = e.name.font,
                      a.textAlign = e.name.align,
                      a.fillStyle = e.name.color,
                      a.fillText(t.name, e.name.x + r().xBase, e.name.y + r().yBase),
                      a.font = e.value.font,
                      a.textAlign = e.value.align,
                      a.fillStyle = e.value.color;
                      var o = t.value;
                      try {
                          o = m(t.value)
                      } catch (i) {
                          n.debug(i)
                      }
                      a.fillText(o, e.value.x + r().xBase, e.value.y + r().yBase)
                  }
              }
                , A = function() {
                  s.indexStatToShow += i.length,
                  s.indexStatToShow >= s.stats_values.length && (s.indexStatToShow = 0)
              }
                , C = !1;
              n.eventBus.subscribe("draw-hideText", function(n) {
                  C = !0
              }, 11),
              n.eventBus.subscribe("draw-unHideText", function(n) {
                  C = !1
              }, 11);
              var x = function(n) {
                  if (!C) {
                      var e, t, a = s.indexStatToShow, r = h(), o = r.length;
                      r.length > i.length && (o = i.length);
                      for (var u = 0; u < o && (a >= r.length && (a = 0),
                      r[a]); u++)
                          e = i[u],
                          t = r[a],
                          w(e, t)(n),
                          a++
                  }
              }
                , T = function(n, t) {
                  return c++,
                  g(),
                  o(),
                  s.drawValueCallbackWithValue != e ? (s.drawValueCallbackWithValue(n),
                  void 0) : (x(n),
                  void 0)
              }
                , y = function(e) {
                  n.eventBus.publish("draw-callback-publish-reconfiguration", {
                      canvasCallbacks: [{
                          cb: T,
                          priority: 15,
                          name: "show_stats_draw"
                      }]
                  })
              };
              n.eventBus.subscribe("draw-callback-requested-reconfiguration", y, 11);
              var S = n.eventBus.subscribe("drawing-change-text", A, 10);
              t.draw = T,
              t.setBoxes = d,
              t.setValues = v
          }
          .call(i),
          function() {
              var n = this;
              n.IS_visitor_CANVAS || (n = {});
              var t = {
                  main: "",
                  source: e,
                  loaded: !1
              };
              t.main = "data:image/png;base64,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";
              var a = function(e) {
                  var a = t.source = new Image;
                  a.onload = function() {
                      t.loaded = !0,
                      n.eventBus.publish("background-image-loaded", t),
                      n.eventBus.publish("configuration-changed", {})
                  }
                  ,
                  a.src = t.main
              };
              n.eventBus.subscribe("FIRST-FRAME", a, 5),
              n.image_base64_src = t
          }
          .call(i),
          function() {
              var n = this;
              n.IS_visitor_CANVAS || (n = {});
              var t = n.counter = {};
              t.ID = "3",
              t.properties = {
                  w: 170,
                  h: 30,
                  hasShadow: !0
              };
              var a = !1
                , r = {
                  backgroundImageObject: e,
                  crop: {
                      background: {
                          srcX: 0,
                          srcY: 0,
                          w: 170,
                          h: 30
                      },
                      left_door: {
                          srcX: 170,
                          srcY: 0,
                          w: 14,
                          h: 30
                      },
                      right_door: {
                          srcX: 184,
                          srcY: 0,
                          w: 14,
                          h: 30
                      }
                  }
              }
                , o = [{
                  name: {
                      x: 28,
                      y: 18,
                      align: "left",
                      color: "#ffffff",
                      font: "11px Arial"
                  },
                  value: {
                      x: 140,
                      y: 18,
                      align: "right",
                      color: "#ffffff",
                      font: "11px Arial"
                  }
              }];
              n.eventBus.publish("set-textbox-style", o);
              var i = {
                  background: {
                      x: 0,
                      y: 0
                  },
                  left_door: {
                      x: 71,
                      y: 0,
                      xOpened: 10,
                      xClosed: 71
                  },
                  right_door: {
                      x: 85,
                      y: 0,
                      xClosed: 85
                  },
                  blueBox: {
                      x: 15,
                      y: 5,
                      w: 140,
                      h: 20
                  }
              }
                , s = {
                  animation_duration_inFrames: 20,
                  autoTriggerTextChange_onFrame: 20,
                  waitframesBetweenTwoAnimations: 110
              }
                , u = function(n) {
                  var e = i;
                  e.frames_for_doors_animation_closing = n / 2,
                  e.frames_for_doors_animation_opening = n / 2,
                  e.doors_movements_pixPerFrame = (e.left_door.xClosed - e.left_door.xOpened) / e.frames_for_doors_animation_opening
              };
              u(s.animation_duration_inFrames),
              n.eventBus.publish("setCanvasProperties", t.properties),
              n.eventBus.publish("setAnimationProperties", s);
              var c = function() {
                  var n = i.blueBox;
                  n.x = i.left_door.x + r.crop.left_door.w,
                  n.w = i.right_door.x - n.x
              }
                , f = function(e) {
                  c();
                  var t = i.blueBox
                    , a = e.createLinearGradient(0, t.y, 0, t.y + t.h);
                  a.addColorStop(0, "rgba(0,127,255,0.4)"),
                  a.addColorStop(.5, "rgba(0,127,255,0.99)"),
                  a.addColorStop(1, "rgba(0,127,255,0.4)");
                  var r = n.getXYCanvas();
                  e.fillStyle = a,
                  e.fillRect(t.x + r.x, t.y + r.y, t.w, t.h)
              }
                , d = function(n) {
                  var e = n
                    , t = i
                    , a = 0;
                  if (!e.isInAnimationTransition)
                      return a;
                  var r = e.currentLoopFrame > t.frames_for_doors_animation_opening
                    , o = !r;
                  return r && (a = -1),
                  o && (a = 1),
                  a
              }
                , l = function(n) {
                  var e = i
                    , t = d(n);
                  if (0 == t)
                      e.left_door.x = e.left_door.xOpened;
                  else {
                      var a = e.doors_movements_pixPerFrame * t;
                      e.left_door.x = Math.max(Math.min(e.left_door.x + a, e.left_door.xClosed), e.left_door.xOpened)
                  }
                  var r = e.left_door.xClosed - e.left_door.x;
                  e.right_door.x = e.right_door.xClosed + r
              }
                , v = function(e, t) {
                  var a = n.getXYCanvas();
                  l(t),
                  e.drawImage(r.backgroundImageObject.source, r.crop.left_door.srcX, r.crop.left_door.srcY, r.crop.left_door.w, r.crop.left_door.h, i.left_door.x + a.x, a.y, r.crop.left_door.w, r.crop.left_door.h),
                  e.drawImage(r.backgroundImageObject.source, r.crop.right_door.srcX, r.crop.right_door.srcY, r.crop.right_door.w, r.crop.right_door.h, i.right_door.x + a.x, a.y, r.crop.right_door.w, r.crop.right_door.h)
              }
                , h = function(e, t) {
                  n.eventBus.publish("clear-canvas-rectangle", {});
                  var a = n.getXYCanvas();
                  e.drawImage(r.backgroundImageObject.source, r.crop.background.srcX, r.crop.background.srcY, r.crop.background.w, r.crop.background.h, a.x, a.y, 170, 30)
              }
                , b = function(t) {
                  r.backgroundImageObject != e && n.eventBus.publish("draw-callback-publish-reconfiguration", {
                      canvasCallbacks: [{
                          cb: h,
                          priority: 10,
                          name: "drawBackground"
                      }, {
                          cb: f,
                          priority: 14,
                          name: "blueBoxDraw"
                      }, {
                          cb: v,
                          priority: 16,
                          name: "drawCounterRectangle"
                      }]
                  })
              };
              return n.eventBus.subscribe("draw-callback-requested-reconfiguration", b, 13),
              n.eventBus.subscribe("background-image-loaded", function(n) {
                  r.backgroundImageObject = n
              }, 13),
              n.eventBus.subscribe("drawing-triggered-animation-start", function() {
                  n.eventBus.publish("draw-hideText", {})
              }, 13),
              n.eventBus.subscribe("drawing-triggered-animation-end", function() {
                  n.eventBus.publish("draw-unHideText", {})
              }, 13),
              n
          }
          .call(i),
          f.AUTOSTART && i.start()
      } catch (fn) {}
      return i
  }, g = "base.js", m = window, w = "_DEBUG_visitorCANVAS_RETURN_BUILDER";
  _value_RETURN_BUILDER = u(window[w]) && window[w] === !0,
  window[v()] = p,
  window["visitor_canvascounters_" + g] = p
}
).call(this);
