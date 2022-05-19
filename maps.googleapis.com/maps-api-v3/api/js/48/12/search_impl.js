google.maps.__gjsload__('search_impl', function(_) {
    var nsb = function(a) {
            _.E(this, a, 4)
        },
        psb = function(a) {
            osb || (osb = {
                V: "sssM",
                ba: ["ss"]
            });
            var b = osb;
            return _.Bi.ib(a.Fb(), b)
        },
        qsb = function(a, b) {
            a.L[2] = b
        },
        X$ = function(a) {
            _.E(this, a, 3)
        },
        rsb = function() {
            var a = _.Fj,
                b = _.Qi;
            this.j = _.Xf;
            this.h = _.Ck(_.tr, a, _.hs + "/maps/api/js/LayersService.GetFeature", b)
        },
        usb = function(a, b, c) {
            var d = _.zB(new rsb);
            c.Rq = (0, _.Ma)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.pCa(c, _.QH(b));
            var e = [];
            e.push(_.F.addListener(c, "click", (0, _.Ma)(ssb, null, a)));
            _.pb(["mouseover", "mouseout", "mousemove"],
                function(f) {
                    e.push(_.F.addListener(c, f, (0, _.Ma)(tsb, null, a, f)))
                });
            e.push(_.F.addListener(a, "clickable_changed", function() {
                a.h.clickable = 0 != a.get("clickable")
            }));
            a.j = e
        },
        ssb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Kk(e, 1) ? new _.Ee(_.Id(e.getLocation(), 0), _.Id(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.Rd(e, 2); g < h; ++g) {
                    var k = new _.WH(_.Sk(e, 2, g));
                    f.fields[k.getKey()] = k.Sa()
                }
            }
            _.F.trigger(a, "click", b, c, d, f)
        },
        tsb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.F.trigger(a, b, c, d, e, h, g)
        },
        vsb = function() {},
        osb;
    _.C(nsb, _.D);
    _.C(X$, _.D);
    X$.prototype.getStatus = function() {
        return _.Hd(this, 0, -1)
    };
    X$.prototype.getLocation = function() {
        return new _.Om(this.L[1])
    };
    rsb.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new nsb;
        d.L[0] = a.layerId.split("|")[0];
        d.L[1] = a.featureId;
        qsb(d, _.Sd(_.Vd(this.j)));
        for (var e in a.parameters) {
            var f = new _.WH(_.Qd(d, 3));
            f.L[0] = e;
            f.L[1] = a.parameters[e]
        }
        a = psb(d);
        this.h(a, c, c);
        return a
    };
    rsb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    vsb.prototype.iu = function(a) {
        if (_.ii[15]) {
            var b = a.ke,
                c = a.ke = a.getMap();
            b && a.h && (a.l ? (b = b.__gm.j, b.set(b.get().bg(a.h))) : a.h && _.LCa(a.h, b) && (_.pb(a.j || [], _.F.removeListener), a.j = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer");
                b = new _.Tl;
                d = d.split("|");
                b.layerId = d[0];
                for (var r = 1; r < d.length; ++r) {
                    var t =
                        d[r].split(":");
                    b.parameters[t[0]] = t[1]
                }
                e && (b.spotlightDescription = new _.np(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.Wl(g));
                m && (b.travelMapRequest = new _.or(m));
                h && (b.mapsApiLayer = new _.Wk(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.sn(p));
                q && (b.overlayLayer = new _.$o(q));
                b.darkLaunch = !!k;
                a.h = b;
                a.l = a.get("renderOnBaseMap");
                a.l ? (a = c.__gm.j, a.set(a.get().se(b))) : usb(a, c, b);
                _.og(c, "Lg");
                _.cg(c, 148282)
            }
        }
    };
    _.Ze("search_impl", new vsb);
});