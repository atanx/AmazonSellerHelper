var YWebClipperConfiguration, _hmt = _hmt || [];
!function () {
    var b, a = document.createElement("script");
    a.src = "//hm.baidu.com/hm.js?8875c662941dbf07e39c556c8d97615f", b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b)
}(), YWebClipperConfiguration = {
    logEnabled: !1,
    clipperBaseURL: document.location.protocol + "//note.youdao.com/yws",
    clipperUploadApp: "/mapi/wcp?method=putfile&keyfrom=wcp",
    logurl: "/mapi/ilogrpt?method=putwcplog",
    clipperClipType: "OnlyHTML",
    clipperDomPrefix: "_YNote",
    loadingHTML: '<img src="//note.youdao.com/yws/images/webclipper/loading.gif" style="position: absolute;top: 20%;margin-left: -65px;">',
    clipperFormFields: [["title", "text", "tl"], ["path", "text", "p"], ["content", "area", "bs"], ["source", "text", "src"], ["type", "text", "type"], ["userid", "text", "userid"], ["len", "text", "len"], ["charset", "text", "cs"], ["sign", "text", "e"]],
    clipperStyle: "position:fixed;right:10px;top:10px;padding-bottom:10px;font:12px/100% arial,sans-serif;color:#333;_right:expression(eval(document.documentElement.scrollLeft));_top:expression(eval(document.documentElement.scrollTop+10));_position:absolute;",
    styleMerge: {
        margin: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
        padding: ["padding-top", "padding-right", "padding-bottom", "padding-left"],
        "list-style": ["list-style-type", "list-style-position", "list-style-image"],
        border: ["border-bottom"]
    },
    formatTag: {br: null, p: null, img: null},
    styleQuote: {"font-family": !0},
    clipperFilterStyles: {
        keep: {
            "*": ["font-size", "font-style", "font-weight", "font-family", "color"],
            li: ["list-style"],
            ul: ["list-style"]
        }, remove: {}, "default": {}
    },
    clipperFilterAttributes: {
        keep: {},
        remove: {
            style: null,
            "class": null,
            classname: null,
            id: null,
            onclick: null,
            onsubmit: null,
            onmouseover: null,
            onmouseout: null,
            onmousedown: null,
            onpaste: null,
            contenteditable: null,
            designmode: null,
            onload: null,
            "for": null,
            method: null,
            tabindex: null
        }
    },
    filterElements: {
        keep: {},
        remove: {
            style: null,
            script: null,
            input: null,
            select: null,
            option: null,
            textarea: null,
            button: null,
            object: null,
            applet: null,
            embed: null
        }
    },
    listNodes: {ul: null, ol: null},
    selfCloseTag: {
        base: null,
        basefont: null,
        frame: null,
        link: null,
        meta: null,
        area: null,
        br: null,
        col: null,
        hr: null,
        img: null,
        input: null,
        param: null
    },
    translateTagName: {body: "div", form: "div", strong: "span", h1: "span"},
    names: {
        FrameName: "YNoteForm" + Math.floor(Math.random(1e4)),
        FormName: "YNoteForm" + Math.floor(Math.random(1e4))
    },
    doc: {mainContent: null, mainContentTag: null, container: window.document, contentType: "1"}
}, function () {
    function a(a, b) {
        this.cssText = CSSStyleDeclaration.prototype.getPropertyValue.call(a, b)
    }

    void 0 == CSSStyleDeclaration.prototype.getPropertyCSSValue && (a.constructor = a, a.prototype.toString = function () {
        return this.cssText
    }, CSSStyleDeclaration.prototype.getPropertyCSSValue = function (b) {
        return new a(this, b)
    })
}(), function () {
    var b, a = function (a) {
        this.contentDocument = a
    };
    a.common = {
        trim: function (a) {
            return a.replace(/^\s*/, "").replace(/\s*$/, "")
        }, isFunction: function (a) {
            return "[object Function]" === Object.prototype.toString.call(a)
        }, findPos: function (a) {
            var b = {x: 0, y: 0};
            if (document.documentElement.getBoundingClientRect())b.x = a.getBoundingClientRect().left + this.scroll().left, b.y = a.getBoundingClientRect().top + this.scroll().top; else for (; a;)b.x += a.offsetLeft, b.y += a.offsetTop, a = a.offsetParent;
            return b
        }, indexOf: function (a, b) {
            if (a.indexOf)return a.indexOf(b);
            var c = -1;
            return this.each(a, function (a) {
                return this[a] === b ? (c = a, !1) : void 0
            }), c
        }, each: function (a, b, c) {
            var d, e;
            if (void 0 !== a && null !== a) {
                if (void 0 === a.length || this.isFunction(a)) {
                    for (d in a)if (a.hasOwnProperty(d) && b.call(c || a[d], d, a[d]) === !1)break
                } else for (e = 0; e < a.length && b.call(c || a, e, a[e]) !== !1; e++);
                return a
            }
        }, css: function () {
            var a = function (a, b) {
                var d, c = "";
                if ("float" == b && (b = document.defaultView ? "float" : "styleFloat"), a.style[b] ? c = a.style[b] : a.currentStyle ? c = a.currentStyle[b] : document.defaultView && document.defaultView.getComputedStyle ? (b = b.replace(/([A-Z])/g, "-$1").toLowerCase(), d = document.defaultView.getComputedStyle(a, ""), c = d && d.getPropertyValue(b)) : c = null, "auto" != c && -1 === c.indexOf("%") || "width" !== b.toLowerCase() && "height" !== b.toLowerCase() || "none" == a.style.display || -1 === c.indexOf("%") || (c = a["offset" + b.charAt(0).toUpperCase() + b.substring(1).toLowerCase()] + "px"), "opacity" == b)try {
                    c = a.filters["DXImageTransform.Microsoft.Alpha"].opacity, c /= 100
                } catch (e) {
                    try {
                        c = a.filters("alpha").opacity
                    } catch (f) {
                    }
                }
                return c
            };
            return function (b, c) {
                return "string" == typeof c ? a(b, c) : (this.each(c, function (a, c) {
                    b.style[a] = c
                }), void 0)
            }
        }(), scroll: function () {
            return {
                left: document.documentElement.scrollLeft + document.body.scrollLeft,
                top: document.documentElement.scrollTop + document.body.scrollTop
            }
        }
    }, a.prototype = {
        IGNORE_TAGS: ["HTML", "HEAD", "META", "TITLE", "SCRIPT", "STYLE", "LINK", "IMG", "FORM", "INPUT", "BODY", "BUTTON", "TEXTAREA", "SELECT", "OPTION", "LABEL", "IFRAME", "UL", "OL", "LI", "DD", "DL", "DT", "A", "OBJECT", "PARAM", "EMBED", "NOSCRIPT", "EM", "B", "STRONG", "I", "INS", "BR", "HR", "PRE", "H1", "H2", "H3", "H4", "H5", "CITE"],
        getMainArticle: function () {
            var c, e, a = null, b = "";
            if (location && (b = location.hostname), /\b(google|facebook|twitter)\b/i.test(b))return null;
            if (c = this._getAllArticle(), !c || !c.length)return null;
            for (c.sort(function (a, b) {
                return b.weight - a.weight
            }), e = 0; 2 > e && (a = c[0], c.splice(0, 1), a && a.weight < 500 && (a = null), !a); e++);
            return a ? a : null
        },
        _sort: function (a) {
            var b, c, d, e, f;
            for (b = 0, c = null, d = 0; d < a.length; d++)e = a[d], f = e.weight, f >= b && (b = f, c = e);
            return c
        },
        _getAllArticle: function () {
            var d, e, f, a = this.contentDocument.getElementsByTagName("*"), c = [];
            for (d = 0, e = a.length; e > d; d++)f = a[d], this._checkTagName(f) && this._checkSize(f) && this._checkVisibility(f) && (c[c.length] = new b(f));
            return c
        },
        _checkTagName: function (b) {
            return -1 == a.common.indexOf(this.IGNORE_TAGS, b.tagName)
        },
        _checkVisibility: function (b) {
            return !("hidden" == a.common.css(b, "visibility") || "none" == a.common.css(b, "display") || parseInt(a.common.css(b, "height")) <= 0 || parseInt(a.common.css(b, "width")) <= 0)
        },
        _checkSize: function (a) {
            return a.offsetWidth > 300 && a.offsetHeight > 150
        }
    }, b = function (b) {
        this.elem = b, this.common = a.common, this.offset = this.common.findPos(b), this._texts = this._getAllTexts(b, 6), this.weight = this.calcWeight()
    }, b.prototype = {
        IGNORE_TAGS: ["A", "DD", "DT", "OL", "OPTION", "DL", "DD", "SCRIPT", "STYLE", "UL", "LI", "IFRAME"],
        TITLE_TAGS: ["H1", "H2", "H3", "H4", "H5", "H6"],
        MINOR_REGEXP: /comment|combx|disqus|foot|header|menu|rss|shoutbox|sidebar|sponsor/i,
        MAJOR_REGEXP: /article|entry|post|body|column|main|content/i,
        TINY_REGEXP: /comment/i,
        BLANK_REGEXP: /\S/i,
        _getAllTexts: function (b, c) {
            var e, f, g, d = [];
            if (c > 0)for (e = b.firstChild; e;)3 == e.nodeType && this._checkLength(e) ? (f = e.parentNode || {}, g = f.parentNode || {}, this._checkMinorContent(f) || this._checkMinorContent(g) || !a.common.trim(e.nodeValue) || d.push(e)) : 1 == e.nodeType && this._checkTagName(e) && (d = d.concat(this._getAllTexts(e, c - 1))), e = e.nextSibling;
            return d
        },
        calcStructWeight: function () {
            var c, d, e, f, g, h, b = 0;
            for (c = 0, d = this._texts.length; d > c; c++)if (e = this._texts[c], f = a.common.trim(e.nodeValue).length, g = 1, !(20 > f)) {
                for (h = e.parentNode; h && h != this.elem; h = h.parentNode)g -= .1;
                b += Math.pow(g * f, 1.25)
            }
            return b
        },
        calcContentWeight: function () {
            var b, a = 1;
            for (b = this.elem; b; b = b.parentNode)b.id && (this.MAJOR_REGEXP.test(b.id) && (a += .4), this.MINOR_REGEXP.test(b.id) && (a -= .8)), b.className && (this.MAJOR_REGEXP.test(b.className) && (a += .4), this.MINOR_REGEXP.test(b.className) && (a -= .8));
            return a
        },
        calcWeight: function () {
            return this.calcStructWeight() * this.calcContentWeight()
        },
        _checkTagName: function (b) {
            return -1 == a.common.indexOf(this.IGNORE_TAGS, b.tagName)
        },
        _checkTitle: function () {
            var d, e, f, g, h, i, j, b = this.elem.getElementsByTagName("*"), c = [];
            for (d = 0; b[d]; d++)a.common.indexOf(this.TITLE_TAGS, b[d].tagName) > -1 && c.push(b[d]);
            if (c.length > 2) {
                for (e = this.elem.offsetHeight, f = 0, g = a.common.findPos(this.elem), h = .05 * e, i = 0; c[i]; i++)j = a.common.findPos(c[i]), j.y - g.y > h && j.y + c[i].offsetHeight - (g.y + e) && f++;
                if (300 > e / f)return !0
            }
            return !1
        },
        _checkLength: function (a) {
            return Boolean(this.BLANK_REGEXP.test(a.nodeValue))
        },
        _checkMinorContent: function (a) {
            return Boolean(this.TINY_REGEXP.test(a.id + " " + a.className))
        },
        _checkVisibility: function (b) {
            return !("hidden" == a.common.css(b, "visibility") || "none" == a.common.css(b, "display") || parseInt(a.common.css(b, "height")) <= 0 || parseInt(a.common.css(b, "width")) <= 0)
        }
    }, window.Page = a
}(), function () {
    var b, c, d, e, f, g, h, i;
    "function" != typeof Function.prototype.inherit && (Function.prototype.inherit = function (a) {
        "function" == typeof a && (this.prototype = new a, this.prototype.parent = a(), this.prototype.constructor = this)
    }), b = null, c = window.document, "undefined" != typeof YNote && (b = YNote), YNote = {}, YNote.Common = {
        browser: function () {
            return {
                isIE: -1 != navigator.appVersion.indexOf("MSIE", 0),
                isSafari: -1 != navigator.appVersion.indexOf("WebKit", 0),
                isFirefox: -1 != navigator.userAgent.indexOf("Firefox", 0),
                isIpad: navigator.userAgent.indexOf("WebKit") > 0 && navigator.userAgent.indexOf("iPad") > 0,
                isIphone: navigator.userAgent.indexOf("WebKit") > 0 && navigator.userAgent.indexOf("iPhone") > 0,
                isChrome: navigator.userAgent.indexOf("WebKit") > 0 && navigator.userAgent.indexOf("Chrome") > 0
            }
        }(), trim: function (a) {
            return "string" != typeof a ? a : a.replace(/^\s+/, "").replace(/\s+$/, "")
        }, getCssText: function () {
        }, check163Auth: function () {
        }, configuration: function () {
            return {
                load: function () {
                }, reload: function () {
                }, addConfigurationChangeListener: function () {
                }, removeConfigurationChangeListener: function () {
                }
            }
        }, extend: function (a, b, c) {
            if ("object" != typeof b)return !1;
            for (var d in b)a[d] = "undefined" != typeof a[d] ? c ? [a[d], b[d]] : b[d] : b[d]
        }, el: function (a) {
            return c.getElementById(a)
        }, mkel: function (a, b) {
            try {
                var d = c.createElement(a);
                return b && b.appendChild(d), d
            } catch (e) {
                return !1
            }
        }, addEvent: function (a, b, c) {
            return a.nodeType && 1 == a.nodeType ? (YNote.Common.browser.isIE ? a.attachEvent("on" + b, c) : a.addEventListener(b, c, !1), void 0) : !1
        }, deleteEvent: function (a, b, c) {
            return a.nodeType && 1 == a.nodeType ? (YNote.Common.browser.isIE ? a.detachEvent("on" + b, c) : a.removeEventListener(b, c, !1), void 0) : !1
        }, wrapperEvent: function (a) {
            var b = {
                target: YNote.Common.browser.isIE ? a.srcElement : a.target,
                offsetX: YNote.Common.browser.isIE ? a.offsetX : a.layerX,
                offsetY: YNote.Common.browser.isIE ? a.offsetY : a.layerY,
                x: YNote.Common.browser.isIE ? a.x : a.pageX,
                y: YNote.Common.browser.isIE ? a.y : a.pageY
            };
            return b
        }, enableDrag: function (a) {
            var b = window;
            "string" == typeof a && (a = YNote.Common.el(a)), a.nodeType && 1 == a.nodeType && "div" == a.tagName.toLowercase() && (a.style.position = "absolute", YNote.Common.addEvent(a, "mousedown", function (a) {
                if ("undefined" != typeof b.YNoteDragObject && null != b.YNoteDragObject)return !1;
                var c = YNote.Common.wrapperEvent(a);
                b.YNoteDragObject = {element: c.target, startX: c.offsetX, startY: c.offsetY}
            }), "undefined" == typeof b.YNoteDragObject && (YNote.Common.addEvent(b.document, "mouseup", function () {
                null != b.YNoteDragObject && (b.YNoteDragObject = null)
            }), YNote.Common.addEvent(b.document, "mousemove", function (a) {
                if ("undefined" != typeof b.YNoteDragObject && null != b.YNoteDragObject) {
                    var c = YNote.Common.wrapperEvent(a);
                    b.YNoteDragObject.element.style.left = c.x - b.YNoteDragObject.startX + "px", b.YNoteDragObject.element.style.top = c.y - b.YNoteDragObject.startY + "px"
                }
            })))
        }, serverlog: function (a) {
            var b = new Image, c = YWebClipperConfiguration, d = c.clipperBaseURL + c.logurl;
            b.src = d + "&s=" + a
        }, log: function (a) {
            return YWebClipperConfiguration.logEnabled ? ("undefined" == typeof console && (console = function () {
                var a = c.createElement("div");
                return a.style.cssText = "width:100%;height:500px;border:1pt solid black;position:absolute;left:0px;top:800px", a.innerHTML = '<textarea style="width:100%;height:450px" id="console_log"></textarea>', c.body.appendChild(a), {
                    log: function (a) {
                        c.getElementById("console_log").value += a + "\n"
                    }
                }
            }()), "undefined" != typeof console.log && console.log(a), void 0) : !1
        }, Dom: {
            appendHTMLToIframe: function (a, b) {
                if (a.tagName && "iframe" == a.tagName.toLowerCase()) {
                    var c = a.contentWindow.document;
                    try {
                        c.open(), c.write(b), c.close()
                    } catch (d) {
                        YNode.Common.log("append HTML to [iframe:" + a.name + "] ERROR!")
                    }
                }
            }
        }, getCharSet: function () {
            return YNote.Common.browser.isIE ? document.charset.toLowerCase() : document.characterSet.toLowerCase()
        }, HTMLEncode: function (a) {
            var f, g, h, b = "", c = a.length, d = navigator.userAgent.toLowerCase(), e = /msie/.test(d) ? parseFloat(d.match(/msie ([\d.]+)/)[1]) : !1;
            if (e >= 7)for (f = 0; c > f; f++)b += a.charCodeAt(f) + " "; else for (f = 0; f < a.length; f++)g = a.charCodeAt(f), h = a[f], b += g > 127 ? "&#" + g + ";" : ">" == h ? "&gt;" : "<" == h ? "&lt;" : "&" == h ? "&amp;" : a.charAt(f);
            return b
        }, unicodeEncode: function (a) {
            var c, d, b = "";
            if ("string" == typeof a)for (c = 0; c < a.length; c++)d = a.charCodeAt(c), b += d > 127 ? "&#" + d + ";" : a.charAt(c);
            return b
        }
    }, YNote.EventInterface = function () {
    }, YNote.Common.extend(YNote.EventInterface.prototype, {
        addEventListener: function () {
        }, removeEventListener: function () {
        }, executeEvent: function () {
        }, fireEvent: function () {
        }, events: {}
    }), YNote.StyleUtil = function () {
    }, YNote.Common.extend(YNote.StyleUtil.prototype, {
        styleForNode: function (a) {
            var c, d, e, g, h, i, j, k;
            if (this.cssNameMap = {}, a && a.nodeType && 1 == a.nodeType) {
                for (c = null, c = YNote.Common.browser.isIE ? a.currentStyle : window.getComputedStyle(a, null), d = YWebClipperConfiguration.clipperFilterStyles.keep, e = null, e = "undefined" == typeof d[a.tagName.toLowerCase()] ? d["*"] : d[a.tagName.toLowerCase()], g = {}, h = YWebClipperConfiguration.styleMerge, i = 0; i < e.length; i++)YNote.Common.browser.isIE ? (j = e[i], h[j] ? g[j] = this.getCompoundCssString(j, c) : (j = this.cssName2ScriptName(e[i]), /#000000|none|auto|visible|arial/i.test("" + c[j]) || (g[j] = ("" + c[j]).replace(/"/g, "&quot;")))) : (j = e[i], h[j] ? g[j] = this.getCompoundCssString(j, c) : (k = c.getPropertyCSSValue(j), null != k && (/#000000|none|auto|visible|arial/i.test(k.cssText) || (g[j] = k.cssText.replace(/"/g, "&quot;")))));
                return this.cssArray = g, this.getStyleString(g)
            }
            return ""
        }, getStyleString: function (a) {
            var d, b = "", c = "";
            for (d in a)0 != a[d].length && (c = YNote.Common.browser.isIE ? "undefined" != typeof this.cssNameMap[d] && this.cssNameMap[d].length > 0 ? this.cssNameMap[d] : d : d, b += c + ":" + a[d] + ";");
            return b
        }, getCompoundCssString: function (a, b) {
            var e, f, c = YWebClipperConfiguration.styleMerge, d = "";
            for (e = 0; e < c[a].length; e++)YNote.Common.browser.isIE ? (f = this.cssName2ScriptName(c[a][e]), d += b[f] + " ") : d += b.getPropertyCSSValue(c[a][e]).cssText + " ";
            return d = d.substring(0, d.length - 1), /(0px ?){4}|(auto ?){4}/i.test(d) ? "" : d
        }, cssName2ScriptName: function (a) {
            var b, c, d;
            if ("string" == typeof a && a.indexOf("-") > 0) {
                for (b = a.split("-"), c = b[0], d = 1; d < b.length; d++)c += b[d].substring(0, 1).toUpperCase() + b[d].substring(1);
                return this.cssNameMap[c] = a, c
            }
            return "string" == typeof a ? "float" == a ? "styleFloat" : a : ""
        }, mergeDefaultCssValue: function () {
        }
    }), YNote.Clipper = function () {
        this.content = null, this.title = null;
        try {
            this.source = window.location.href
        } catch (a) {
            this.source = ""
        }
        this.type = null, this.selector = new YNote.Selection, this.init()
    }, YNote.Common.extend(YNote.Clipper, {
        CLASS_INIT: 0,
        CLIPPING: 1,
        CLIPPED: 2,
        UPLOADING_FILE: 3,
        UPLOADED_FILE: 4,
        UPLOADING_INFO: 5,
        UPLOADING_INFO: 6,
        START_LOGIN: 7,
        DONE: 8,
        ERROR_CLIP: 10001,
        ERROR_UPLOAD_FILE: 10002,
        ERROR_UPLOAD_INFO: 10003,
        ERROR_UPLOAD_LOGIN: 10004,
        ERROR_NO_BODY: 10005,
        CEIL_OF_REQUEST: {COUNT: 10}
    }), YNote.Common.extend(YNote.Clipper.prototype, {
        close: function () {
            this.wrapper.style.display = "none", this.deleteFrame(), this.state = YNote.Clipper.DONE
        }, clipContent: function () {
            var a, b;
            this.state = YNote.Clipper.CLIPPING, a = (new Date).getTime(), this.loadingView.style.display = "block";
            try {
                return b = YWebClipperConfiguration.doc.container, this.hasSelection() ? (YNote.Common.log("has selection"), YWebClipperConfiguration.doc.contentType = "3", this.range = this.selector.getSelectionRange(), this.content = this.getSelectedContent(), this.state = YNote.Clipper.CLIPPED, this.content) : b.body ? (YNote.Common.log("no selection!"), this.content = this.getNodeText(b.body), this.state = YNote.Clipper.CLIPPED, this.content) : (YNote.Common.log("No Body!"), document.getElementById("_YNoteLoaddingTips").innerHTML = "抱歉，由于页面设置，无法获取所选内容", this.state = YNote.Clipper.ERROR_NO_BODY, YNote.Common.serverlog(2), "")
            } catch (d) {
                try {
                    document.getElementById("_YNoteLoaddingTips").innerHTML = "抱歉，由于页面设置，整页抓取失败，请选择部分内容后重试", YNote.Common.serverlog(3)
                } catch (e) {
                    YNote.Common.serverlog(4), alert("抱歉，由于页面设置，页面抓取失败!")
                }
            }
        }, hasSelection: function () {
            if (this.getSelection(), "undefined" != typeof this.selection && null != this.selection && ("function" == typeof this.selection.getRangeAt || "object" == typeof this.selection.createRange || "function" == typeof this.selection.createRange)) {
                if ("undefined" != typeof this.selection.rangeCount && this.selection.rangeCount < 1)return !1;
                if ("function" == typeof this.selection.createRange || "object" == typeof this.selection.createRange)try {
                    if ("text" != this.selection.type.toLowerCase() || "" == this.selection.createRange().htmlText)return !1
                } catch (a) {
                    return !1
                } else if ("function" == typeof this.selection.getRangeAt)try {
                    var b = this.selection.getRangeAt(0);
                    if (b.startContainer == b.endContainer && b.startOffset == b.endOffset)return !1
                } catch (a) {
                    return !0
                }
                return !0
            }
            return !1
        }, getSelection: function () {
            this.selection = this.selector.getSelection()
        }, submit: function () {
            this.state = YNote.Clipper.UPLOADING_FILE, this.fillForm(), this.form.submit()
        }, getClipID: function () {
            return "/wcp" + (new Date).getTime() + Math.floor(1e3 * Math.random())
        }, getHiddenForm: function () {
            var a = YNote.Common.mkel("form");
            return a.innerHTML = "", a
        }, rangeIntersectsNode: function (a) {
            var b, d;
            if (YNote.Common.browser.isIE)return this.range ? 1 == a.nodeType ? (d = a.ownerDocument.body.createTextRange(), d.moveToElementText(a), -1 == d.compareEndPoints("StartToEnd", this.range) && 1 == d.compareEndPoints("EndToStart", this.range)) : !0 : !1;
            if (this.range) {
                b = a.ownerDocument.createRange();
                try {
                    b.selectNode(a)
                } catch (c) {
                    b.selectNodeContents(a)
                }
                return 1 == this.range.compareBoundaryPoints(Range.START_TO_END, b) && -1 == this.range.compareBoundaryPoints(Range.END_TO_START, b)
            }
            return !1
        }, changeNodeName: function (a) {
            var b = YWebClipperConfiguration.translateTagName;
            return "undefined" != typeof b[a.tagName.toLowerCase()] ? b[a.tagName.toLowerCase()] : a.tagName.toLowerCase()
        }, isListNode: function (a) {
            var b = YWebClipperConfiguration.listNodes;
            return a && 1 == a.nodeType && "undefined" != typeof b[a.nodeName.toLowerCase()]
        }, withAttribute: function (a) {
            var b = YWebClipperConfiguration.clipperFilterAttributes.remove;
            return "string" == typeof a && "undefined" == typeof b[a.toLowerCase()]
        }, getNodeAttributesString: function (a) {
            var d, e, f, b = "", c = a.attributes;
            if (null != c)for (d = 0; d < c.length; d++) {
                if (e = c[d].nodeName.toLowerCase(), f = c[d].nodeValue, "href" == e || "src" == e)f = 0 == f.toLowerCase().indexOf("javascript:") || 0 == f.indexOf("#") ? "" : this.replaceURL(f); else if ("target" == e && "_blank" == f)continue;
                this.withAttribute(e) && "string" == typeof f && f.length > 0 && (b += c[d].nodeName + "=" + '"' + f.toString() + '" ')
            }
            return b.replace(/\s+$/, "")
        }, isCloseTag: function (a) {
            return a && "undefined" != typeof YWebClipperConfiguration.selfCloseTag[a.nodeName.toLowerCase()]
        }, isNodeVisible: function (a) {
            if (a.nodeType) {
                if (YNote.Common.browser.isIE) {
                    if (null != a.currentStyle && "none" == a.currentStyle["display"])return !1
                } else try {
                    if ("none" == window.getComputedStyle(a, null).getPropertyCSSValue("display").cssText)return !1
                } catch (c) {
                    return !1
                }
                var d = YWebClipperConfiguration;
                return 3 != a.nodeType || !a.nodeValue && 0 != a.nodeValue.length ? 1 == a.nodeType && "undefined" == typeof d.formatTag[a.tagName.toLowerCase()] && 0 == YNote.Common.trim(a.innerHTML).length ? !1 : !0 : !1
            }
            return !1
        }, keepNode: function (a) {
            if (a) {
                if (3 == a.nodeType)return !0;
                if (1 == a.nodeType) {
                    if (0 == a.nodeName.indexOf("#") || !this.isNodeVisible(a))return !1;
                    var b = YWebClipperConfiguration.filterElements.remove;
                    return "undefined" == typeof b[a.nodeName.toLowerCase()]
                }
            }
            return !1
        }, replaceURL: function (a) {
            var b, c, d, e;
            return window.location ? (b = null, a = YNote.Common.trim(a), c = window.location.host, d = window.location.protocol, e = window.location.href.split("?")[0].split("#")[0], e = e.substr(0, e.lastIndexOf("/")) + "/", rbase = d + "//" + c, null != (b = a.match(/^(https?):/i)) ? a : 0 == a.indexOf("//") ? d + a : 0 == a.indexOf("/") ? rbase + a : e + a) : a
        }, getNodeText: function (a, b) {
            for (var f, g, h, i, j, k, l, m, n, c = "", d = a, e = YWebClipperConfiguration; d != document.body;) {
                if (d == this.wrapper)return c;
                if (null == d)return c;
                d = d.parentNode
            }
            if (this.range && !this.rangeIntersectsNode(a))return c;
            if (!this.keepNode(a))return c;
            if (3 == a.nodeType)this.range ? this.range.startContainer == a && this.range.startContainer == this.range.endContainer ? c += a.nodeValue.substring(this.range.startOffset, this.range.endOffset) : this.range.startContainer == a ? c += a.nodeValue.substring(this.range.startOffset) : this.range.endContainer == a ? c += a.nodeValue.substring(0, this.range.endOffset) : this.range.commonAncestorContainer != a && (c += a.nodeValue) : c += a.nodeValue; else if (1 == a.nodeType) {
                if (a === e.doc.mainContent && "3" !== e.doc.contentType && (f = (new Date).getTime() / 1e5 + "", c += f, e.doc.mainContentTag = f), this.range && this.range.commonAncestorContainer == a && this.range.startContainer != this.range.commonAncestorContainer && !this.isListNode(a) || (g = this.changeNodeName(a), c += "<" + g, h = this.getNodeAttributesString(a), h.length > 0 && (c += " " + h), this.styleUtil && (i = this.styleUtil.styleForNode(a, b), null != i && 0 != i.length && (c += " style='" + i + "'")), c += !a.hasChildNodes() && this.isCloseTag(a) ? "/>" : ">"), "iframe" != a.tagName.toLowerCase() && a.hasChildNodes())for (j = a.childNodes, k = 0, l = j.length; l > k; k++)m = j[k], null != m && "" != YNote.Common.trim(m.nodeValue) && m.nodeType > 0 && m.nodeName && "script" != m.nodeName.toLowerCase() && "iframe" != m.nodeName.toLowerCase() && (n = "", n = "font" != m.nodeName.toLowerCase() || m.hasChildNodes() ? this.getNodeText(m, a) : m.outerHTML, n && n.length > 0 && (c += n));
                this.range && this.range.commonAncestorContainer == a && !this.isListNode(a) || (a.hasChildNodes() || !this.isCloseTag(a)) && (c += "</" + g + ">", a === e.doc.mainContent && "3" !== e.doc.contentType && (c += e.doc.mainContentTag))
            }
            return c
        }, getSelectedContent: function () {
            var a, b;
            return this.hasSelection() ? YNote.Common.browser.isIE ? (YNote.Common.log(this.selection.htmlText), this.selection.htmlText ? (this.content = this.selection.htmlText, this.selection.htmlText) : (this.content = this.getNodeText(this.getRangeContainer(this.range)), this.content)) : (a = this.selector.getSelectionRange(), b = "", b = this.getNodeText(a.commonAncestorContainer), "" == b && YNote.Common.log("Get Selected ERROR!"), b) : void 0
        }, getRangeContainer: function (a) {
            var b, c, d;
            if (!a)return document.body;
            for (b = a.parentElement(), c = b.getBoundingClientRect(), d = a.getBoundingClientRect(); c.top > d.top || c.bottom < d.bottom;)b = b.parentNode, c = b.getBoundingClientRect();
            return b
        }, initFrame: function () {
            var a = YWebClipperConfiguration;
            this.view.innerHTML = '<iframe width="100%" height="100%" border="0" frameborder="0" src="javascript:document.write(\'\');" style="width:100%;height:100%;border:0px;display: block!important;"  id="' + a.clipperDomPrefix + "ContentFrame" + '" name="' + a.doc.contentType + "ContentFrame" + '" onload="yApp.frameHandler(event);" style="border:0px;border-radius: 5px;" scrolling ="no"></iframe>'
        }, deleteFrame: function () {
            this.view.innerHTML = ""
        }, filterResults: function (a, b, c) {
            var d = a ? a : 0;
            return b && (!d || d > b) && (d = b), c && (!d || d > c) ? c : d
        }, init: function () {
            var a, b, d, e, f, g, h, i, j, k, l;
            for (YNote.Common.log("Init Clipper Class"), this.styleUtil = new YNote.StyleUtil, this.path = this.getClipID(), this.requestCount = 0, this.state = YNote.Clipper.CLASS_INIT, a = YWebClipperConfiguration, b = "ydNoteWebClipper", d = c.getElementById(b), null != d && null != d.parentNode && d.parentNode.removeChild(d), e = YNote.Common.mkel("div"), e.id = b, e.name = b, YNote.Common.browser.isIE && (document.getElementsByTagName("html")[0].cssText = "background-image:url(about:blank);background-attachment:fixed", document.getElementsByTagName("body")[0].cssText = "background-image:url(about:blank);background-attachment:fixed"), e.style.cssText = a.clipperStyle, e.style.cssText += ";z-index: 9999999999999 !important", this.wrapper = e, f = YNote.Common.mkel("div", e), f.style.cssText = "border-radius:5px;box-shadow:rgba(208, 208, 208, 0.2) 0px 6px 12px; -khtml-border-radius:5px;-webkit-border-radius:5px;-webkit-box-shadow:rgba(208, 208, 208, 0.2) 0px 6px 12px;;-moz-border-radius:5px;-moz-box-shadow:rgba(208, 208, 208, 0.2) 0px 6px 12px;;", f.id = "ydNoteWebClipper-New", f.className = "ydnwc-dialog", g = YNote.Common.mkel("div", f), g.id = "ydNoteWebClipper_view", g.name = "ydNoteWebClipper_view", g.style.cssText = YNote.Common.browser.isIE ? "background:#fff;border-radius: 5px;border: 1px solid #D0D0D0;" : "background:#fff;border-radius: 5px;border: 1px solid #D0D0D0;", this.view = g, this.initFrame(), h = YNote.Common.mkel("div", e), i = YNote.Common.mkel("form", h), YNote.Common.extend(i, {
                id: a.clipperDomPrefix + "ContentForm",
                name: a.clipperDomPrefix + "ContentForm",
                action: a.clipperBaseURL + a.clipperUploadApp,
                target: a.doc.contentType + "ContentFrame",
                enctype: "multipart/form-data",
                encoding: "multipart/form-data",
                method: "POST"
            }), YNote.Common.extend(h.style, {display: "none"}), j = "", k = a.clipperFormFields, l = 0; l < k.length; l++)"text" == k[l][1] && (j += '<input type="text" name="' + k[l][2] + '" id="' + a.clipperDomPrefix + "ContentForm" + k[l][0] + '" value=""/>'), "area" == k[l][1] && (j += '<textarea name="' + k[l][2] + '" id="' + a.clipperDomPrefix + "ContentForm" + k[l][0] + '"></textarea>');
            i.innerHTML = j, this.form = i, div = YNote.Common.mkel("div", f), div.style.cssText = YNote.Common.browser.isIE ? "position:absolute;height:270px;398px;background:#fff;top:0;left:200px;" : "position:absolute;height:258px;398px;background:#fff;top:0;left:200px;", div.innerHTML = a.loadingHTML, div.style.display = "none", div.name = "ydNoteWebClipper_loadview", div.id = "ydNoteWebClipper_loadview", this.loadingView = div, window.document.body.appendChild(e)
        }, clearFlash: function () {
            var c, d, e, f, a = YNote.Common.browser.isIE, b = [];
            for (a ? (c = document.getElementsByTagName("object"), d = document.getElementsByTagName("embed"), b = c.length && c || d) : b = document.getElementsByTagName("embed"), e = 0, f = b.length; f > e; e++)(a && b[e] && "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" == b[e]["classid"] || b[e] && "application/x-shockwave-flash" == b[e]["type"] || b[e] && b[e].parentNode.innerHTML.indexOf("application/x-shockwave-flash") > 0) && b[e].parentNode && b[e].parentNode.removeChild(b[e])
        }, reset: function () {
            YNote.Common.log("Call Reset!"), this.selection = null, this.range = null, this.title = null, this.content = null, this.state = 0, this.requestCount = 0, this.path = this.getClipID(), this.wrapper.style.display = "", this.view.innerHTML.length > 10 && this.deleteFrame(), this.initFrame()
        }, getNavigatorSign: function () {
            var a = navigator.userAgent.toLowerCase(), b = /msie/.test(a) ? parseFloat(a.match(/msie ([\d.]+)/)[1]) : !1;
            return parseInt(b) >= 7 ? "true" : "false"
        }, fillForm: function () {
            var a, b, c, d;
            YNote.Common.log("Enter fillForm"), a = this.getNavigatorSign(), b = document, c = YWebClipperConfiguration, d = "FullPage MainBody Selected", this.title = b.title, this.content = this.content.replace(/[\r\n]/g, ""), c.doc.mainContentTag && (this.content += "$" + c.doc.mainContentTag), this.content = "true" == a ? YNote.Common.HTMLEncode(this.content) : YNote.Common.unicodeEncode(this.content), b.getElementById(c.clipperDomPrefix + "ContentForm" + "path").value = this.path, b.getElementById(c.clipperDomPrefix + "ContentForm" + "content").value = this.content, b.getElementById(c.clipperDomPrefix + "ContentForm" + "source").value = YNote.Common.HTMLEncode(this.source), b.getElementById(c.clipperDomPrefix + "ContentForm" + "title").value = YNote.Common.HTMLEncode(this.title), b.getElementById(c.clipperDomPrefix + "ContentForm" + "len").value = this.content.length, b.getElementById(c.clipperDomPrefix + "ContentForm" + "type").value = d.split(" ")[c.doc.contentType - 1], b.getElementById(c.clipperDomPrefix + "ContentForm" + "sign").value = this.getNavigatorSign()
        }
    }), YNote.Selection = function () {
    }, YNote.Common.extend(YNote.Selection.prototype, {
        getSelection: function () {
            var a = window;
            return a.document, this.selection = YNote.Common.browser.isIE ? document.selection : a.getSelection(), this.hasSelection() ? this.selectionParentWindow = a : this.getNestedRange(a), this.selection
        }, hasSelection: function () {
            return YNote.Common.log("Enter hasSelection"), "function" == typeof this.selection.createRange ? "" == this.selection.createRange().htmlText ? !1 : !0 : 0 == this.selection.rangeCount ? !1 : !0
        }, getNestedRange: function (a) {
            var b, c, d, e, f, h, i, j;
            if (YNote.Common.log("Enter getNestedRange"), b = a.document, c = null, c = b.getElementsByTagName("iframe"), !c || 0 == c.length)return !1;
            for (d = 0, e = c.length; e > d; d++) {
                f = c[d].contentWindow;
                try {
                    if (f.document, c[d].clientWidth <= 10 || c[d].clientHeight <= 10)continue
                } catch (g) {
                    continue
                }
                try {
                    if (h = "function" == typeof f.getSelection ? f.getSelection() : f.document.selection, "function" == typeof h.createRange || "function" == typeof h.getRangeAt) {
                        if (i = this.selection, this.selection = h, this.selectionparentWindow = f, this.hasSelection())return this.selection = i, !1;
                        for (j = 0, a = f; a !== window && (j++, !(j > 3));)a = a.parent;
                        a === window && this.getNestedRange(f)
                    }
                } catch (g) {
                    continue
                }
            }
            YNote.Common.log("getNestedRange over")
        }, getSelectionRange: function () {
            var a, b, c;
            return YNote.Common.log("Enter get getSelectionRange"), this.getSelection(), this.selection ? (this.range = YNote.Common.browser.isIE ? this.selection.createRange() : this.selection.getRangeAt(0), YNote.Common.browser.isIE && this.range && (this.range.commonAncestorContainer = this.range.parentElement(), YNote.Common.log("Enter get range block"), a = this.range.duplicate(), a.collapse(!0), b = this.getContainerForIE(a), this.range.startContainer = b["el"], this.range.startOffset = b["offset"], c = this.range.duplicate(), c.collapse(!1), b = this.getContainerForIE(c), this.range.endContainer = b["el"], this.range.endOffset = b["offset"]), this.range) : !1
        }, getAncestor: function () {
        }, getContainerForIE: function (a) {
            var d, e, f, g, b = a.parentElement(), c = b.ownerDocument.body.createTextRange();
            for (c.moveToElementText(b), c.setEndPoint("EndToStart", a), d = c.text.length, d < b.innerText.length / 2 ? (e = 1, f = b.firstChild) : (e = -1, f = b.lastChild, c.moveToElementText(b), c.setEndPoint("StartToStart", a), d = c.text.length); f;) {
                switch (f.nodeType) {
                    case 3:
                        if (nodeLength = f.data.length, !(d > nodeLength))return 1 == e ? {node: f, offset: d} : {
                            el: f,
                            offset: nodeLength - d
                        };
                        g = d - nodeLength, 1 == e ? c.moveStart("character", g) : c.moveEnd("character", -g), d = g;
                        break;
                    case 1:
                        nodeLength = f.innerText.length, 1 == e ? c.moveStart("character", nodeLength) : c.moveEnd("character", -nodeLength), d -= nodeLength
                }
                f = 1 == e ? f.nextSibling : f.previousSibling
            }
            return {el: b, offset: 0}
        }, getSelectionHTMLText: function () {
            return this.getSelectionRange(), this.range ? YNote.Common.browser.isIE ? this.range.htmlText : "" : !1
        }
    }), YNote.ClipperManager = function () {
        this.init()
    }, YNote.Common.extend(YNote.ClipperManager.prototype, {
        run: function () {
            return YNote.Common.log("start run.."), YNote.Common.serverlog(0), this.checkEnv() ? (YNote.Common.log("manager run"), this.clipper.reset(), this.clipper.wrapper.display = "", this.clipper.clearFlash(), this.clipper.clipContent(), this.clipper.state == YNote.Clipper.CLIPPED && (YNote.Common.log("manager clip end"), this.clipper.submit()), void 0) : (YNote.Common.log("check Env false"), YNote.Common.serverlog(1), !1)
        }, submit: function () {
            this.clipper.state == YNote.Clipper.CLIPPED ? (YNote.Common.log("Do clipper.submit"), this.clipper.submit()) : YNote.Common.log("ERROR! clipper state error")
        }, init: function () {
            this.clipper = new YNote.Clipper
        }, checkEnv: function () {
            var a = window.document;
            return a ? a.body ? (YNote.Common.log(this.clipper.state), this.clipper.state > 0 && this.clipper.state < 100 && this.clipper.state != YNote.Clipper.DONE ? !1 : !0) : !1 : !1
        }
    }), YNote.App = function () {
    }, YNote.App.prototype = {
        crossDomain: function () {
            var b, c, e, j, a = {}, d = 1, f = this, g = !1, h = "postMessage", i = "addEventListener", k = f[h];
            return a.isFunction = function (a) {
                return "[object Function]" === Object.prototype.toString.call(a)
            }, a.browser = function () {
                var c, a = {}, b = navigator.userAgent.toLowerCase();
                return (c = b.match(/msie ([\d.]+)/)) ? a.msie = c[1] : (c = b.match(/firefox\/([\d.]+)/)) ? a.firefox = c[1] : (c = b.match(/chrome\/([\d.]+)/)) ? a.chrome = c[1] : (c = b.match(/opera.([\d.]+)/)) ? a.opera = c[1] : (c = b.match(/version\/([\d.]+).*safari/)) ? a.safari = c[1] : 0, a
            }(), a.each = function (b, c, d) {
                var e, f;
                if (void 0 !== b && null !== b) {
                    if (void 0 === b.length || a.isFunction(b)) {
                        for (e in b)if (b.hasOwnProperty(e) && c.call(d || b[e], e, b[e]) === !1)break
                    } else for (f = 0; f < b.length && c.call(d || b, f, b[f]) !== !1; f++);
                    return b
                }
            }, a.param = function (b) {
                if ("string" == typeof b)return b;
                var c = [];
                return a.each(b, function (b, d) {
                    d && (d = encodeURIComponent(d), a.browser.firefox && (d = encodeURIComponent(unescape(d))), c.push(encodeURIComponent(b) + "=" + d))
                }), c.join("&").replace(r20, "+")
            }, a.postMessage = function (b, c, e) {
                c && (b = "string" == typeof b ? b : a.param(b), e = e || parent, k ? e[h](b, c.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : c && (e.location = c.replace(/#.*$/, "") + "#" + +new Date + d++ + "&" + b))
            }, a.receiveMessage = j = function (d, h, l) {
                k ? (d && (e && j(), e = function (b) {
                    return "string" == typeof h && b.origin !== h || a.isFunction(h) && h(b.origin) === g ? g : (d(b), void 0)
                }), f[i] ? f[d ? i : "removeEventListener"]("message", e, g) : f[d ? "attachEvent" : "detachEvent"]("onmessage", e)) : (b && clearInterval(b), b = null, d && (l = "number" == typeof h ? h : "number" == typeof l ? l : 100, b = setInterval(function () {
                    var a = document.location.hash, b = /^#?\d+&/;
                    a !== c && b.test(a) && (c = a, d({data: a.replace(b, "")}))
                }, l)))
            }, a
        }(), creatDiv: function (a, b, c, d, e, f) {
            var g = document.createElement("div");
            return g.id = a, f || (f = "position:absolute;filter:alpha(opacity=80);background-color:#666;opacity:0.8;z-index:9999;"), f += "height:" + c + "px;", f += "width:" + b + "px;", f += "left:" + d + "px;", f += "top:" + e + "px;", g.style.cssText = f, g
        }, removeDiv: function (a) {
            var b = document.getElementById(a);
            b && document.body.removeChild(b)
        }, removeClipDiv: function () {
            for (var a = 0; 5 > a; a++)this.removeDiv("yShade" + a);
            this.shadeStatu = !1
        }, createClipDiv: function () {
            var a, b, c, d, e, f, g, h, j, k, l, m;
            if (this.mainElem)for (a = this.mainElem, b = Math.abs(a.common.findPos(a.elem).y), c = Math.abs(a.common.findPos(a.elem).x), d = a.elem.scrollWidth, e = a.elem.scrollHeight, f = document.documentElement.scrollWidth, g = document.documentElement.scrollHeight, this.removeClipDiv(), h = [], document.body.scrollWidth == document.body.offsetWidth, j = "position:absolute;border:5px solid rgb(0, 154, 226);border:5px solid rgba(0, 154, 226,0.6);-webkit-border-radius:5px;-moz-border-radius:5px;-khtml-border-radius:5px;z-index:9999;", k = (document.body.offsetWidth - document.documentElement.scrollWidth) / 2, h[0] = this.creatDiv("yShade0", f, b, k, 0), h[1] = this.creatDiv("yShade1", f, g - b - e, k, b + e), h[2] = this.creatDiv("yShade2", c, e, k, b), h[3] = this.creatDiv("yShade3", f - d - c, e, d + c + k, b), h[4] = this.creatDiv("yShade4", d, e, c - 5 + k, b - 5, j), l = 0, m = h.length; m > l; l++)document.body.appendChild(h[l]);
            this.shadeStatu = !0
        }, mainElem: function () {
            var a = new Page(window.document), b = a.getMainArticle();
            return b && (YWebClipperConfiguration.doc.mainContent = b.elem, YWebClipperConfiguration.doc.contentType = "2"), b
        }(), run: function () {
            if (YNote.Common.log("YNote Run..."), "undefined" == typeof this.clipperManager)try {
                this.clipperManager = new YNote.ClipperManager
            } catch (a) {
                YNote.Common.log("Exception:" + a)
            }
            this.clipperManager.run()
        }, frameHandler: function (a) {
            var b, c;
            if (YNote.Common.log("Enter framehandler "), b = YNote.Common.wrapperEvent(a), this.clipperManager && "undefined" != typeof this.clipperManager)switch (c = this.clipperManager.clipper, b.target, YNote.Common.log("CALL FRAMEHANDLER :The State is " + c.state), this.clipperManager.clipper.state) {
                case YNote.Clipper.UPLOADING_FILE:
                    c.loadingView.style.display = "none", c.state = YNote.Clipper.DONE
            }
        }
    }, YNote.Common.log("------------------"), d = null, e = null, f = null, g = null, h = function () {
        g = document.createElement("div"), g.id = "ydNoteWebClipper_loading", g.innerHTML = '<div class="saving" style="z-index:99999;position:fixed;width:280px;height:140px;right:20px;top:20px;border: 1px solid #D0D0D0;border-radius:5px;box-shadow:rgba(208,208,208,0.2) 0px 6px 12px; -khtml-border-radius:5px;-webkit-border-radius:5px;-webkit-box-shadow:rgba(208,208,208,0.2) 0px 6px 12px;;-moz-border-radius:5px;-moz-box-shadow:rgba(208,208,208,0.2) 0px 6px 12px;-webkit-transition: all .3s ease-in-out;"><div class="inner" style="background-color: rgb(255, 255, 255);width:280px;height:140px;border-radius: 5px;"><a href="#" class="icon" style="width:10px;height:10px;background:url(//note.youdao.com/yws/images/webclipper/close_normal.svg) no-repeat;margin: 20px 20px 0 0;float: right;" onclick="document.body.removeChild(document.getElementById(&#x27;ydNoteWebClipper_loading&#x27;));"></a><i class="icon" style="display:inline-block;width:40px;height:40px;background:url(//note.youdao.com/yws/images/webclipper/loading.gif) no-repeat;margin: 24px 120px;"></i></div></div>'
    }, i = function () {
        YNote.Common.log("enter loopFunc:"), "complete" != document.readyState && "loaded" != document.readyState && "interactive" != document.readyState || !document.body ? d = setTimeout(i, 300) : (window._ynote_app_load = !0, window.yApp = new YNote.App, yApp.run(), "2" === YWebClipperConfiguration.doc.contentType && yApp.createClipDiv(), yApp.crossDomain.receiveMessage(function (a) {
            var c, d, b = document.getElementById("ydNoteWebClipper");
            "close" === a.data ? (yApp.clipperManager.clipper.close(), yApp.removeClipDiv(), window["postMessage"] || (window.location = yApp.clipperManager.clipper.source)) : "folder_up_fullPage_iframe" === a.data ? (c = 412, document.getElementById("ydNoteWebClipper_view").style.height = c + "px") : "folder_down_fullPage_iframe" === a.data ? (c = 400, document.getElementById("ydNoteWebClipper_view").style.height = c + "px") : "folder_up_selectPage_iframe" === a.data ? (c = 421, document.getElementById("ydNoteWebClipper_view").style.height = c + "px") : "folder_down_selectPage_iframe" === a.data ? (c = 409, document.getElementById("ydNoteWebClipper_view").style.height = c + "px") : "clear_back_style" === a.data ? (b.style.display = "block", g && document.body.removeChild(g), g = null, c = 220, d = 290, document.getElementById("ydNoteWebClipper_view").removeAttribute("style"), document.getElementById("ydNoteWebClipper-New").removeAttribute("style"), document.getElementById("ydNoteWebClipper_view").style.height = c + "px", document.getElementById("ydNoteWebClipper_view").style.width = d + "px", document.getElementById("ydNoteWebClipper-New").style.width = d + 2 + "px", document.getElementById("ydNoteWebClipper").style.width = d + 10 + "px") : "space_full" === a.data ? (b.style.display = "block", g && document.body.removeChild(g), g = null, c = 220, d = 290, document.getElementById("ydNoteWebClipper_view").removeAttribute("style"), document.getElementById("ydNoteWebClipper-New").removeAttribute("style"), document.getElementById("ydNoteWebClipper_view").style.height = c + "px", document.getElementById("ydNoteWebClipper_view").style.width = d + "px", document.getElementById("ydNoteWebClipper-New").style.width = d + 2 + "px", document.getElementById("ydNoteWebClipper").style.width = d + 10 + "px") : "success" === a.data ? (b.style.display = "block", g && document.body.removeChild(g), g = null, _hmt.push(["_trackEvent", "save-note-success-tag", "loadPage"]), c = 220, d = 290, document.getElementById("ydNoteWebClipper_view").removeAttribute("style"), document.getElementById("ydNoteWebClipper-New").removeAttribute("style"), document.getElementById("ydNoteWebClipper_view").style.height = c + "px", document.getElementById("ydNoteWebClipper_view").style.width = d + "px", document.getElementById("ydNoteWebClipper-New").style.width = d + 2 + "px", document.getElementById("ydNoteWebClipper").style.width = d + 10 + "px") : "loading" === a.data ? (b.style.display = "none", g || h(), document.body.appendChild(g)) : "resize_fullpage" === a.data || "resize_login" === a.data || "openid" === a.data || "resize_selectpage" === a.data ? (b.style.display = "block", g && document.body.removeChild(g), g = null, c = 427, d = 279, "openid" === a.data ? (c = 427, d = 400) : "resize_fullpage" === a.data ? (c = 400, d = 279) : "resize_selectpage" === a.data && (c = 409, d = 279), document.getElementById("ydNoteWebClipper_view").style.height = c + "px", YNote.Common.browser.isIE && (document.getElementById("ydNoteWebClipper_view").style.height = c + 10 + "px", document.getElementById("_YNoteContentFrame").style.height = c + 10 + "px"), document.getElementById("ydNoteWebClipper_view").style.width = d + "px", document.getElementById("ydNoteWebClipper-New").style.width = d + 2 + "px", document.getElementById("ydNoteWebClipper").style.width = d + 10 + "px") : "remove" === a.data ? yApp.removeClipDiv() : "creat" === a.data && yApp.createClipDiv()
        }, document.location.protocol + "//note.youdao.com"), window.addEventListener ? window.addEventListener("resize", f) : window.attachEvent("onresize", f), f = function () {
        }, clearTimeout(d))
    }, d = setTimeout(i, 300), f = function () {
        window.yApp && (e && (clearTimeout(e), e = null), e = setTimeout(function () {
            yApp.shadeStatu && yApp.createClipDiv()
        }, 200))
    }
}();